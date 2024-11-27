export function persistentKeyboardChecker() {
    document.getElementById('mainContent').innerHTML = `
    <div id="keyLogger">
        The selected key is: <ul id="keyName"></ul>
        <p id="last"></p>
        <button id="btn">Remove the values</button>
    </div>
`
    let keyDisplay = document.getElementById('keyName')
    const storedKeys = JSON.parse(localStorage.getItem('keyLog')) || []

    function fetchKeys() {
        keyDisplay.innerHTML = ''
        storedKeys.forEach((key, index) => {
            const listItem = document.createElement('li')
            listItem.textContent = `${index + 1}: ${key}`
            keyDisplay.appendChild(listItem)
        })
    }
    fetchKeys()

    document.addEventListener('keydown', (e) => {
        storedKeys.push(e.code)
        localStorage.setItem('keyLog', JSON.stringify(storedKeys))
        fetchKeys()
    })

    document.getElementById('btn').addEventListener('click', () => {
        localStorage.removeItem('keyLog')
        keyDisplay.innerHTML = ''
        storedKeys.length = 0
    })
}