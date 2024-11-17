import {homePage} from './home/home.js';
import {routeDefinitions} from './routeDefinitions.js';

// constant time complexity through object, instead of linear time complexity with array
const routes = routeDefinitions.reduce((acc, { path, component }) => {
  acc[path] = component
  return acc;
}, {})

function renderNav() {
  const nav = document.getElementById('main-nav');
  nav.innerHTML = `
  <div class="navContainer">
      <label class="logo">
        <a href="/" data-link>VANILLA<span id="js">JS</span> PROJECTS</a>
      </label>
      <ul class="navLinks">
        <li class="navLinkItem"><a class="navLink" href="/" data-link>Home</a></li>
        <li class="navLinkItem"><a class="navLink" href="/projects" data-link>Projects</a></li>
        <li class="navLinkItem"><a class="navLink" href="/about" data-link>About</a></li>
        <li class="navLinkItem"><a class="navLink" href="/contact" data-link>Contact</a></li>
      </ul>
      </div>
`
}

function router() {
  const path = window.location.pathname;
  const renderFunction = routes[path] || homePage;
  renderFunction()
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]')
  if (link) {
    e.preventDefault();
    const href = link.getAttribute('href')
    window.history.pushState({}, '', href);
    router();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderNav()
  router()
});

window.addEventListener("popstate", router)