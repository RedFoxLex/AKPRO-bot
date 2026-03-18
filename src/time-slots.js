const { getBot } = require('./bot');
const config = require('./config');

function setupTimeSlots() {
  const bot = getBot();

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data.startsWith('slot_')) {
      const slot = data.replace('slot_', '');
      bot.sendMessage(chatId, `Выбран слот: ${slot}`);
    }
  });
}

module.exports = { setupTimeSlots };