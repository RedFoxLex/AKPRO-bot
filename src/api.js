const axios = require('axios');
const config = require('./config');

const API_BASE = 'https://api.taximaxim.ru/api/v1';

async function searchCars(query) {
  try {
    const response = await axios.get(`${API_BASE}/cars/search/`, {
      params: { query },
      headers: {
        'Authorization': `Token ${process.env.TAXIMAXIM_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (err) {
    console.error('API Error:', err.message);
    return [];
  }
}

async function getCarDetails(carId) {
  try {
    const response = await axios.get(`${API_BASE}/cars/${carId}/`);
    return response.data;
  } catch (err) {
    console.error('API Error:', err.message);
    return null;
  }
}

module.exports = {
  searchCars,
  getCarDetails
};