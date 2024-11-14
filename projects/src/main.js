import { homePage } from './home/home.js';
import { memoizingPromise } from './memoizingPromises/memoizingPromise.js';
import { rpsGame } from './rpsGame/rpsGame.js';
import { colourFlipper } from './colourFlipper/bgFlipper.js';

const routes = {
  '/': homePage,
  '/memoizing-promises': memoizingPromise,
  '/rpsGame': rpsGame,
  '/colourFlipper': colourFlipper
};

function renderNav() {
  const nav = document.getElementById('main-nav');
  nav.innerHTML = `
    <div class="navContainer">
      <div id="logo">
        <a href="/">VANILLA<span id="js">JS</span> PROJECTS</a>
      </div>
      <ul class="navLinks">
        <li class="navLinkItem"><a class="navLink" href="/">Home</a></li>
        <li class="navLinkItem"><a class="navLink" href="">Projects</a></li>
        <li class="navLinkItem"><a class="navLink" href="">About</a></li>
        <li class="navLinkItem"><a class="navLink" href="">Contact</a></li>
      </ul>
    </div>
`
}
function renderProjectLinks() {
  const mainContent = document.getElementById('mainContent')
  mainContent.innerHTML = `
  <div class="projectLinks">
  <a href="/memoizing-promises">Cache API Calls in JavaScript by Memoizing Promises</a>
    <a href="/rpsGame">Rock Paper Scissors Game</a>
    <a href="/colourFlipper">Background Colour Flipper</a>
    </div>
    `
}

function router() {
  const path = window.location.pathname;
  const renderFunction = routes[path] || homePage;
  renderNav();
  renderProjectLinks()
  renderFunction()
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