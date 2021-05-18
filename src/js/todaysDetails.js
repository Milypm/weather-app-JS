const setTodayDetails = (() => {
  const todayDetailsContainer = document.createElement('div');
  todayDetailsContainer.classList.add('today-details-div');

  const morning = document.createElement('div');
  morning.classList.add('details-div');
  morning.textContent = 'Morning';
  const tempMorning = document.createElement('h4');
  tempMorning.setAttribute('id', 'temp-morning-id');
  tempMorning.textContent = '10°';
  const iconMorning = document.createElement('i');
  iconMorning.setAttribute('id', 'icon-morning-id');
  iconMorning.classList.add('fas');
  iconMorning.classList.add('fa-cloud-sun-rain');

  const afternoon = document.createElement('div');
  afternoon.classList.add('details-div');
  afternoon.textContent = 'Afternoon';
  const tempAfternoon = document.createElement('h4');
  tempAfternoon.setAttribute('id', 'temp-evening-id');
  tempAfternoon.textContent = '13°';
  const iconAfternoon = document.createElement('i');
  iconAfternoon.setAttribute('id', 'icon-afternoon-id');
  iconAfternoon.classList.add('fas');
  iconAfternoon.classList.add('fa-cloud');

  const night = document.createElement('div');
  night.classList.add('details-div');
  night.textContent = 'Night';
  const tempNight = document.createElement('h4');
  tempNight.setAttribute('id', 'temp-night-id');
  tempNight.textContent = '8°';
  const iconNight = document.createElement('i');
  iconNight.setAttribute('id', 'icon-night-id');
  iconNight.classList.add('fas');
  iconNight.classList.add('fa-cloud-moon-rain');

  const appendTodayDetails = () => {
    morning.appendChild(tempMorning);
    //morning.appendChild(iconMorning);
    afternoon.appendChild(tempAfternoon);
    //afternoon.appendChild(iconAfternoon);
    night.appendChild(tempNight);
    //night.appendChild(iconNight);
    todayDetailsContainer.appendChild(morning);
    todayDetailsContainer.appendChild(afternoon);
    todayDetailsContainer.appendChild(night);
  
    return todayDetailsContainer;
  };

  const todayDetailsUI = (fetchData) => {
    tempMorning.textContent = `${fetchData.morningTemp}°`;
    tempAfternoon.textContent = `${fetchData.eveningTemp}°`;
    tempNight.textContent = `${fetchData.nightTemp}°`;
  };

  return { appendTodayDetails, todayDetailsUI };
})();

export default setTodayDetails;