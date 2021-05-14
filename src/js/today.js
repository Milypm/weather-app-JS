import setTodayDetails from './todaysDetails';

const setToday = () => {
  const todayContainer = document.createElement('div');
  todayContainer.classList.add('today-div');
  const cityName = document.createElement('h4');
  cityName.setAttribute('id', 'city-name-id');
  const todayText = document.createElement('h5');
  todayText.textContent = 'Today';
  const todayHour = document.createElement('p');
  todayHour.classList.add('today-hour');
  todayHour.setAttribute('id', 'today-hour-id');
  const todayTemp = document.createElement('h3');
  todayTemp.classList.add('today-temp');
  todayTemp.setAttribute('id', 'today-temp-id');
  const todayIcon = document.createElement('h3');
  todayIcon.classList.add('today-icon');
  todayIcon.setAttribute('id', 'today-icon-id');

  todayContainer.appendChild(cityName);
  todayContainer.appendChild(todayText);
  todayContainer.appendChild(todayHour);
  todayContainer.appendChild(todayTemp);
  todayContainer.appendChild(todayIcon);
  todayContainer.appendChild(setTodayDetails());
  
  return todayContainer;
};

export default setToday;