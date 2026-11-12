# Privacy и Support — тексты для сайта / Website privacy & support copy

> 6 языков. Структура повторяет сайт Nightwell: Privacy — 13 нумерованных разделов, Support — «Как помочь?», 4 шага старта, 7 вопросов. Плейсхолдер почты: `{{SUPPORT_EMAIL}}` — замени при сборке сайта (в твоих сайтах она уже стоит). Тексты привязаны к реальному поведению приложения (проверено по проекту: PrivacyInfo, CloudKit private DB, чтение геопозиции из EXIF, геокодинг Apple, «Недавно удалённые» 3 дня, iOS 18+). Если поведение приложения изменится — обнови и эти тексты.

> Юридическая оговорка: это не юридическая консультация; перед публикацией прочитай и сверь с фактическим поведением сайта (форма обратной связи, шрифты Google Fonts, если подключены — упомяни в разделе «Этот сайт»).


---

# English (`en`)

## Privacy — «The app does not collect your personal data.»

1. **Summary.** Filter Studio has no accounts, no ads and no analytics. Your photos, edits and their metadata stay on your device. If you turn on iCloud, they sync only through your own private iCloud, which the developer cannot access.
2. **Who we are.** Filter Studio is developed by Hakob Ghlijyan, an independent developer. Contact: {{SUPPORT_EMAIL}}.
3. **What the app stores.** Photos you import, the edited versions you save, their metadata (date, camera, location if the photo has it), albums, favourites and your settings. All of it is stored in the app’s own storage on your device.
4. **iCloud.** Sync is optional. When enabled, the app uses Apple’s private CloudKit database tied to your Apple ID. Only you can access it; the developer has no access and no copy. You can switch sync off in Settings.
5. **Photos.** You pick photos with the system photo picker. The app asks for access to Photos once, only to read the location of the photos you picked, and, if you tap Save to Photos, to add edited images. It never scans or uploads your library.
6. **Location.** Location is read only from the metadata that is already inside a photo. To show a place name, the app may send those coordinates to Apple’s geocoding service. Nothing is sent to the developer.
7. **What we do not do.** No tracking, no advertising, no third-party analytics or SDKs, no selling or sharing of data, no account, no profiling.
8. **Diagnostic logs.** The app writes no logs that leave your device. If you share crash reports with Apple through iOS settings, Apple may provide anonymous reports to developers.
9. **Data export and deletion.** Sharing and exporting keep your photo’s metadata intact — the choice of where to send it is yours. Deleted photos stay 3 days in Recently Deleted. With iCloud on, deleting a photo also deletes it on your other devices. Deleting the app removes its local data.
10. **Children.** The app is not directed at children and collects no personal information from anyone.
11. **Security.** Data stays in the app’s protected storage on your device and, optionally, in your private iCloud, both protected by iOS.
12. **This website.** This site is static. It sets no tracking cookies and uses no analytics. If you write through the contact form, we use your name, email and message only to reply.
13. **Contact.** Questions about privacy: {{SUPPORT_EMAIL}}.

## Support — «How can we help?»

Write to us: {{SUPPORT_EMAIL}} — we reply as soon as we can.

### Getting started (4 steps)

1. Tap + in the Editor and pick a photo.
2. Choose a filter, crop, mirror or add a watermark.
3. Save — every save becomes a new version in Photos.
4. Find it in Photos or Collections, then share or save to Photos.

### FAQ

- **What devices and software do I need?** An iPhone or iPad with iOS 18 or later.
- **Is my original photo changed?** No. Every edit is saved as a separate version; the original stays untouched.
- **How does iCloud sync work?** Turn it on in Settings → iCloud. Sign in to iCloud on every device with the same Apple ID, keep some iCloud storage free and give it a few minutes on a good connection. Large photos can take longer.
- **Some photos do not sync. What should I do?** They are safe on your device. Update the app to the latest version, keep the app open on Wi‑Fi for a while and check iCloud storage in iOS Settings. If it persists, write to us.
- **I deleted a photo by mistake.** Open Collections → Recently Deleted. Photos stay there for 3 days and can be restored.
- **Is location kept when I share or export?** Yes. Sharing and exporting keep the photo’s metadata, including location, unchanged.
- **Does Filter Studio send my photos anywhere?** No. Photos stay on your device and, if you enable it, in your private iCloud.

---

# Русский (`ru`)

## Privacy — «Приложение не собирает ваши личные данные.»

1. **Кратко.** В Filter Studio нет аккаунтов, рекламы и аналитики. Ваши фото, правки и метаданные остаются на устройстве. Если включить iCloud, они синхронизируются только через ваш личный iCloud — разработчик к нему доступа не имеет.
2. **Кто мы.** Filter Studio разрабатывает независимый разработчик Акоб Глиджян (Hakob Ghlijyan). Контакт: {{SUPPORT_EMAIL}}.
3. **Что хранит приложение.** Импортированные фото, сохранённые версии, их метаданные (дата, камера, геопозиция — если она есть в фото), альбомы, избранное и настройки. Всё хранится в собственной памяти приложения на вашем устройстве.
4. **iCloud.** Синхронизация необязательна. Если включить, приложение использует личную базу CloudKit Apple, привязанную к вашему Apple ID. Доступ есть только у вас; у разработчика нет ни доступа, ни копии. Синхронизацию можно выключить в Настройках.
5. **Фото.** Фото выбираются через системный выбор фотографий. Доступ к «Фото» запрашивается один раз — только чтобы прочитать геопозицию выбранных вами фото и, если вы нажали «Сохранить в Фото», добавить готовые изображения. Приложение не сканирует и не выгружает вашу медиатеку.
6. **Геопозиция.** Геопозиция берётся только из метаданных, уже содержащихся в фото. Чтобы показать название места, приложение может отправить эти координаты в службу геокодирования Apple. Разработчику ничего не отправляется.
7. **Чего мы не делаем.** Нет слежки, рекламы, сторонней аналитики и SDK, продажи или передачи данных, аккаунтов и профилирования.
8. **Диагностика.** Приложение не отправляет журналы с вашего устройства. Если вы делитесь отчётами о сбоях с Apple через настройки iOS, Apple может передавать разработчикам анонимные отчёты.
9. **Экспорт и удаление данных.** «Поделиться» и экспорт сохраняют метаданные фото — куда отправить, решаете вы. Удалённые фото 3 дня хранятся в «Недавно удалённых». При включённом iCloud удаление фото удаляет его и на других ваших устройствах. Удаление приложения стирает его локальные данные.
10. **Дети.** Приложение не предназначено для детей и не собирает личную информацию ни у кого.
11. **Безопасность.** Данные лежат в защищённой памяти приложения на устройстве и, по желанию, в вашем личном iCloud — оба защищены iOS.
12. **Этот сайт.** Сайт статический. Он не ставит отслеживающие cookie и не использует аналитику. Если вы пишете через форму, имя, email и сообщение используются только для ответа.
13. **Контакты.** Вопросы о приватности: {{SUPPORT_EMAIL}}.

## Support — «Чем помочь?»

Напишите нам: {{SUPPORT_EMAIL}} — ответим как можно скорее.

### Быстрый старт (4 шага)

1. Нажмите «+» в Редакторе и выберите фото.
2. Выберите фильтр, обрежьте, отразите или добавьте водяной знак.
3. Сохраните — каждое сохранение становится новой версией в «Фото».
4. Найдите её в «Фото» или «Коллекциях», поделитесь или сохраните в Фото.

### Вопросы и ответы

- **Какие устройства и версия ПО нужны?** iPhone или iPad с iOS 18 и новее.
- **Меняется ли моё исходное фото?** Нет. Каждая правка сохраняется отдельной версией, оригинал остаётся нетронутым.
- **Как работает синхронизация iCloud?** Включите в Настройки → iCloud. Войдите в iCloud на всех устройствах под одним Apple ID, оставьте свободное место в iCloud и дайте несколько минут при хорошем соединении. Большие фото могут идти дольше.
- **Некоторые фото не синхронизируются. Что делать?** Они в безопасности на вашем устройстве. Обновите приложение до последней версии, подержите его открытым по Wi‑Fi и проверьте место в iCloud в Настройках iOS. Если не помогло — напишите нам.
- **Я случайно удалил(а) фото.** Откройте «Коллекции» → «Недавно удалённые». Фото хранятся там 3 дня и их можно восстановить.
- **Сохраняется ли геопозиция при экспорте?** Да. «Поделиться» и экспорт сохраняют метаданные фото, включая геопозицию, без изменений.
- **Отправляет ли Filter Studio мои фото куда-либо?** Нет. Фото остаются на устройстве и, если вы включили, в вашем личном iCloud.

---

# Français (`fr`)

## Privacy — «L’app ne collecte pas vos données personnelles.»

1. **Résumé.** Filter Studio n’a ni compte, ni publicité, ni outil d’analyse. Vos photos, retouches et métadonnées restent sur votre appareil. Si vous activez iCloud, elles se synchronisent uniquement via votre iCloud privé, auquel le développeur n’a pas accès.
2. **Qui sommes-nous.** Filter Studio est développé par Hakob Ghlijyan, développeur indépendant. Contact : {{SUPPORT_EMAIL}}.
3. **Ce que l’app stocke.** Les photos importées, les versions enregistrées, leurs métadonnées (date, appareil, position si la photo en contient), les albums, les favoris et vos réglages. Tout est stocké dans l’espace propre à l’app sur votre appareil.
4. **iCloud.** La synchronisation est facultative. Activée, l’app utilise la base CloudKit privée d’Apple liée à votre identifiant Apple. Vous seul y avez accès ; le développeur n’y a ni accès ni copie. Vous pouvez la désactiver dans Réglages.
5. **Photos.** Vous choisissez les photos avec le sélecteur système. L’app demande l’accès à Photos une seule fois, uniquement pour lire la position des photos choisies et, si vous touchez « Enregistrer dans Photos », pour ajouter les images retouchées. Elle n’analyse ni n’envoie jamais votre photothèque.
6. **Position.** La position provient uniquement des métadonnées déjà présentes dans la photo. Pour afficher un nom de lieu, l’app peut envoyer ces coordonnées au service de géocodage d’Apple. Rien n’est envoyé au développeur.
7. **Ce que nous ne faisons pas.** Aucun suivi, aucune publicité, aucun SDK ou outil d’analyse tiers, aucune vente ni partage de données, aucun compte, aucun profilage.
8. **Journaux de diagnostic.** L’app n’envoie aucun journal hors de votre appareil. Si vous partagez des rapports de plantage avec Apple dans les réglages iOS, Apple peut fournir des rapports anonymes aux développeurs.
9. **Export et suppression des données.** Le partage et l’export conservent les métadonnées de la photo ; vous choisissez la destination. Les photos supprimées restent 3 jours dans « Supprimés récemment ». Avec iCloud, supprimer une photo la supprime aussi sur vos autres appareils. Supprimer l’app efface ses données locales.
10. **Enfants.** L’app ne s’adresse pas aux enfants et ne collecte d’informations personnelles auprès de personne.
11. **Sécurité.** Les données restent dans l’espace protégé de l’app sur votre appareil et, en option, dans votre iCloud privé, tous deux protégés par iOS.
12. **Ce site web.** Ce site est statique. Il ne dépose aucun cookie de suivi et n’utilise aucun outil d’analyse. Si vous écrivez via le formulaire, votre nom, e-mail et message ne servent qu’à vous répondre.
13. **Contact.** Questions sur la confidentialité : {{SUPPORT_EMAIL}}.

## Support — «Comment pouvons-nous vous aider ?»

Écrivez-nous : {{SUPPORT_EMAIL}} — nous répondons dès que possible.

### Premiers pas (4 étapes)

1. Touchez + dans l’Éditeur et choisissez une photo.
2. Choisissez un filtre, recadrez, inversez ou ajoutez un filigrane.
3. Enregistrez : chaque enregistrement devient une nouvelle version dans Photos.
4. Retrouvez-la dans Photos ou Collections, puis partagez ou enregistrez dans Photos.

### FAQ

- **De quel appareil et de quelle version ai-je besoin ?** Un iPhone ou un iPad sous iOS 18 ou version ultérieure.
- **Ma photo d’origine est-elle modifiée ?** Non. Chaque retouche est enregistrée comme version distincte ; l’original reste intact.
- **Comment fonctionne la synchronisation iCloud ?** Activez-la dans Réglages → iCloud. Connectez-vous à iCloud sur chaque appareil avec le même identifiant Apple, gardez de l’espace iCloud libre et laissez quelques minutes avec une bonne connexion. Les grandes photos peuvent prendre plus de temps.
- **Certaines photos ne se synchronisent pas. Que faire ?** Elles sont en sécurité sur votre appareil. Mettez l’app à jour, laissez-la ouverte en Wi‑Fi un moment et vérifiez l’espace iCloud dans les Réglages iOS. Si cela persiste, écrivez-nous.
- **J’ai supprimé une photo par erreur.** Ouvrez Collections → Supprimés récemment. Les photos y restent 3 jours et peuvent être restaurées.
- **La position est-elle conservée à l’export ?** Oui. Le partage et l’export conservent les métadonnées de la photo, position comprise, sans modification.
- **Filter Studio envoie-t-il mes photos quelque part ?** Non. Les photos restent sur votre appareil et, si vous l’activez, dans votre iCloud privé.

---

# Español (`es`)

## Privacy — «La app no recopila tus datos personales.»

1. **Resumen.** Filter Studio no tiene cuentas, anuncios ni analítica. Tus fotos, ediciones y metadatos se quedan en tu dispositivo. Si activas iCloud, se sincronizan solo a través de tu iCloud privado, al que el desarrollador no tiene acceso.
2. **Quiénes somos.** Filter Studio lo desarrolla Hakob Ghlijyan, desarrollador independiente. Contacto: {{SUPPORT_EMAIL}}.
3. **Qué almacena la app.** Las fotos que importas, las versiones que guardas, sus metadatos (fecha, cámara, ubicación si la foto la incluye), álbumes, favoritas y tus ajustes. Todo se guarda en el almacenamiento propio de la app en tu dispositivo.
4. **iCloud.** La sincronización es opcional. Si la activas, la app usa la base de datos privada de CloudKit de Apple vinculada a tu ID de Apple. Solo tú accedes a ella; el desarrollador no tiene acceso ni copia. Puedes desactivarla en Ajustes.
5. **Fotos.** Eliges las fotos con el selector del sistema. La app pide acceso a Fotos una sola vez, solo para leer la ubicación de las fotos que elegiste y, si pulsas Guardar en Fotos, para añadir las imágenes editadas. Nunca analiza ni sube tu biblioteca.
6. **Ubicación.** La ubicación se lee solo de los metadatos que ya contiene la foto. Para mostrar el nombre del lugar, la app puede enviar esas coordenadas al servicio de geocodificación de Apple. No se envía nada al desarrollador.
7. **Lo que no hacemos.** Sin rastreo, sin publicidad, sin analítica ni SDK de terceros, sin venta ni cesión de datos, sin cuenta y sin perfiles.
8. **Registros de diagnóstico.** La app no envía registros fuera de tu dispositivo. Si compartes informes de fallos con Apple en los ajustes de iOS, Apple puede facilitar informes anónimos a los desarrolladores.
9. **Exportación y eliminación de datos.** Compartir y exportar conservan los metadatos de la foto; tú eliges el destino. Las fotos eliminadas permanecen 3 días en Eliminados recientemente. Con iCloud activo, eliminar una foto también la elimina en tus otros dispositivos. Borrar la app elimina sus datos locales.
10. **Menores.** La app no está dirigida a menores y no recopila información personal de nadie.
11. **Seguridad.** Los datos permanecen en el almacenamiento protegido de la app en tu dispositivo y, opcionalmente, en tu iCloud privado; ambos protegidos por iOS.
12. **Este sitio web.** Este sitio es estático. No usa cookies de rastreo ni analítica. Si escribes por el formulario, usamos tu nombre, correo y mensaje solo para responderte.
13. **Contacto.** Preguntas sobre privacidad: {{SUPPORT_EMAIL}}.

## Support — «¿En qué podemos ayudarte?»

Escríbenos: {{SUPPORT_EMAIL}} — respondemos lo antes posible.

### Primeros pasos (4 pasos)

1. Toca + en el Editor y elige una foto.
2. Elige un filtro, recorta, voltea o añade una marca de agua.
3. Guarda: cada guardado se convierte en una versión nueva en Fotos.
4. Encuéntrala en Fotos o Colecciones y compártela o guárdala en Fotos.

### Preguntas frecuentes

- **¿Qué dispositivo y software necesito?** Un iPhone o iPad con iOS 18 o posterior.
- **¿Se modifica mi foto original?** No. Cada edición se guarda como una versión aparte; el original queda intacto.
- **¿Cómo funciona la sincronización con iCloud?** Actívala en Ajustes → iCloud. Inicia sesión en iCloud en cada dispositivo con el mismo ID de Apple, deja espacio libre en iCloud y dale unos minutos con buena conexión. Las fotos grandes pueden tardar más.
- **Algunas fotos no se sincronizan. ¿Qué hago?** Están a salvo en tu dispositivo. Actualiza la app, déjala abierta con Wi‑Fi un rato y revisa el espacio de iCloud en Ajustes de iOS. Si persiste, escríbenos.
- **Eliminé una foto por error.** Abre Colecciones → Eliminados recientemente. Las fotos permanecen allí 3 días y se pueden restaurar.
- **¿Se conserva la ubicación al exportar?** Sí. Compartir y exportar conservan los metadatos de la foto, incluida la ubicación, sin cambios.
- **¿Filter Studio envía mis fotos a algún sitio?** No. Las fotos se quedan en tu dispositivo y, si lo activas, en tu iCloud privado.

---

# Italiano (`it`)

## Privacy — «L’app non raccoglie i tuoi dati personali.»

1. **In breve.** Filter Studio non ha account, pubblicità né analisi. Foto, modifiche e metadati restano sul tuo dispositivo. Se attivi iCloud, si sincronizzano solo tramite il tuo iCloud privato, a cui lo sviluppatore non ha accesso.
2. **Chi siamo.** Filter Studio è sviluppata da Hakob Ghlijyan, sviluppatore indipendente. Contatto: {{SUPPORT_EMAIL}}.
3. **Cosa memorizza l’app.** Le foto importate, le versioni salvate, i loro metadati (data, fotocamera, posizione se presente nella foto), album, preferiti e impostazioni. Tutto è nella memoria dell’app sul tuo dispositivo.
4. **iCloud.** La sincronizzazione è facoltativa. Se attiva, l’app usa il database CloudKit privato di Apple collegato al tuo ID Apple. Solo tu puoi accedervi; lo sviluppatore non ha né accesso né copie. Puoi disattivarla in Impostazioni.
5. **Foto.** Scegli le foto con il selettore di sistema. L’app chiede l’accesso a Foto una sola volta, solo per leggere la posizione delle foto scelte e, se tocchi Salva in Foto, per aggiungere le immagini modificate. Non analizza né carica mai la tua libreria.
6. **Posizione.** La posizione viene letta solo dai metadati già presenti nella foto. Per mostrare il nome del luogo, l’app può inviare quelle coordinate al servizio di geocodifica di Apple. Allo sviluppatore non viene inviato nulla.
7. **Cosa non facciamo.** Nessun tracciamento, nessuna pubblicità, nessun SDK o analisi di terzi, nessuna vendita o condivisione di dati, nessun account, nessuna profilazione.
8. **Log diagnostici.** L’app non invia log fuori dal tuo dispositivo. Se condividi i rapporti sugli arresti anomali con Apple nelle impostazioni di iOS, Apple può fornire rapporti anonimi agli sviluppatori.
9. **Esportazione ed eliminazione dei dati.** Condivisione ed esportazione mantengono i metadati della foto; la destinazione la scegli tu. Le foto eliminate restano 3 giorni in Eliminati di recente. Con iCloud attivo, eliminare una foto la elimina anche sugli altri dispositivi. Eliminare l’app cancella i suoi dati locali.
10. **Minori.** L’app non è rivolta ai minori e non raccoglie informazioni personali da nessuno.
11. **Sicurezza.** I dati restano nella memoria protetta dell’app sul tuo dispositivo e, facoltativamente, nel tuo iCloud privato; entrambi protetti da iOS.
12. **Questo sito web.** Questo sito è statico. Non imposta cookie di tracciamento né usa analisi. Se scrivi dal modulo, usiamo nome, e-mail e messaggio solo per risponderti.
13. **Contatti.** Domande sulla privacy: {{SUPPORT_EMAIL}}.

## Support — «Come possiamo aiutarti?»

Scrivici: {{SUPPORT_EMAIL}} — rispondiamo il prima possibile.

### Per iniziare (4 passaggi)

1. Tocca + nell’Editor e scegli una foto.
2. Scegli un filtro, ritaglia, specchia o aggiungi una filigrana.
3. Salva: ogni salvataggio diventa una nuova versione in Foto.
4. Trovala in Foto o Raccolte, poi condividi o salva in Foto.

### Domande frequenti

- **Di quale dispositivo e software ho bisogno?** Un iPhone o iPad con iOS 18 o successivo.
- **La mia foto originale viene modificata?** No. Ogni modifica è salvata come versione separata; l’originale resta intatto.
- **Come funziona la sincronizzazione iCloud?** Attivala in Impostazioni → iCloud. Accedi a iCloud su ogni dispositivo con lo stesso ID Apple, lascia spazio libero su iCloud e dai qualche minuto con una buona connessione. Le foto grandi possono richiedere più tempo.
- **Alcune foto non si sincronizzano. Cosa faccio?** Sono al sicuro sul tuo dispositivo. Aggiorna l’app, tienila aperta con il Wi‑Fi per un po’ e controlla lo spazio iCloud nelle Impostazioni di iOS. Se persiste, scrivici.
- **Ho eliminato una foto per errore.** Apri Raccolte → Eliminati di recente. Le foto restano lì 3 giorni e si possono ripristinare.
- **La posizione viene mantenuta nell’esportazione?** Sì. Condivisione ed esportazione mantengono i metadati della foto, posizione inclusa, invariati.
- **Filter Studio invia le mie foto da qualche parte?** No. Le foto restano sul tuo dispositivo e, se lo attivi, nel tuo iCloud privato.

---

# Deutsch (`de`)

## Privacy — «Die App erfasst deine persönlichen Daten nicht.»

1. **Zusammenfassung.** Filter Studio hat keine Konten, keine Werbung und keine Analyse. Deine Fotos, Bearbeitungen und Metadaten bleiben auf deinem Gerät. Wenn du iCloud aktivierst, werden sie nur über deine private iCloud synchronisiert, auf die der Entwickler keinen Zugriff hat.
2. **Wer wir sind.** Filter Studio wird von Hakob Ghlijyan entwickelt, einem unabhängigen Entwickler. Kontakt: {{SUPPORT_EMAIL}}.
3. **Was die App speichert.** Importierte Fotos, gespeicherte Versionen, deren Metadaten (Datum, Kamera, Standort, falls im Foto vorhanden), Alben, Favoriten und deine Einstellungen. Alles liegt im App-eigenen Speicher auf deinem Gerät.
4. **iCloud.** Die Synchronisierung ist optional. Wenn aktiviert, nutzt die App Apples private CloudKit-Datenbank, die an deine Apple-ID gebunden ist. Nur du hast Zugriff; der Entwickler hat weder Zugriff noch eine Kopie. Du kannst sie in den Einstellungen ausschalten.
5. **Fotos.** Du wählst Fotos mit der System-Fotoauswahl. Die App fragt einmal nach Zugriff auf Fotos, nur um den Standort der gewählten Fotos zu lesen und, wenn du „In Fotos sichern“ tippst, bearbeitete Bilder hinzuzufügen. Sie durchsucht oder lädt nie deine Mediathek hoch.
6. **Standort.** Der Standort wird nur aus den Metadaten gelesen, die bereits im Foto stehen. Um einen Ortsnamen anzuzeigen, kann die App diese Koordinaten an Apples Geocoding-Dienst senden. An den Entwickler wird nichts gesendet.
7. **Was wir nicht tun.** Kein Tracking, keine Werbung, keine Analyse- oder Drittanbieter-SDKs, kein Verkauf oder Weitergabe von Daten, kein Konto, kein Profiling.
8. **Diagnoseprotokolle.** Die App sendet keine Protokolle von deinem Gerät. Wenn du in den iOS-Einstellungen Absturzberichte mit Apple teilst, kann Apple Entwicklern anonyme Berichte bereitstellen.
9. **Datenexport und Löschung.** Teilen und Exportieren behalten die Metadaten deines Fotos bei; das Ziel wählst du. Gelöschte Fotos bleiben 3 Tage in „Zuletzt gelöscht“. Bei aktiver iCloud wird ein gelöschtes Foto auch auf deinen anderen Geräten gelöscht. Das Löschen der App entfernt ihre lokalen Daten.
10. **Kinder.** Die App richtet sich nicht an Kinder und erfasst von niemandem persönliche Informationen.
11. **Sicherheit.** Die Daten bleiben im geschützten App-Speicher auf deinem Gerät und optional in deiner privaten iCloud, beides durch iOS geschützt.
12. **Diese Website.** Diese Seite ist statisch. Sie setzt keine Tracking-Cookies und nutzt keine Analyse. Wenn du das Kontaktformular verwendest, nutzen wir Name, E-Mail und Nachricht nur für die Antwort.
13. **Kontakt.** Fragen zum Datenschutz: {{SUPPORT_EMAIL}}.

## Support — «Wie können wir helfen?»

Schreib uns: {{SUPPORT_EMAIL}} — wir antworten so schnell wie möglich.

### Erste Schritte (4 Schritte)

1. Tippe im Editor auf + und wähle ein Foto.
2. Wähle einen Filter, schneide zu, spiegle oder füge ein Wasserzeichen hinzu.
3. Sichere: Jedes Sichern wird eine neue Version in Fotos.
4. Finde sie in Fotos oder Sammlungen, dann teile sie oder sichere sie in Fotos.

### Häufige Fragen

- **Welches Gerät und welche Software brauche ich?** Ein iPhone oder iPad mit iOS 18 oder neuer.
- **Wird mein Originalfoto verändert?** Nein. Jede Bearbeitung wird als eigene Version gespeichert; das Original bleibt unberührt.
- **Wie funktioniert die iCloud-Synchronisierung?** Aktiviere sie unter Einstellungen → iCloud. Melde dich auf allen Geräten mit derselben Apple-ID bei iCloud an, lass iCloud-Speicher frei und gib ihr bei guter Verbindung ein paar Minuten. Große Fotos können länger dauern.
- **Einige Fotos werden nicht synchronisiert. Was tun?** Sie sind auf deinem Gerät sicher. Aktualisiere die App, lass sie eine Weile im WLAN geöffnet und prüfe den iCloud-Speicher in den iOS-Einstellungen. Wenn es bleibt, schreib uns.
- **Ich habe ein Foto versehentlich gelöscht.** Öffne Sammlungen → Zuletzt gelöscht. Fotos bleiben dort 3 Tage und lassen sich wiederherstellen.
- **Bleibt der Standort beim Exportieren erhalten?** Ja. Teilen und Exportieren behalten die Metadaten des Fotos, einschließlich Standort, unverändert bei.
- **Sendet Filter Studio meine Fotos irgendwohin?** Nein. Fotos bleiben auf deinem Gerät und, wenn du es aktivierst, in deiner privaten iCloud.
