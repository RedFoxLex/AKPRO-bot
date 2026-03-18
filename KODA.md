# Koda Configuration

This file contains configuration for Koda AI assistant.

## Settings

- **Mode**: Code
- **Language**: Russian
- **Project Type**: Node.js

## Features

- Telegram Bot API
- Google Calendar Integration
- Database Management
- Admin Panel

## Commands

- `npm start` - Start the bot
- `npm test` - Run tests
- `npm run dev` - Start in development mode

## Environment

Required environment variables:
- `TELEGRAM_BOT_TOKEN`
- `ADMIN_CHAT_ID`
- `GOOGLE_CALENDAR_ID`
- `GOOGLE_CREDENTIALS`

## Notes

- Bot uses polling mode by default
- Supports proxy configuration
- Database stored in JSON format