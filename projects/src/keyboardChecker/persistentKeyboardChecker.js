export function persistentKeyboardChecker() {
  document.getElementById('mainContent').innerHTML = `
  <div id="keyLogger">
    <h1>The pressed key is: </h1>
    <div id="keyName"></div>
    <button id="keyCheckerBtn">Clear the local Storage</button>
  </div>
`
  let keyDisplay = document.getElementById('keyName')
  const storedKey = JSON.parse(localStorage.getItem('keyLog')) || []

  function fetchKeys(key) {
    if (key) keyDisplay.textContent = `${key}`
    else if (storedKey.length > 0) keyDisplay.textContent = `${storedKey[storedKey.length - 1]}`;
    else keyDisplay.textContent = `No key pressed yet.`
  }
  fetchKeys()

  document.addEventListener('keydown', (e) => {
    storedKey.push(e.code)
    localStorage.setItem('keyLog', JSON.stringify(storedKey))
    fetchKeys(e.code)
  })

  document.getElementById('keyCheckerBtn').addEventListener('click', () => {
    keyDisplay.innerHTML = 'No key pressed yet.'
    localStorage.clear()
  })
}