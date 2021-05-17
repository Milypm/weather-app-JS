import fetchWeather from './api';

const setHeader = () => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-div');
  const headerTitleIcon = document.createElement('div');
  headerTitleIcon.classList.add('header-title-icon');
  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'WeatherCast';
  const headerIcon = document.createElement('i');
  headerIcon.classList.add('fas');
  headerIcon.classList.add('fa-temperature-high');
  // const search = document.createElement('form');
  // search.classList.add('search-form');
  // const searchInput = document.createElement('input');
  // searchInput.setAttribute('id', 'search-input-id');
  // searchInput.type = 'text';
  // searchInput.placeholder = 'Search city or zip code';
  // const searchIcon = document.createElement('i');
  // searchIcon.classList.add('fas');
  // searchIcon.classList.add('fa-arrow-right');
  // searchIcon.addEventListener('click', function () {
  //   const city = document.querySelector('#search-input-id').value;
  //   const fetchData = fetchWeather.findLocation(city);
  //   document.getElementById('city-name-id').value = city.toUpperCase();
  //   document.getElementById('today-hour-id').value = fetchData.dateTime;
  //   document.getElementById('today-temp-id').value = fetchData.degrees;
  //   document.getElementById('today-atmosphere-id').value = fetchData.atmosphere;
  //   document.getElementById('today-wind-id').value = fetchData.wind;
  // });

  headerTitleIcon.appendChild(headerTitle);
  headerTitleIcon.appendChild(headerIcon);
  //search.appendChild(searchInput);
  //search.appendChild(searchIcon);
  headerContainer.appendChild(headerTitleIcon);
  //headerContainer.appendChild(search);

  return headerContainer;
};

export default setHeader;