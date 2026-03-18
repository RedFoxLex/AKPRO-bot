const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../data/freon-db.json');

function loadDb() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading DB:', err);
    return { users: [], bookings: [], cars: [] };
  }
}

function saveDb(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error('Error saving DB:', err);
    return false;
  }
}

function getUsers() {
  return loadDb().users;
}

function addUser(user) {
  const db = loadDb();
  if (!db.users.find(u => u.id === user.id)) {
    db.users.push(user);
    saveDb(db);
  }
}

function getBookings() {
  return loadDb().bookings;
}

function addBooking(booking) {
  const db = loadDb();
  db.bookings.push(booking);
  saveDb(db);
}

function getCars() {
  return loadDb().cars || [];
}

function addCar(car) {
  const db = loadDb();
  db.cars = db.cars || [];
  db.cars.push(car);
  saveDb(db);
}

module.exports = {
  loadDb,
  saveDb,
  getUsers,
  addUser,
  getBookings,
  addBooking,
  getCars,
  addCar
};