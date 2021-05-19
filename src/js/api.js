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
    iconId: '',
    zipCity: '',
    morningTemp: '',
    eveningTemp: '',
    nightTemp: '',
    nextOneTime: '',
    nextTwoTime: '',
    nextThreeTime: '',
    nextOneTemp: '',
    nextTwoTemp: '',
    nextThreeTemp: '',
    nextOneAtmosphere: '',
    nextTwoAtmosphere: '',
    nextThreeAtmosphere: '',
    nextOneMain: '',
    nextTwoMain: '',
    nextThreeMain: '',
    nextOneWind: '',
    nextTwoWind: '',
    nextThreeWind: ''
  }

  const findByCity = async (city) => {
    try {
      const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const currentWeather = await responseCurrent.json();
      data.country = currentWeather.sys.country;
      const lat = currentWeather.coord.lat;
      const lon = currentWeather.coord.lon;
      const oneCallApi = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const responseOneCall = await oneCallApi.json();
      console.log(responseOneCall);
      getData(responseOneCall);
      return data;
    } catch (error) {
        alert('Error: Oops, we could not find that city name :(');
    }
  };

  const findByZip = async (splitedInput) => {
    const zip = splitedInput[0];
    const country = splitedInput[1].trim();
    const countrySplit = country.split(' ');
    let countryCode;
    if (countrySplit.length > 1) {
      let countryMore = [];
      countrySplit.map((el) => { countryMore.push(el.charAt(0).toUpperCase() + el.slice(1)); });
      const capitlalizeAll = countryMore.join(' ');
      countryCode = getCode(capitlalizeAll);
    } else {
      const capitalizeOne = country.charAt(0).toUpperCase() + country.slice(1);
      countryCode = getCode(capitalizeOne);
    }
    try {
      const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const currentWeather = await responseCurrent.json();
      data.country = currentWeather.sys.country;
      const lat = currentWeather.coord.lat;
      const lon = currentWeather.coord.lon;
      const oneCallApi = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const responseOneCall = await oneCallApi.json();
      getData(responseOneCall);
      return data;
    } catch (error) {
        alert('Error: Oops, we could not find that zip code :(');
    }
  };

  const getCode = (country) => {
    const getCodes = getCountryCode.codes();
    const code = getCountryCode.getCountryName(getCodes, country);
    return code;
  };

  const getData = (jsonData) => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const city = utc + (1000 * jsonData.timezone_offset);
    const cityCurrentDate = new Date(city);
    data.dateTime = format(cityCurrentDate, 'E MMM do, p');
    data.degrees = Math.floor(parseInt(jsonData.current.temp)).toString();
    data.atmosphere = jsonData.current.weather[0].description;
    data.wind = Math.floor((parseInt(jsonData.current.wind_speed) / 1000) * 3600);
    data.main = jsonData.current.weather[0].main;
    data.iconId = jsonData.current.weather[0].icon;
    const getCity = jsonData.timezone.split('/');
    data.zipCity = getCity[1];
    data.morningTemp = Math.floor(parseInt(jsonData.daily[0].temp.morn)).toString();
    data.eveningTemp = Math.floor(parseInt(jsonData.daily[0].temp.eve)).toString();
    data.nightTemp = Math.floor(parseInt(jsonData.daily[0].temp.night)).toString();
    const nextTemp1 = new Date(jsonData.daily[1].dt * 1000);
    data.nextOneTime = format(nextTemp1, 'E MMM do');
    data.nextOneTemp = Math.floor(parseInt(jsonData.daily[1].temp.morn)).toString();
    data.nextOneAtmosphere = jsonData.daily[1].weather[0].description;
    data.nextOneMain = jsonData.daily[1].weather[0].main;
    data.nextOneIcon = jsonData.daily[1].weather[0].icon;
    data.nextOneWind = Math.floor((parseInt(jsonData.daily[1].wind_speed) / 1000) * 3600);
    const nextTemp2 = new Date(jsonData.daily[2].dt * 1000);
    data.nextTwoTime = format(nextTemp2, 'E MMM do');
    data.nextTwoTemp = Math.floor(parseInt(jsonData.daily[2].temp.morn)).toString();
    data.nextTwoAtmosphere = jsonData.daily[2].weather[0].description;
    data.nextTwoMain = jsonData.daily[2].weather[0].main;
    data.nextTwoIcon = jsonData.daily[2].weather[0].icon;
    data.nextTwoWind = Math.floor((parseInt(jsonData.daily[2].wind_speed) / 1000) * 3600);
    const nextTemp3 = new Date(jsonData.daily[3].dt * 1000);
    data.nextThreeTime = format(nextTemp3, 'E MMM do');
    data.nextThreeTemp = Math.floor(parseInt(jsonData.daily[3].temp.morn)).toString();
    data.nextThreeAtmosphere = jsonData.daily[3].weather[0].description;
    data.nextThreeMain = jsonData.daily[3].weather[0].main;
    data.nextThreeIcon = jsonData.daily[3].weather[0].icon;
    data.nextThreeWind = Math.floor((parseInt(jsonData.daily[3].wind_speed) / 1000) * 3600);
  };

  return { findByCity, findByZip };
})();

export default fetchWeather;