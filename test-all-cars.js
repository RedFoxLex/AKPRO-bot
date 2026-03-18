const { getCars } = require('./src/db');

function testAllCars() {
  const cars = getCars();
  console.log('All cars:', cars);
}

testAllCars();