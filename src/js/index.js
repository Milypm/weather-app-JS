console.log('Hello!');
import fetchWeather from './api';

import '../css/style.css';

const setHeader = () => {
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-div');
  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'WeatherCast';
  const headerIcon = document.createElement('i');
  headerIcon.classList.add('fas');
  headerIcon.classList.add('fa-temperature-high');
  const search = document.createElement('form');
  search.classList.add('search-form');
  const searchInput = document.createElement('input');
  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fas');
  searchIcon.classList.add('fa-arrow-right');

  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerIcon);
  search.appendChild(searchInput);
  search.appendChild(searchIcon);
  headerContainer.appendChild(search);

  return headerContainer;
};

const start = () => {
  const header = document.getElementById('header');
  header.appendChild(setHeader());
};