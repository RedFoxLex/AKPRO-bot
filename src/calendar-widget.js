const { getBot } = require('./bot');
const config = require('./config');

function setupCalendarWidget() {
  const bot = getBot();

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'calendar_prev') {
      bot.sendMessage(chatId, 'Календарь - предыдущий');
    } else if (data === 'calendar_next') {
      bot.sendMessage(chatId, 'Календарь - следующий');
    }
  });
}

module.exports = { setupCalendarWidget };