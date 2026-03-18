const { getBot } = require('./bot');
const db = require('./db');
const texts = require('./texts');
const keyboards = require('./keyboards');
const { searchCars, getCarDetails } = require('./api');

function setupHandlers() {
  const bot = getBot();

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const user = {
      id: msg.from.id,
      username: msg.from.username,
      firstName: msg.from.first_name,
      lastName: msg.from.last_name
    };
    db.addUser(user);
    bot.sendMessage(chatId, texts.start, {
      reply_markup: keyboards.mainMenu
    });
  });

  bot.onText(/\/admin/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Админ-панель:', {
      reply_markup: keyboards.adminMenu
    });
  });

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'book') {
      bot.sendMessage(chatId, texts.booking.selectService, {
        reply_markup: keyboards.services
      });
    } else if (data === 'my_bookings') {
      const bookings = db.getBookings();
      const userBookings = bookings.filter(b => b.userId === query.from.id);
      if (userBookings.length === 0) {
        bot.sendMessage(chatId, 'У вас нет записей');
      } else {
        let message = 'Ваши записи:\n\n';
        userBookings.forEach((b, i) => {
          message += `${i + 1}. ${b.service} - ${b.date} ${b.time}\n`;
        });
        bot.sendMessage(chatId, message);
      }
    } else if (data === 'contacts') {
      bot.sendMessage(chatId, '📞 Контакты:\n\nТелефон: +7 (999) 123-45-67\nАдрес: г. Москва, ул. Примерная, 1');
    } else if (data.startsWith('service_')) {
      const service = data.replace('service_', '');
      bot.sendMessage(chatId, texts.booking.selectDate, {
        reply_markup: keyboards.calendar
      });
    }
  });
}

module.exports = { setupHandlers };