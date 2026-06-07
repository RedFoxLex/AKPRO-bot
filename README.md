# AKPRO Bot

Telegram бот для бронирования услуг

## Установка

```bash
npm install
```

## Настройка

Скопируйте `.env.example` в `.env` и заполните переменные:

```bash
cp .env.example .env
```

Важные параметры:

- `TELEGRAM_BOT_TOKEN` — токен бота из BotFather.
- `GOOGLE_*` — нужны только для интеграции с Google Calendar.
- Для локального запуска бот показывает диагностику старта: наличие `.env`, наличие токена, подозрительный формат токена и найденные proxy-переменные.
- Если в системе есть `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY` и похожие переменные, бот очищает их перед подключением к Telegram и пишет это в лог.

## Запуск

```bash
npm start
```

## Что смотреть в логах

- `[startup] .env present: no` — файл `.env` не найден.
- `[startup] TELEGRAM_BOT_TOKEN present: no` — токен не подхватился.
- `[startup] TELEGRAM_BOT_TOKEN format: looks suspicious` — токен похож на неправильный.
- `[telegram] Diagnosis: ...` — человекочитаемая причина сетевой ошибки при polling.

Для локальной разработки в VS Code используется тот же entry point: `src/index.js`.
