const setTodayDetails = () => {
  const todayDetailsContainer = document.createElement('div');
  todayDetailsContainer.classList.add('today-details-div');
  const morning = document.createElement('div');
  morning.classList.add('details-div');
  morning.textContent = 'Morning';
  const tempMorning = document.createElement('h4');
  const iconMorning = document.createElement('i');
  const afternoon = document.createElement('div');
  afternoon.classList.add('details-div');
  afternoon.textContent = 'Afternoon';
  const tempAfternoon = document.createElement('h4');
  const iconAfternoon = document.createElement('i');
  const night = document.createElement('div');
  night.classList.add('details-div');
  night.textContent = 'Night';
  const tempNight = document.createElement('h4');
  const iconNight = document.createElement('i');

  morning.appendChild(tempMorning);
  morning.appendChild(iconMorning);
  afternoon.appendChild(tempAfternoon);
  afternoon.appendChild(iconAfternoon);
  night.appendChild(tempNight);
  night.appendChild(iconNight);
  todayDetailsContainer.appendChild(morning);
  todayDetailsContainer.appendChild(afternoon);
  todayDetailsContainer.appendChild(night);

  return todayDetailsContainer;
};

export default setTodayDetails;