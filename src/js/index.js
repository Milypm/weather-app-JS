console.log('Hello!');
import fetchWeather from './api';
import setToday from './today';
import setNextDays from './nextDays';

import '../css/style.css';

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
  const search = document.createElement('form');
  search.classList.add('search-form');
  const searchInput = document.createElement('input');
  searchInput.placeholder = 'Search city or zip code';
  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fas');
  searchIcon.classList.add('fa-arrow-right');

  headerTitleIcon.appendChild(headerTitle);
  headerTitleIcon.appendChild(headerIcon);
  search.appendChild(searchInput);
  search.appendChild(searchIcon);
  headerContainer.appendChild(headerTitleIcon);
  headerContainer.appendChild(search);

  return headerContainer;
};

const start = () => {
  const header = document.getElementById('header');
  header.appendChild(setHeader());
  const main = document.getElementById('main');
  main.appendChild(setToday());
  main.appendChild(setNextDays());
};

start();