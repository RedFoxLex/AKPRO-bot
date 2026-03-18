const { getBot } = require('./bot');
const config = require('./config');

function setupMiddleware() {
  const bot = getBot();

  bot.use((msg, next) => {
    console.log('Middleware:', msg.text);
    next();
  });
}

module.exports = { setupMiddleware };