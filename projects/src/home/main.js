export function homePage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Welcome to My VanillaJS Projects</h1>
    <p>Select a project from the navigation menu to get started.</p>
  `;
}