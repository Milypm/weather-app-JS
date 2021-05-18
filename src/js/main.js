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
  searchIcon.addEventListener('click', function() {
    const input = document.querySelector('#search-input-id').value;
    const splitInput = input.split(' ');
    if (Number.isInteger(parseInt(splitInput[0]))) {
      fetchWeather.findByZip(splitInput).then((fetchData) => {
        const cityByZip = fetchData.zipCity;
        todayCurrentUI(fetchData, cityByZip);
      });
    } else {
      const cityByCity = document.querySelector('#search-input-id').value;
      fetchWeather.findByCity(cityByCity).then((fetchData) => {
        todayCurrentUI(fetchData, cityByCity);
        setNextDays.nextDaysUI(fetchData);
        setTodayDetails.todayDetailsUI(fetchData);
      });
    }
  });
  const textBelowInput = document.createElement('p');
  textBelowInput.classList.add('text-below-input');
  textBelowInput.textContent = `*If searching by zip code, please also provide the country's full-name separated by a space. I.E.: "11123 Country-name"`

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

  const todayContainer = document.createElement('div');
  todayContainer.classList.add('today-div');
  
  const cityName = document.createElement('h3');
  cityName.setAttribute('id', 'city-name-id');
  cityName.textContent = 'Dublin';
  const flag = document.createElement('img');
  flag.setAttribute('id', 'flag-id');
  flag.src = 'https://www.countryflags.io/IE/flat/64.png';
  const todayIcon = document.createElement('i');
  todayIcon.setAttribute('id', 'today-icon');
  todayIcon.classList.add('fas');
  todayIcon.classList.add('fa-cloud');
  const todayTimeContainer = document.createElement('div');
  todayTimeContainer.classList.add('today-time-div');
  const todayText = document.createElement('h5');
  todayText.textContent = 'Today';
  const todayHour = document.createElement('p');
  todayHour.classList.add('today-hour');
  todayHour.setAttribute('id', 'today-hour-id');
  todayHour.textContent = 'Sat May 15th, 6:30 PM';
  const todayTemp = document.createElement('h2');
  todayTemp.classList.add('today-temp');
  todayTemp.setAttribute('id', 'today-temp-id');
  todayTemp.textContent = '13°';
  const atmosphereWind = document.createElement('div');
  atmosphereWind.classList.add('atmosphere-wind-div');
  const todayAtmosphere = document.createElement('p');
  todayAtmosphere.classList.add('today-atmosphere');
  todayAtmosphere.setAttribute('id', 'today-atmosphere-id');
  todayAtmosphere.textContent = 'Clouds';
  const todayWind = document.createElement('p');
  todayWind.classList.add('today-wind');
  todayWind.setAttribute('id', 'today-wind-id');
  todayWind.textContent = 'Wind: 1km/hr';

  const todayNextDays = document.createElement('div');
  todayNextDays.classList.add('today-next-days-div');

  const appendMain = () => {
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
    mainContainer.appendChild(search);
    mainContainer.appendChild(todayNextDays);
  
    return mainContainer;
  }
  
  return { appendMain };
})();

export default setMain;