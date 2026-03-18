const { getBot } = require('./bot');
const config = require('./config');

function setupSearch() {
  const bot = getBot();

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'search') {
      bot.sendMessage(chatId, 'Поиск...');
    }
  });
}

module.exports = { setupSearch };