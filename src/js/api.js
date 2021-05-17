const fetchWeather = (() => {
  let data = {
    dateTime: '',
    degrees: '',
    atmosphere: '',
    wind: ''
  }

  const findLocation = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const cityWeather = await response.json();
      console.log(cityWeather);
      getData(cityWeather);
      return data;
    } catch (error) {
        alert('Error:', error);
    }
  };

  const getData = (jsonData) => {
    const timezone = jsonData.timezone;
    data.dateTime = timezone;
    data.degrees = jsonData.main.temp;
    data.atmosphere = jsonData.weather[0].main;
    data.wind = jsonData.wind.speed;
  };

  // const getDateTime = (tz) => {
  //   console.log('hey');
  //   const d = new Date((new Date().getTime())(tz)*1000);
  //   console.log(d);
  //   d.toISOString();
  //   console.log(d);
  //   return d;
  // };

  return { findLocation };
})();

export default fetchWeather;