const axios = require('axios');

exports.getWeather = async (req, res) => {
  const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.WEATHER_API_KEY}`);
  res.json(weatherResponse.data);
};

exports.getCurrencyRates = async (req, res) => {
  const currencyResponse = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
  res.json(currencyResponse.data);
};
