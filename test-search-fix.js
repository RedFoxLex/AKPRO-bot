const { searchCars } = require('./src/api');

async function testSearch() {
  const results = await searchCars('Toyota');
  console.log('Search results:', results);
}

testSearch();