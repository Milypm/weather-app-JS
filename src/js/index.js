import setHeader from './header';
import setMain from './main';

import '../css/style.css';

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