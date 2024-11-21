import routeDefinitions  from "../routeDefinitions"

export function homePage() {
  document.getElementById('mainContent').innerHTML = `
    <div class="projectCards">
      ${routeDefinitions
      .map(({ path, label, content, img }, index) => `<a href="${path}" data-link>
          <div class="projectCard" id="projectCard${index + 1}">
            <img src="${img}" alt="Project Image" class="CardImages" />
            <div class="cardContent">
              <p>${content}</p>
            </div>
            <div class="cardPartition"></div>
            <div class="cardTitle">
              ${label}
            </div>
          </div>
        </a>`
      )
      .join(' ')
    }
    </div>
    `;
}