const { getBot } = require('./bot');
const config = require('./config');

function setupKeyboards() {
  const bot = getBot();

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'back') {
      bot.sendMessage(chatId, 'Назад');
    }
  });
}

module.exports = { setupKeyboards };