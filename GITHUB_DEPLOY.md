# GitHub Deployment

## Quick Setup

1. Create a new repository on GitHub
2. Initialize local git:
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Add remote:
```bash
git remote add origin https://github.com/RedFoxLex/AKPRO-bot.git
```

4. Push to GitHub:
```bash
git branch -M main
git push -u origin main
```

## GitHub Actions

The project includes GitHub Actions workflow for automatic deployment.

### Required Secrets

Add these secrets in your repository settings:
- `TELEGRAM_BOT_TOKEN`
- `ADMIN_CHAT_ID`
- `GOOGLE_CALENDAR_ID`
- `GOOGLE_CREDENTIALS`
- `PROXY_URL` (optional)

### Manual Deployment

1. Go to Actions tab
2. Select "Run Telegram Bot"
3. Click "Run workflow"

## Environment Variables

See `.env.example` for required variables.