import setMain from './main';

const setNextDays = (() => {
  const nextDaysContainer = document.createElement('div');
  nextDaysContainer.classList.add('next-days-div');

  const nextOne = document.createElement('div');
  nextOne.classList.add('day-div');
  const nextOneDate = document.createElement('h5');
  nextOneDate.classList.add('next-date');
  nextOneDate.textContent = 'Next day 1';
  const nextOneTemp = document.createElement('h3');
  nextOneTemp.classList.add('next-temp');
  const nextOneAtmosphere = document.createElement('p');
  nextOneAtmosphere.classList.add('next-atmosphere');
  const nextOneWind = document.createElement('p');
  nextOneWind.classList.add('next-wind');
  const nextOneIcon = document.createElement('i');

  const nextTwo = document.createElement('div');
  nextTwo.classList.add('day-div');
  const nextTwoDate = document.createElement('h5');
  nextTwoDate.classList.add('next-date');
  nextTwoDate.textContent = 'Next day 2';
  const nextTwoTemp = document.createElement('h3');
  nextTwoTemp.classList.add('next-temp');
  const nextTwoAtmosphere = document.createElement('p');
  nextTwoAtmosphere.classList.add('next-atmosphere');
  const nextTwoWind = document.createElement('p');
  nextTwoWind.classList.add('next-wind');
  const nextTwoIcon = document.createElement('i');

  const nextThree = document.createElement('div');
  nextThree.classList.add('day-div');
  const nextThreeDate = document.createElement('h5');
  nextThreeDate.classList.add('next-date');
  nextThreeDate.textContent = 'Next day 3';
  const nextThreeTemp = document.createElement('h3');
  nextThreeTemp.classList.add('next-temp');
  const nextThreeAtmosphere = document.createElement('p');
  nextThreeAtmosphere.classList.add('next-atmosphere');
  const nextThreeWind = document.createElement('p');
  nextThreeWind.classList.add('next-wind');
  const nextThreeIcon = document.createElement('i');

  const appendNextDays = () => {
    nextOne.appendChild(nextOneDate);
    nextOne.appendChild(nextOneTemp);
    nextOne.appendChild(nextOneAtmosphere);
    nextOne.appendChild(nextOneWind);
    nextOne.appendChild(nextOneIcon);
    nextTwo.appendChild(nextTwoDate);
    nextTwo.appendChild(nextTwoTemp);
    nextTwo.appendChild(nextTwoAtmosphere);
    nextTwo.appendChild(nextTwoWind);
    nextTwo.appendChild(nextTwoIcon);
    nextThree.appendChild(nextThreeDate);
    nextThree.appendChild(nextThreeTemp);
    nextThree.appendChild(nextThreeAtmosphere);
    nextThree.appendChild(nextThreeWind);
    nextThree.appendChild(nextThreeIcon);
    nextDaysContainer.appendChild(nextOne);
    nextDaysContainer.appendChild(nextTwo);
    nextDaysContainer.appendChild(nextThree);

    return nextDaysContainer;
  };

  const nextDaysUI = (fetchData) => {
    nextOneDate.textContent = `${fetchData.nextOneTime}`;
    nextTwoDate.textContent = `${fetchData.nextTwoTime}`;
    nextThreeDate.textContent = `${fetchData.nextThreeTime}`;
    nextOneTemp.textContent = `${fetchData.nextOneTemp}°`;
    nextTwoTemp.textContent = `${fetchData.nextTwoTemp}°`;
    nextThreeTemp.textContent = `${fetchData.nextThreeTemp}°`;
    nextOneAtmosphere.textContent = fetchData.nextOneAtmosphere;
    nextTwoAtmosphere.textContent = fetchData.nextTwoAtmosphere;
    nextThreeAtmosphere.textContent = fetchData.nextThreeAtmosphere;
    nextOneWind.textContent = `Wind: ${fetchData.nextOneWind}km/hr`;
    nextTwoWind.textContent = `Wind: ${fetchData.nextTwoWind}km/hr`;
    nextThreeWind.textContent = `Wind: ${fetchData.nextThreeWind}km/hr`;
    const getIconOne = setMain.setIcon(fetchData.nextOneMain, fetchData.nextOneAtmosphere, fetchData.nextOneIcon);
    const getIconTwo = setMain.setIcon(fetchData.nextTwoMain, fetchData.nextTwoAtmosphere, fetchData.nextTwoIcon);
    const getIconThree = setMain.setIcon(fetchData.nextThreeMain, fetchData.nextThreeAtmosphere, fetchData.nextThreeIcon);
    nextOneIcon.className = getIconOne;
    nextTwoIcon.className = getIconTwo;
    nextThreeIcon.className = getIconThree;
  };

  const nextDaysValuestoCel = () => {
    const currentNextOneTemp = nextOneTemp.textContent;
    const convertedNextOneTemp = setMain.fahToCel(currentNextOneTemp);
    nextOneTemp.textContent = `${convertedNextOneTemp}°`;
    // const currentNextOneWind = nextOneWind.textContent;
    const convertedNextOneWind = setMain.convertWind(nextOneWind.textContent);
    nextOneWind.textContent = `Wind: ${convertedNextOneWind}km/hr`;

    const currentNextTwoTemp = nextTwoTemp.textContent;
    const convertedNextTwoTemp = setMain.fahToCel(currentNextTwoTemp);
    nextTwoTemp.textContent = `${convertedNextTwoTemp}°`;
    // const currentNextTwoWind = nextTwoWind.textContent;
    const convertedNextTwoWind = setMain.convertWind(nextTwoWind.textContent);
    nextTwoWind.textContent = `Wind: ${convertedNextTwoWind}km/hr`;

    const currentNextThreeTemp = nextThreeTemp.textContent;
    const convertedNextThreeTemp = setMain.fahToCel(currentNextThreeTemp);
    nextThreeTemp.textContent = `${convertedNextThreeTemp}°`;
    // const currentNextThreeWind = nextThreeWind.textContent;
    const convertedNextThreeWind = setMain.convertWind(nextThreeWind.textContent);
    nextThreeWind.textContent = `Wind: ${convertedNextThreeWind}km/hr`;
  };

  const nextDaysValuestoFah = () => {
    const currentNextOneTemp = nextOneTemp.textContent;
    const convertedNextOneTemp = setMain.celToFah(currentNextOneTemp);
    nextOneTemp.textContent = `${convertedNextOneTemp}°`;
    // const currentNextOneWind = nextOneWind.textContent;
    const convertedNextOneWind = setMain.convertWind(nextOneWind.textContent);
    nextOneWind.textContent = `Wind: ${convertedNextOneWind}mph`;

    const currentNextTwoTemp = nextTwoTemp.textContent;
    const convertedNextTwoTemp = setMain.celToFah(currentNextTwoTemp);
    nextTwoTemp.textContent = `${convertedNextTwoTemp}°`;
    // const currentNextTwoWind = nextTwoWind.textContent;
    const convertedNextTwoWind = setMain.convertWind(nextTwoWind.textContent);
    nextTwoWind.textContent = `Wind: ${convertedNextTwoWind}mph`;

    const currentNextThreeTemp = nextThreeTemp.textContent;
    const convertedNextThreeTemp = setMain.celToFah(currentNextThreeTemp);
    nextThreeTemp.textContent = `${convertedNextThreeTemp}°`;
    // const currentNextThreeWind = nextThreeWind.textContent;
    const convertedNextThreeWind = setMain.convertWind(nextThreeWind.textContent);
    nextThreeWind.textContent = `Wind: ${convertedNextThreeWind}mph`;
  };

  return {
    appendNextDays, nextDaysUI, nextDaysValuestoCel, nextDaysValuestoFah,
  };
})();

export default setNextDays;