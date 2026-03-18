const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

const bot = new TelegramBot(config.token, { polling: true });

bot.onText(/\/test/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Test command works!');
});

console.log('Test bot started');