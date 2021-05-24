import shared from './sharedMethods';

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
    afternoon.appendChild(tempAfternoon);
    night.appendChild(tempNight);
    todayDetailsContainer.appendChild(morning);
    todayDetailsContainer.appendChild(afternoon);
    todayDetailsContainer.appendChild(night);

    return todayDetailsContainer;
  };

  const todayDetailsValuestoCel = () => {
    const currentMornTemp = tempMorning.textContent;
    const convertedMornTemp = shared.fahToCel(currentMornTemp);
    tempMorning.textContent = `${convertedMornTemp}°`;
    const currentEvenTemp = tempAfternoon.textContent;
    const convertedEvenTemp = shared.fahToCel(currentEvenTemp);
    tempAfternoon.textContent = `${convertedEvenTemp}°`;
    const currentNightTemp = tempNight.textContent;
    const convertedNightTemp = shared.fahToCel(currentNightTemp);
    tempNight.textContent = `${convertedNightTemp}°`;
  };

  const todayDetailsValuestoFah = () => {
    const currentMornTemp = tempMorning.textContent;
    const convertedMornTemp = shared.celToFah(currentMornTemp);
    tempMorning.textContent = `${convertedMornTemp}°`;
    const currentEvenTemp = tempAfternoon.textContent;
    const convertedEvenTemp = shared.celToFah(currentEvenTemp);
    tempAfternoon.textContent = `${convertedEvenTemp}°`;
    const currentNightTemp = tempNight.textContent;
    const convertedNightTemp = shared.celToFah(currentNightTemp);
    tempNight.textContent = `${convertedNightTemp}°`;
  };

  const todayDetailsUI = (fetchData) => {
    tempMorning.textContent = `${fetchData.morningTemp}°`;
    tempAfternoon.textContent = `${fetchData.eveningTemp}°`;
    tempNight.textContent = `${fetchData.nightTemp}°`;
  };

  return {
    appendTodayDetails, todayDetailsUI, todayDetailsValuestoCel, todayDetailsValuestoFah,
  };
})();

export default setTodayDetails;