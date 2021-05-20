import setMain from './main';

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

  headerTitleIcon.appendChild(headerTitle);
  headerTitleIcon.appendChild(headerIcon);
  headerContainer.appendChild(headerTitleIcon);

  return headerContainer;
};

const setFooter = () => {
  const footerSub = document.createElement('div');
  footerSub.classList.add('footer-sub');

  const footerTextContainer = document.createElement('div');
  footerTextContainer.classList.add('footer-text-div');

  const myGithub = document.createElement('a');
  myGithub.classList.add('my-github');
  myGithub.href = 'https://github.com/Milypm';
  myGithub.target = '_blank';
  const mygithubIcon = document.createElement('i');
  mygithubIcon.classList.add('fab');
  mygithubIcon.classList.add('fa-github-alt');
  myGithub.appendChild(mygithubIcon);

  const siteRights = document.createElement('p');
  siteRights.classList.add('footer-text');
  siteRights.textContent = 'By Mily Puente ';
  siteRights.appendChild(myGithub);

  const siteYear = document.createElement('p');
  siteYear.classList.add('footer-year');
  siteYear.textContent = 'Microverse 2021';

  footerTextContainer.appendChild(siteRights);
  footerTextContainer.appendChild(siteYear);
  footerSub.appendChild(footerTextContainer);

  return footerSub;
};

const start = () => {
  const header = document.getElementById('header');
  header.appendChild(setHeader());
  const main = document.getElementById('main');
  main.appendChild(setMain.appendMain());
  const footer = document.getElementById('footer');
  footer.appendChild(setFooter());
};

start();