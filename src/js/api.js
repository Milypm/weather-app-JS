const fetchWeather = (() => {
  const findLocation = async (city) => {
    try {
      const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=42f266cd35ff527ebd1a7db4f46e623c`, {mode: 'cors'});
      const cityWeather = await response.json();
      console.log(cityWeather);
    } catch (error) {
        alert('Error:', error);
    }
  };

  return { findLocation };
})();

export default fetchWeather;