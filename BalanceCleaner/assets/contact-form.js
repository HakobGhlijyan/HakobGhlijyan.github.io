/**
 * contact-form.js — единый обработчик формы обратной связи / shared contact-form handler
 *
 * RU: Один и тот же файл лежит в каждом сайте приложения (BalanceCleaner, Nightwell, ...).
 *     Он отправляет форму через FormSubmit в фоне, без перезагрузки страницы, и сразу
 *     показывает под кнопкой статус: «Отправка…», «Сообщение отправлено» или ошибку.
 *     Адрес получателя берётся ТОЛЬКО из атрибута action формы (токен или e-mail).
 *     Больше нигде адрес не указывается.
 *
 * EN: The very same file ships with every app site (BalanceCleaner, Nightwell, ...).
 *     It submits the form to FormSubmit in the background (no page reload) and shows a
 *     status line right under the button: "Sending…", "Message sent" or an error.
 *     The recipient comes ONLY from the form's action attribute (token or e-mail).
 *     The address is never repeated anywhere else.
 *
 * MARK: - Как подключить новый проект / How to wire a new project
 *
 *   <form class="support-form" data-contact-form
 *         action="https://formsubmit.co/TOKEN_OR_EMAIL" method="POST"
 *         data-subject="[AppName] Support request"
 *         data-fallback-email="you@example.com">
 *     <input type="hidden" name="_subject" value="[AppName] Support request">
 *     <input type="hidden" name="_template" value="table">
 *     <input type="hidden" name="_captcha" value="false">
 *     <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
 *     <input type="text" name="name" required>
 *     <input type="email" name="email" required>
 *     <textarea name="message" required></textarea>
 *     <button type="submit">Send</button>
 *   </form>
 *   <script src="contact-form.js"></script>
 *
 *   data-subject         RU: тема письма; к ней добавляется « — имя отправителя».
 *                        EN: mail subject; " — sender name" is appended.
 *   data-fallback-email  RU: адрес, который покажем в сообщении об ошибке.
 *                        EN: address shown in the error message.
 *   data-timeout-ms      RU: необязательно, таймаут в мс (по умолчанию 20000).
 *                        EN: optional timeout in ms (default 20000).
 *
 *   RU: Язык берётся из <html lang="…">; поддерживаются en, ru, fr, de, es, it, hy
 *       (для остальных — английский). Стили .form-status задаёт сам сайт.
 *   EN: Language comes from <html lang="…">; en, ru, fr, de, es, it, hy are supported
 *       (English otherwise). The site's own CSS styles .form-status.
 */
(() => {
  'use strict';

  // MARK: - Messages / Тексты (7 языков)
  const MESSAGES = {
    en: {
      sending: 'Sending…',
      sent: 'Message sent! Thank you — we will reply to your email as soon as possible.',
      error: 'Could not send the message. Please write directly to {email}.'
    },
    ru: {
      sending: 'Отправка…',
      sent: 'Сообщение отправлено! Спасибо — мы ответим на вашу почту в ближайшее время.',
      error: 'Не удалось отправить сообщение. Напишите напрямую на {email}.'
    },
    fr: {
      sending: 'Envoi en cours…',
      sent: 'Message envoyé ! Merci — nous répondrons à votre e-mail dès que possible.',
      error: 'Impossible d\'envoyer le message. Écrivez directement à {email}.'
    },
    de: {
      sending: 'Wird gesendet…',
      sent: 'Nachricht gesendet! Danke — wir antworten so bald wie möglich auf Ihre E-Mail.',
      error: 'Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie direkt an {email}.'
    },
    es: {
      sending: 'Enviando…',
      sent: '¡Mensaje enviado! Gracias — responderemos a tu correo lo antes posible.',
      error: 'No se pudo enviar el mensaje. Escribe directamente a {email}.'
    },
    it: {
      sending: 'Invio in corso…',
      sent: 'Messaggio inviato! Grazie — risponderemo alla tua email il prima possibile.',
      error: 'Impossibile inviare il messaggio. Scrivi direttamente a {email}.'
    },
    hy: {
      sending: 'Ուղարկվում է…',
      sent: 'Հաղորդագրությունն ուղարկվեց։ Շնորհակալություն — մենք հնարավորինս շուտ կպատասխանենք ձեր էլ. փոստին։',
      error: 'Չհաջողվեց ուղարկել հաղորդագրությունը։ Գրեք անմիջապես {email}։'
    }
  };

  const DEFAULT_TIMEOUT_MS = 20000;

  // MARK: - Helpers / Вспомогательные функции
  const text = (key, email = '') => {
    const lang = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    return (MESSAGES[lang] ?? MESSAGES.en)[key].replace('{email}', email);
  };

  /** RU: FormSubmit принимает ответ в JSON на /ajax/-адресе. EN: FormSubmit's JSON endpoint. */
  const ajaxURL = (action) =>
    action.includes('/ajax/') ? action : action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

  // MARK: - Form setup / Инициализация формы
  function init(form) {
    const button = form.querySelector('[type="submit"]');
    const fallbackEmail = form.dataset.fallbackEmail || '';

    if (!fallbackEmail) console.warn('[contact-form] data-fallback-email is missing on', form);

    // RU: строка статуса под кнопкой. EN: status line under the button.
    const status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    if (button) button.insertAdjacentElement('afterend', status);
    else form.append(status);

    const show = (state, message) => {
      status.className = `form-status is-${state}`;
      status.textContent = message;
    };

    let busy = false;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (busy) return; // RU: защита от двойной отправки. EN: no double submit.

      const data = new FormData(form);

      // RU: honeypot — бот заполнил скрытое поле, делаем вид, что всё ок.
      // EN: honeypot — a bot filled the hidden field, pretend success.
      if (data.get('_honey')) {
        form.reset();
        show('success', `✓ ${text('sent')}`);
        return;
      }

      const name = String(data.get('name') ?? '').trim();
      const baseSubject = form.dataset.subject || document.title;
      data.set('_subject', name ? `${baseSubject} — ${name}` : baseSubject);

      busy = true;
      if (button) button.disabled = true;
      show('sending', text('sending'));

      const timeoutMs = Number(form.dataset.timeoutMs) || DEFAULT_TIMEOUT_MS;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);

      try {
        const response = await fetch(ajaxURL(form.getAttribute('action')), {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
          signal: controller.signal
        });
        const payload = await response.json().catch(() => null);
        const accepted =
          response.ok && (payload === null || payload.success === true || payload.success === 'true');
        if (!accepted) throw new Error(payload?.message ?? `HTTP ${response.status}`);

        form.reset();
        show('success', `✓ ${text('sent')}`);
      } catch (error) {
        console.warn('[contact-form]', error);
        show('error', text('error', fallbackEmail));
      } finally {
        clearTimeout(timer);
        busy = false;
        if (button) button.disabled = false;
      }
    });
  }

  document.querySelectorAll('form[data-contact-form]').forEach(init);
})();
