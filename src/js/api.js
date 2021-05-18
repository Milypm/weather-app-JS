import getCountryCode from './countriesCodes';

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

  const findByCity = async (city) => {
    try {
      const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const currentWeather = await responseCurrent.json();
      const responseThreeHours = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=3&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const threeWeather = await responseThreeHours.json();
      getData(currentWeather, threeWeather);
      console.log(currentWeather);
      console.log(threeWeather);
      return data;
    } catch (error) {
        alert('Error:', error);
    }
  };

  const findByZip = async (zipAndCountry) => {
    const splitParam = zipAndCountry.split(',');
    const zip = splitParam[0];
    const country = splitParam[1].trim();
    const countrySplit = country.split(' ');
    let countryCode;
    if (countrySplit.length > 1) {
      let capitalizeAll = [];
      countrySplit.map((el) => { capitalizeAll.push(el.charAt(0).toUpperCase() + el.slice(1)); });
      const countryMore = capitalizeAll.join(' ');
      countryCode = getCountryCode.getCode(countryMore);
    } else {
      const capitalizeOne = country.charAt(0).toUpperCase() + country.slice(1);
      countryCode = getCountryCode.getCode(capitalizeOne);
    }
    console.log(countryCode);
    try {
      const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const currentWeather = await responseCurrent.json();
      // const responseThreeHours = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=3&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      // const threeWeather = await responseThreeHours.json();
      //getData(currentWeather);
      console.log(currentWeather);
      //return data;
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

  return { findByCity, findByZip };
})();

export default fetchWeather;