const { getBot } = require('./bot');
const config = require('./config');

function setupLogger() {
  const bot = getBot();

  bot.on('message', (msg) => {
    console.log('Message:', msg.text);
  });
}

module.exports = { setupLogger };