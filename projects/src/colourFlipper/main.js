export function colourFlipper() {
    const html = `
    <div class="colourFlipperwrapper">
        <div class="colourFlipperContainer">
            <div class="title">
                Background Colour is: <span id="currentColour">Red</span>
            </div>
        </div>
        <div class="btnContainer">
           <button class="changeColour" id="startBtn">Start the Party</button>
            <button class="changeColour" id="stopBtn">I can't take this anymore</button>
        </div>
    </div>
    `
    document.getElementById('app').innerHTML = html

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
                currentColour.textContent = hexColour
            }, 1000)
        }
    })
    stopBtn.addEventListener('click', () => {
        clearInterval(intervalId)
        intervalId = null;
    })
}