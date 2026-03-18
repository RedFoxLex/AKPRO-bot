const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

let bot;

function initBot() {
  const token = config.token;
  
  if (!token) {
    throw new Error('TELEGRAM_BOT_TOKEN not set');
  }

  if (config.proxy.url) {
    const ProxyAgent = require('https-proxy-agent');
    const agent = new ProxyAgent(config.proxy.url);
    bot = new TelegramBot(token, { agent });
  } else {
    bot = new TelegramBot(token, { polling: true });
  }

  return bot;
}

function getBot() {
  if (!bot) {
    bot = initBot();
  }
  return bot;
}

module.exports = { initBot, getBot };