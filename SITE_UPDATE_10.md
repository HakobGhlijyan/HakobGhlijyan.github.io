# Site Update 10 — CentSweep
Скопируй файлы поверх репозитория (пути = пути в репо):
- index.html (портфолио: ссылка App Store без старого слага, описание CentSweep, путь QR)
- CentSweep/index.html (ссылки App Store, og/twitter image, QR, squircle, "coins"→"Tier N", Last updated: November 2026)
- CentSweep/assets/main.js (подписи Tier во всех 7 языках)
- NEW CentSweep/assets/marketing/link-card-1200x628.png, qr-code-white.png
- NEW CentSweep/assets/icons/centsweep_squircle.svg

Затем:
git rm -r "CentSweep/assets/Balance Cleaner - marketingtools" CentSweep/assets/icons/balance_cleaner_squircle.svg
(перед этим проверь, что в index.html/main.js больше нет ссылок на эти пути: grep -rn "marketingtools\|balance_cleaner" .)
git add -A && git commit -m "Site Update 10: CentSweep rename" && git push

Вручную перегенерировать (старое имя "в пикселях"): скриншоты/мокапы в CentSweep/assets/screenshots и mockups, баннеры из marketingtools (Landscape/Portrait/Square/Story), root images/project-1.jpg — проверь, есть ли на них название.
Проверить в браузере: /CentSweep/#support и /#privacy открываются.
