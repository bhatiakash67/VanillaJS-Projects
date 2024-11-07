import { homePage } from './home/main.js';
import { memoizePromises } from './memoizingPromises/main.js';
import { RPSGame } from './RPSGame/main.js';
import { pro3 } from './pro3/main.js';

const routes = {
  '/': homePage,
  '/memoizing-promises': memoizePromises,
  '/RPSGame': RPSGame,
  '/pro3': pro3
};

function renderNav() {
  const nav = document.getElementById('main-nav');
  nav.innerHTML = `
    <a href="/">Home</a>
    <a href="/memoizing-promises">Cache API Calls in JavaScript by Memoizing Promises</a>
    <a href="/RPSGame">Project 2</a>
    <a href="/pro3">Project 3</a>
  `;
}

function router() {
  const path = window.location.pathname;
  const renderFunction = routes[path] || homePage;
  renderFunction();
}

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  router();
});

document.body.addEventListener('click', (e) => {
  if (e.target.matches('#main-nav a')) {
    e.preventDefault();
    window.history.pushState({}, '', e.target.href);
    router();
  }
});