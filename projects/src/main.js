import { homePage } from './home/main.js';
import { memoizePromises } from './memoizingPromises/main.js';
import { pro2 } from './pro2/main.js';

const routes = {
  '/': homePage,
  '/memoizing-promises': memoizePromises,
  '/project2': pro2,
};

function renderNav() {
  const nav = document.getElementById('main-nav');
  nav.innerHTML = `
    <a href="/">Home</a>
    <a href="/memoizing-promises">Cache API Calls in JavaScript by Memoizing Promises</a>
    <a href="/project2">Project 2</a>
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