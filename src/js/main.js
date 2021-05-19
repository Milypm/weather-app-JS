import fetchWeather from './api';
import setTodayDetails from './todaysDetails';
import setNextDays from './nextDays';

const setMain = (() => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  const search = document.createElement('form');
  search.classList.add('search-form');
  const searchInput = document.createElement('input');
  searchInput.setAttribute('id', 'search-input-id');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search city or zip code&country';
  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fas');
  searchIcon.classList.add('fa-arrow-right');
  searchIcon.addEventListener('click', () => {
    const input = document.querySelector('#search-input-id').value;
    const splitInput = input.split(' ');
    if (Number.isInteger(parseInt(splitInput[0]))) {
      fetchWeather.findByZip(splitInput, selectedUnit).then((fetchData) => {
        const cityByZip = fetchData.zipCity;
        todayCurrentUI(fetchData, cityByZip);
      });
    } else {
      const cityByCity = document.querySelector('#search-input-id').value;
      fetchWeather.findByCity(cityByCity, selectedUnit).then((fetchData) => {
        todayCurrentUI(fetchData, cityByCity);
        setNextDays.nextDaysUI(fetchData);
        setTodayDetails.todayDetailsUI(fetchData);
      });
    }
  });
  const textBelowInput = document.createElement('p');
  textBelowInput.classList.add('text-below-input');
  textBelowInput.textContent = '*If searching by zip code, please also provide the country\'s full-name separated by a space. I.E.: "11123 Country-name"';

  const todayCurrentUI = (fetchData, city) => {
    document.getElementById('city-name-id').textContent = city;
    document.getElementById('today-hour-id').textContent = fetchData.dateTime;
    document.getElementById('today-temp-id').textContent = `${fetchData.degrees}°`;
    document.getElementById('today-atmosphere-id').textContent = fetchData.atmosphere;
    document.getElementById('today-wind-id').textContent = `Wind: ${fetchData.wind}km/hr`;
    document.getElementById('flag-id').src = `https://www.countryflags.io/${fetchData.country}/flat/64.png`;
    const getclass = setIcon(fetchData.main, fetchData.atmosphere, fetchData.iconId);
    document.getElementById('today-icon').className = getclass;
    document.querySelector('#search-input-id').value = '';
  };

  const setIcon = (main, description, iconId) => {
    const otherConditions = 'mist smoke haze dust fog sand ash squall';
    if (iconId.includes('d')) {
      if (main === 'Clear' && description === 'clear sky') { return 'fas fa-sun'; }
      if (main === 'Clouds' && description === 'few clouds') { return 'fas fa-cloud-sun'; }
      if (main === 'Clouds' && description === 'scattered clouds') { return 'fas fa-cloud-sun'; }
      if (main === 'Clouds') { return 'fas fa-cloud'; }
      if (main === 'Rain' && description === 'shower rain') { return 'fas fa-cloud-sun-rain'; }
      if (main === 'Rain') { return 'fas fa-cloud-rain'; }
      if (main === 'Thunderstorm') { return 'fas fa-bolt'; }
      if (main === 'Snow') { return 'fas fa-snowflake'; }
      if (main === 'Tornado') { return 'fas fa-exclamation-circle'; }
      if (otherConditions.includes(main)) { return 'fas fa-smog'; }
    } else {
      if (main === 'Clear' && description === 'clear sky') { return 'fas fa-moon'; }
      if (main === 'Clouds' && description === 'few clouds') { return 'fas fa-cloud-moon'; }
      if (main === 'Clouds' && description === 'scattered clouds') { return 'fas fa-cloud-moon'; }
      if (main === 'Clouds') { return 'fas fa-cloud'; }
      if (main === 'Rain' && description === 'shower rain') { return 'fas fa-cloud-moon-rain'; }
      if (main === 'Rain') { return 'fas fa-cloud-rain'; }
      if (main === 'Thunderstorm') { return 'fas fa-bolt'; }
      if (main === 'Snow') { return 'fas fa-snowflake'; }
      if (main === 'Tornado') { return 'fas fa-exclamation-circle'; }
      if (otherConditions.includes(main)) { return 'fas fa-smog'; }
    }
  };

  const changeUnitContainer = document.createElement('div');
  changeUnitContainer.classList.add('change-unit-div');
  const celsius = document.createElement('h4');
  celsius.setAttribute('id', 'celsius-id');
  celsius.textContent = 'C°';
  celsius.addEventListener('click', () => {
    if (selectedUnit = 'fahrenheit') {
      const currentTodayTemp = todayTemp.textContent;
      const convertedTodayTemp = fahToCel(currentTodayTemp);
      todayTemp.textContent = `${convertedTodayTemp}°`;
      const currentTodayWind = todayWind.textContent;
      const convertedTodayWind = convertWind(currentTodayWind);
      todayWind.textContent = `Wind: ${convertedTodayWind}km/hr`;
      setTodayDetails.todayDetailsValuestoCel();
      setNextDays.nextDaysValuestoCel();
      celsius.style.background = 'rgba(255, 255, 255, 0.8)';
      celsius.style.color = '#5e2578';
      fahrenheit.style.background = 'transparent';
      fahrenheit.style.color = '#fff';
      selectedUnit = 'celsius';
    }
  });
  const fahrenheit = document.createElement('h4');
  fahrenheit.setAttribute('id', 'fahrenheit-id');
  fahrenheit.textContent = 'F°';
  fahrenheit.addEventListener('click', () => {
    if (selectedUnit = 'celsius') {
      const currentTodayTemp = todayTemp.textContent;
      const convertedTodayTemp = celToFah(currentTodayTemp);
      todayTemp.textContent = `${convertedTodayTemp}°`;
      const currentTodayWind = todayWind.textContent;
      const convertedTodayWind = convertWind(currentTodayWind);
      todayWind.textContent = `Wind: ${convertedTodayWind}mph`;
      setTodayDetails.todayDetailsValuestoFah();
      setNextDays.nextDaysValuestoFah();
      fahrenheit.style.background = 'rgba(255, 255, 255, 0.8)';
      fahrenheit.style.color = '#5e2578';
      celsius.style.background = 'transparent';
      celsius.style.color = '#fff';
      selectedUnit = 'fahrenheit';
    }
  });

  const fahToCel = (current) => {
    const newTemp = Math.floor((parseInt(current) - 32) * 5 / 9).toString();
    return newTemp;
  };

  const celToFah = (current) => {
    const newTemp = Math.floor((parseInt(current) * 9) / 5 + 32).toString();
    return newTemp;
  };

  const convertWind = (currentTodayWind) => {
    if (currentTodayWind.split('').includes('k')) {
      const kmEl = currentTodayWind.split(' ').pop();
      const k = kmEl.split('');
      k.splice(-5, 5);
      const joinNumK = k.join('');
      const numK = parseInt(joinNumK[0]);
      console.log((numK / 1.609344));
      return Math.round((numK / 1.609344));
    }
    const mhEl = currentTodayWind.split(' ').pop();
    const m = mhEl.split('');
    m.splice(-3, 3);
    const joinNumM = m.join('');
    const numMh = parseInt(joinNumM[0]);
    console.log((numMh * 1.609344));
    return Math.round((numMh * 1.609344));
  };

  const todayContainer = document.createElement('div');
  todayContainer.classList.add('today-div');
  const cityName = document.createElement('h3');
  cityName.setAttribute('id', 'city-name-id');
  cityName.textContent = 'Monterrey';
  const flag = document.createElement('img');
  flag.setAttribute('id', 'flag-id');
  flag.src = 'https://www.countryflags.io/MX/flat/64.png';
  const todayIcon = document.createElement('i');
  todayIcon.setAttribute('id', 'today-icon');
  const todayTimeContainer = document.createElement('div');
  todayTimeContainer.classList.add('today-time-div');
  const todayText = document.createElement('h5');
  todayText.textContent = 'Today';
  const todayHour = document.createElement('p');
  todayHour.classList.add('today-hour');
  todayHour.setAttribute('id', 'today-hour-id');
  const todayTemp = document.createElement('h2');
  todayTemp.classList.add('today-temp');
  todayTemp.setAttribute('id', 'today-temp-id');
  const atmosphereWind = document.createElement('div');
  atmosphereWind.classList.add('atmosphere-wind-div');
  const todayAtmosphere = document.createElement('p');
  todayAtmosphere.classList.add('today-atmosphere');
  todayAtmosphere.setAttribute('id', 'today-atmosphere-id');
  const todayWind = document.createElement('p');
  todayWind.classList.add('today-wind');
  todayWind.setAttribute('id', 'today-wind-id');
  const todayNextDays = document.createElement('div');
  todayNextDays.classList.add('today-next-days-div');

  let selectedUnit;

  const defaultCity = () => {
    const monterrey = 'monterrey';
    selectedUnit = 'celsius';
    celsius.style.background = 'rgba(255, 255, 255, 0.8)';
    celsius.style.color = '#5e2578';
    fetchWeather.findByCity(monterrey, selectedUnit).then((fetchData) => {
      todayCurrentUI(fetchData, monterrey);
      setNextDays.nextDaysUI(fetchData);
      setTodayDetails.todayDetailsUI(fetchData);
    });
  };

  const appendMain = () => {
    changeUnitContainer.appendChild(celsius);
    changeUnitContainer.appendChild(fahrenheit);
    search.appendChild(searchInput);
    search.appendChild(searchIcon);
    search.appendChild(textBelowInput);
    todayContainer.appendChild(cityName);
    todayContainer.appendChild(flag);
    todayContainer.appendChild(todayIcon);
    todayTimeContainer.appendChild(todayText);
    todayTimeContainer.appendChild(todayHour);
    todayContainer.appendChild(todayTimeContainer);
    todayContainer.appendChild(todayTemp);
    atmosphereWind.appendChild(todayAtmosphere);
    atmosphereWind.appendChild(todayWind);
    todayContainer.appendChild(atmosphereWind);
    todayContainer.appendChild(setTodayDetails.appendTodayDetails());
    todayNextDays.appendChild(todayContainer);
    todayNextDays.appendChild(setNextDays.appendNextDays());
    mainContainer.appendChild(changeUnitContainer);
    mainContainer.appendChild(search);
    mainContainer.appendChild(todayNextDays);

    return mainContainer;
  };

  document.addEventListener('DOMContentLoaded', defaultCity());

  return {
    appendMain, setIcon, fahToCel, celToFah, convertWind,
  };
})();

export default setMain;