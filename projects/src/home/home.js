import { routeDefinitions } from "../routeDefinitions"

export function homePage() {
  document.getElementById('mainContent').innerHTML = `
  <div class="project-links">
      ${routeDefinitions
      .map(({ path, label }) => `<a href="${path}" data-link>${label}</a>`
      )
      .join(' ')
    }
    </div>
  `;
}