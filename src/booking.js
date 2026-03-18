const { getBot } = require('./bot');
const db = require('./db');
const texts = require('./texts');
const keyboards = require('./keyboards');

function setupBookingHandlers() {
  const bot = getBot();

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    if (data === 'book_service') {
      bot.sendMessage(chatId, texts.booking.selectService, {
        reply_markup: keyboards.services
      });
    } else if (data.startsWith('service_')) {
      const service = data.replace('service_', '');
      bot.sendMessage(chatId, `Вы выбрали: ${service}\n\n${texts.booking.selectDate}`, {
        reply_markup: keyboards.calendar
      });
    } else if (data.startsWith('date_')) {
      const date = data.replace('date_', '');
      bot.sendMessage(chatId, `Дата: ${date}\n\n${texts.booking.selectTime}`, {
        reply_markup: keyboards.timeSlots
      });
    } else if (data.startsWith('time_')) {
      const time = data.replace('time_', '');
      bot.sendMessage(chatId, `Время: ${time}\n\n${texts.booking.confirm}`, {
        reply_markup: keyboards.confirmBooking
      });
    } else if (data === 'confirm_booking') {
      bot.sendMessage(chatId, texts.booking.success);
    } else if (data === 'cancel_booking') {
      bot.sendMessage(chatId, texts.booking.cancelled);
    }
  });
}

module.exports = { setupBookingHandlers };