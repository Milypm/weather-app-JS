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
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const cityWeather = await response.json();
      getData(cityWeather);
      console.log(cityWeather);
      return data;
    } catch (error) {
        alert('Error:', error);
    }
  };

  const getData = (jsonData) => {
    // const timezone = jsonData.timezone;
    // data.dateTime = getDateTime(timezone);
    data.degrees = Math.floor(parseInt(jsonData.main.temp)).toString();
    data.atmosphere = jsonData.weather[0].description;
    data.wind = Math.floor((parseInt(jsonData.wind.speed) / 1000) * 3600);
    data.country = jsonData.sys.country;
    data.main = jsonData.weather[0].main;
    data.description = jsonData.weather[0].description;
    data.iconId = jsonData.weather[0].icon;
  };

  const getDateTime = (tz) => {
    // console.log(tz);
    const date = new Date(tz * 1000);
    // console.log(date);
    const timeStr = date.toLocaleTimeString();
    console.log(timeStr);
  };

  return { findLocation };
})();

export default fetchWeather;