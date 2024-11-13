import { homePage } from './home/main.js';
import { memoizePromises } from './memoizingPromises/main.js';
import { RPSGame } from './RPSGame/main.js';
import { colourFlipper } from './colourFlipper/main.js';

const routes = {
  '/': homePage,
  '/memoizing-promises': memoizePromises,
  '/RPSGame': RPSGame,
  '/colourFlipper': colourFlipper
};

function renderNav() {
  const nav = document.getElementById('main-nav');
  nav.innerHTML = `
    <a href="/">Home</a>
    <a href="/memoizing-promises">Cache API Calls in JavaScript by Memoizing Promises</a>
    <a href="/RPSGame">Rock Paper Scissors Game</a>
    <a href="/colourFlipper">Background Colour Flipper</a>
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