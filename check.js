const { searchCars } = require('./src/api');

async function check() {
  console.log('Checking API...');
  const results = await searchCars('test');
  console.log('Results:', results);
}

check();