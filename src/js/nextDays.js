const setNextDays = () => {
  const nextDaysContainer = document.createElement('div');
  nextDaysContainer.classList.add('next-days-div');
  const nextOne = document.createElement('div');
  nextOne.classList.add('day-div');
  const nextOneDate = document.createElement('h5');
  nextOneDate.textContent = 'Next day 1';
  const nextOneTemp = document.createElement('h3');
  const nextOneIcon = document.createElement('i');
  const nextTwo = document.createElement('div');
  nextTwo.classList.add('day-div');
  const nextTwoDate = document.createElement('h5');
  nextTwoDate.textContent = 'Next day 2';
  const nextTwoTemp = document.createElement('h3');
  const nextTwoIcon = document.createElement('i');
  const nextThree = document.createElement('div');
  nextThree.classList.add('day-div');
  const nextThreeDate = document.createElement('h5');
  nextThreeDate.textContent = 'Next day 3';
  const nextThreeTemp = document.createElement('h3');
  const nextThreeIcon = document.createElement('i');

  nextOne.appendChild(nextOneDate);
  nextOne.appendChild(nextOneTemp);
  nextOne.appendChild(nextOneIcon);
  nextTwo.appendChild(nextTwoDate);
  nextTwo.appendChild(nextTwoTemp);
  nextTwo.appendChild(nextTwoIcon);
  nextThree.appendChild(nextThreeDate);
  nextThree.appendChild(nextThreeTemp);
  nextThree.appendChild(nextThreeIcon);
  nextDaysContainer.appendChild(nextOne);
  nextDaysContainer.appendChild(nextTwo);
  nextDaysContainer.appendChild(nextThree);

  return nextDaysContainer;
};

export default setNextDays;