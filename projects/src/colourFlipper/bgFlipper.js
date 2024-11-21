export function colourFlipper() {
    document.getElementById("mainContent").innerHTML = `
    <div class="colourFlipperwrapper">
        <div class="colourFlipperContainer">
            <p id="flipperTitle">
                Background Colour is: <span id="currentColour"></span>
            </p>
        </div>
        <div class="btnContainer">
           <button class="changeColour" id="startBtn">Start</button>
            <button class="changeColour" id="stopBtn">Stop</button>
        </div>
    </div>
    `
    let stopBtn = document.getElementById('stopBtn')
    let startBtn = document.getElementById('startBtn')
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let intervalId;
    function randomHexColour() {
        let randomHex = '#'
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * 16)
            randomHex += hex[index]
        }
        return randomHex
    }
    startBtn.addEventListener("click", () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                let hexColour = randomHexColour()
                document.body.style.backgroundColor = hexColour
                document.getElementById('currentColour').textContent = hexColour
            }, 1000)
        }
    })
    stopBtn.addEventListener('click', () => {
        clearInterval(intervalId)
        intervalId = null;
    })
}