const { getBot } = require('./bot');
const config = require('./config');

function setupCalendarHandlers() {
  const bot = getBot();

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'calendar_prev_month') {
      bot.sendMessage(chatId, 'Предыдущий месяц');
    } else if (data === 'calendar_next_month') {
      bot.sendMessage(chatId, 'Следующий месяц');
    } else if (data.startsWith('day_')) {
      const day = data.replace('day_', '');
      bot.sendMessage(chatId, `Выбран день: ${day}`);
    }
  });
}

module.exports = { setupCalendarHandlers };