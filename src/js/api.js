const { format } = require('date-fns');

const fetchWeather = (() => {
  let data = {
    dateTime: '',
    degrees: '',
    atmosphere: '',
    wind: '',
    country: '',
    main: '',
    description: '',
    iconId: ''
  }

  const findLocation = async (city, zipCode, country) => {
    try {
      const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const currentWeather = await responseCurrent.json();
      const responseThreeHours = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=3&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const threeWeather = await responseThreeHours.json();
      getData(currentWeather, threeWeather);
      console.log(threeWeather);
      return data;
    } catch (error) {
        alert('Error:', error);
    }
  };

  const getData = (jsonData, secondjsonData) => {
    data.dateTime = format(new Date(jsonData.dt * 1000), 'E MMM do, p');
    data.degrees = Math.floor(parseInt(jsonData.main.temp)).toString();
    data.atmosphere = jsonData.weather[0].description;
    data.wind = Math.floor((parseInt(jsonData.wind.speed) / 1000) * 3600);
    data.country = jsonData.sys.country;
    data.main = jsonData.weather[0].main;
    data.description = jsonData.weather[0].description;
    data.iconId = jsonData.weather[0].icon;
  };

  return { findLocation };
})();

export default fetchWeather;