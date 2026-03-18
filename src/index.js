const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const { setupHandlers } = require('./handlers');

const bot = new TelegramBot(config.token, { polling: true });

setupHandlers();

console.log('Bot started');

bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});