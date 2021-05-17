import fetchWeather from './api';
import setTodayDetails from './todaysDetails';
import setNextDays from './nextDays';

const setMain = () => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  const search = document.createElement('form');
  search.classList.add('search-form');
  const searchInput = document.createElement('input');
  searchInput.setAttribute('id', 'search-input-id');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search city or zip code';
  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fas');
  searchIcon.classList.add('fa-arrow-right');
  searchIcon.addEventListener('click', function () {
    const city = document.querySelector('#search-input-id').value;
    fetchWeather.findLocation(city).then((fetchData) => {
      console.log(fetchData);
      document.getElementById('city-name-id').textContent = city;
      document.getElementById('today-hour-id').textContent = fetchData.dateTime;
      document.getElementById('today-temp-id').textContent = fetchData.degrees;
      document.getElementById('today-atmosphere-id').textContent = fetchData.atmosphere;
      document.getElementById('today-wind-id').textContent = fetchData.wind;
    });
    
  });

  const todayContainer = document.createElement('div');
  todayContainer.classList.add('today-div');
  
  const cityName = document.createElement('h3');
  cityName.setAttribute('id', 'city-name-id');
  cityName.textContent = 'Dublin';
  const flag = document.createElement('img');
  flag.setAttribute('id', 'flag-id');
  flag.src = 'https://www.countryflags.io/IE/shiny/64.png';
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
  todayHour.textContent = 'Sat May 15th at 6:30 PM';
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

  search.appendChild(searchInput);
  search.appendChild(searchIcon);
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
  todayContainer.appendChild(setTodayDetails());
  todayNextDays.appendChild(todayContainer);
  todayNextDays.appendChild(setNextDays());
  mainContainer.appendChild(search);
  mainContainer.appendChild(todayNextDays);

  return mainContainer;
};

export default setMain;