# Deploy Instructions

## Prerequisites

1. Node.js 18+
2. Telegram Bot Token
3. Google Calendar API credentials

## Installation

1. Clone the repository:
```bash
git clone https://github.com/RedFoxLex/AKPRO-bot.git
cd AKPRO-bot
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` file with your credentials:
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token from @BotFather
- `ADMIN_CHAT_ID` - Your Telegram chat ID
- `GOOGLE_CALENDAR_ID` - Google Calendar ID
- `GOOGLE_CREDENTIALS` - Google service account JSON
- `PROXY_URL` - Optional proxy URL

4. Start the bot:
```bash
npm start
```

## Running as Service

### Linux (systemd)

1. Copy service file:
```bash
sudo cp jarvis-bot.service /etc/systemd/system/
```

2. Enable and start:
```bash
sudo systemctl enable jarvis-bot
sudo systemctl start jarvis-bot
```

3. Check status:
```bash
sudo systemctl status jarvis-bot
```

## Docker

1. Build image:
```bash
docker build -t akpro-bot .
```

2. Run container:
```bash
docker run -d --env-file .env akpro-bot
```

## Troubleshooting

- Check logs: `journalctl -u jarvis-bot -f`
- Verify environment variables
- Check Telegram bot token
- Verify Google Calendar permissions