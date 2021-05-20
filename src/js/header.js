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

  headerTitleIcon.appendChild(headerTitle);
  headerTitleIcon.appendChild(headerIcon);
  headerContainer.appendChild(headerTitleIcon);

  return headerContainer;
};

export default setHeader;