require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');

const TELEGRAM_PROXY_ENV_KEYS = [
  'HTTP_PROXY',
  'HTTPS_PROXY',
  'ALL_PROXY',
  'http_proxy',
  'https_proxy',
  'all_proxy',
  'npm_config_http_proxy',
  'npm_config_https_proxy',
  'YARN_HTTP_PROXY',
  'YARN_HTTPS_PROXY'
];

let bot;

function getPresentProxyEnvKeys() {
  return TELEGRAM_PROXY_ENV_KEYS.filter((key) => Boolean(process.env[key]));
}

function disableTelegramProxyEnv() {
  getPresentProxyEnvKeys().forEach((key) => {
    delete process.env[key];
  });
}

function formatMissingTokenMessage() {
  return [
    'TELEGRAM_BOT_TOKEN not set.',
    'Create a .env file in the project root or export TELEGRAM_BOT_TOKEN before запуском.',
    'Example:',
    '  cp .env.example .env',
    '  TELEGRAM_BOT_TOKEN=123456:ABCDEF npm start'
  ].join('\n');
}

function classifyPollingError(error) {
  const message = String(error && (error.message || error.code || error));

  if (/401|unauthorized/i.test(message)) {
    return 'Telegram отклонил токен. Проверь правильность TELEGRAM_BOT_TOKEN в .env.';
  }

  if (/403|tunneling socket|proxy/i.test(message)) {
    return 'Похоже на проблему прокси/VPN. Бот пытается ходить напрямую, но сеть всё ещё режет соединение.';
  }

  if (/ENOTFOUND|EAI_AGAIN|ECONNRESET|ECONNREFUSED|ETIMEDOUT/i.test(message)) {
    return 'Не получается достучаться до api.telegram.org. Проверь интернет, DNS, firewall или VPN.';
  }

  if (/AggregateError/i.test(message)) {
    return 'Сетевое подключение к Telegram не установилось. Обычно это блокировка сети, DNS или firewall.';
  }

  return 'Неизвестная ошибка Telegram polling. Нужен полный текст ошибки ниже.';
}

function validateTokenFormat(token) {
  return /^\d+:[A-Za-z0-9_-]{20,}$/.test(token);
}

function initBot() {
  const token = config.token;

  if (!token) {
    throw new Error(formatMissingTokenMessage());
  }

  const proxyEnvKeys = getPresentProxyEnvKeys();
  if (proxyEnvKeys.length > 0) {
    console.log(`[startup] Clearing proxy env for Telegram: ${proxyEnvKeys.join(', ')}`);
  }

  if (!validateTokenFormat(token)) {
    console.warn('[startup] TELEGRAM_BOT_TOKEN has an unusual format. Telegram may reject it.');
  }

  disableTelegramProxyEnv();
  bot = new TelegramBot(token, { polling: true });

  bot.on('polling_error', (error) => {
    console.error('[telegram] Polling error:', error.message || error);
    console.error('[telegram] Diagnosis:', classifyPollingError(error));
  });

  return bot;
}

function getBot() {
  if (!bot) {
    bot = initBot();
  }

  return bot;
}

module.exports = {
  initBot,
  getBot,
  disableTelegramProxyEnv,
  getPresentProxyEnvKeys,
  classifyPollingError,
  validateTokenFormat
};
