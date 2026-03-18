module.exports = {
  token: process.env.TELEGRAM_BOT_TOKEN || '',
  adminChatId: process.env.ADMIN_CHAT_ID || '',
  google: {
    calendarId: process.env.GOOGLE_CALENDAR_ID || '',
    credentials: process.env.GOOGLE_CREDENTIALS ? JSON.parse(process.env.GOOGLE_CREDENTIALS) : null
  },
  proxy: {
    url: process.env.PROXY_URL || ''
  }
};