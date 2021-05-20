import fetchWeather from './api';
import setTodayDetails from './todaysDetails';
import setNextDays from './nextDays';
import shared from './sharedMethods';

const setMain = (() => {
  let selectedUnit;

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');
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

  const search = document.createElement('form');
  search.classList.add('search-form');
  const searchInput = document.createElement('input');
  searchInput.setAttribute('id', 'search-input-id');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search city or zip code&country';
  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fas');
  searchIcon.classList.add('fa-arrow-right');

  const todayCurrentUI = (fetchData, city) => {
    cityName.textContent = city;
    todayHour.textContent = fetchData.dateTime;
    todayTemp.textContent = `${fetchData.degrees}°`;
    todayAtmosphere.textContent = fetchData.atmosphere;
    todayWind.textContent = `Wind: ${fetchData.wind}km/hr`;
    flag.src = `https://www.countryflags.io/${fetchData.country}/flat/64.png`;
    const getclass = shared.setIcon(fetchData.main, fetchData.atmosphere, fetchData.iconId);
    todayIcon.className = getclass;
    searchInput.value = '';
  };

  searchIcon.addEventListener('click', () => {
    const input = searchInput.value;
    const splitInput = input.split(' ');
    if (Number.isInteger(parseInt(splitInput[0], 10))) {
      fetchWeather.findByZip(splitInput, selectedUnit).then((fetchData) => {
        const cityByZip = fetchData.zipCity;
        todayCurrentUI(fetchData, cityByZip);
      });
    } else {
      const cityByCity = searchInput.value;
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

  const changeUnitContainer = document.createElement('div');
  changeUnitContainer.classList.add('change-unit-div');
  const celsius = document.createElement('h4');
  celsius.setAttribute('id', 'celsius-id');
  celsius.textContent = 'C°';
  const fahrenheit = document.createElement('h4');
  fahrenheit.setAttribute('id', 'fahrenheit-id');
  fahrenheit.textContent = 'F°';

  celsius.addEventListener('click', () => {
    if (selectedUnit === 'fahrenheit') {
      const currentTodayTemp = todayTemp.textContent;
      const convertedTodayTemp = shared.fahToCel(currentTodayTemp);
      todayTemp.textContent = `${convertedTodayTemp}°`;
      const currentTodayWind = todayWind.textContent;
      const convertedTodayWind = shared.convertWind(currentTodayWind);
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

  fahrenheit.addEventListener('click', () => {
    if (selectedUnit === 'celsius') {
      const currentTodayTemp = todayTemp.textContent;
      const convertedTodayTemp = shared.celToFah(currentTodayTemp);
      todayTemp.textContent = `${convertedTodayTemp}°`;
      const currentTodayWind = todayWind.textContent;
      const convertedTodayWind = shared.convertWind(currentTodayWind);
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

  return { appendMain };
})();

export default setMain;