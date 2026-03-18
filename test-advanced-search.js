const { searchCars } = require('./src/api');

async function testAdvancedSearch() {
  const results = await searchCars('Toyota Camry');
  console.log('Advanced search results:', results);
}

testAdvancedSearch();