const db = require('./db');

const TEXTS = {
  start: 'Добро пожаловать в AKPRO!\n\nВыберите действие:',
  menu: {
    book: '📅 Записаться на услугу',
    myBookings: '📋 Мои записи',
    contacts: '📞 Контакты',
    admin: '⚙️ Админ-панель'
  },
  booking: {
    selectService: 'Выберите услугу:',
    selectDate: 'Выберите дату:',
    selectTime: 'Выберите время:',
    confirm: 'Подтвердите запись:',
    success: '✅ Запись оформлена!',
    cancelled: '❌ Запись отменена'
  },
  admin: {
    stats: '📊 Статистика',
    users: '👥 Пользователи',
    bookings: '📅 Все записи',
    broadcast: '📢 Рассылка'
  }
};

module.exports = TEXTS;