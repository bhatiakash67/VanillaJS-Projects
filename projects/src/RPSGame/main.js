export function RPSGame() {
    const html = `
    <div class="RPSwrapper">
        <div class="container">
            <div class="gameHeader">Rock Paper Scissors</div>
            <div class="scoreboard">
                <div class="player">
                    <div class="playerTitle">Player</div>
                    <span id="playerScore">0</span>
                </div>
                <div class="computer">
                    <div class='playerTitle'>Computer</div>
                    <span id="pcScore">0</span>
                </div>
            </div>
            <div class="movesSection">
                <div class="movesHeader">Choose your Move</div>
                <div class="movesHeader moves-remaining">Moves Left:
                    <span id="movesLeft">
                        5
                    </span>
                </div>
            </div>
            <div class="buttons">
                <button class="playerOption btn" id="rock">Rock</button>
                <button class="playerOption btn" id="paper">Paper</button>
                <button class="playerOption btn" id="scissors">Scissors</button>
            </div>
            <div class="result" id="result"></div>
            <button class="reload btn hide">Restart</button>
        </div>
    </div>
`
    document.getElementById('app').innerHTML = html

    let gameOptions = document.querySelectorAll('.playerOption')
    let playerScrDisplay = document.getElementById('playerScore')
    let pcScrDisplay = document.getElementById('pcScore')
    let reloadBtn = document.querySelector('.reload')
    let result = document.querySelector('.result')
    let movesLeftDisplay = document.getElementById('movesLeft')
    let playerOption
    let pcOption
    let playerScore = 0
    let pcScore = 0
    let movesLeft = 5
    let pcOptions = ['rock', 'paper', 'scissors']

    function pcMovePicker(arr) {
        let randomChoice = Math.floor(3 * Math.random())
        return arr[randomChoice]
    }

    function gameLogic() {
        pcOption = pcMovePicker(pcOptions)
        if (playerOption === pcOption) {
            result.textContent = "It's a tie!"
        }
        else if ((playerOption == 'rock' && pcOption == 'scissors') || (playerOption == 'paper' && pcOption == 'rock') || (playerOption == 'scissors' && pcOption == 'paper')) {
            playerScore++
            playerScrDisplay.textContent = playerScore
            result.textContent = 'You win!!!'
        }
        else {
            pcScore++
            pcScrDisplay.textContent = pcScore
            result.textContent = 'Computer wins!!'
        }

        movesLeft--
        movesLeftDisplay.textContent = movesLeft

        if (movesLeft === 0) {
            endGame()
        }
    }

    function endGame() {
        gameOptions.forEach(button => button.disabled = true)
        if (playerScore > pcScore) {
            result.textContent = "Game over! You won!"
        } else if (playerScore < pcScore) {
            result.textContent = "Game over! Computer won!"
        } else {
            result.textContent = "Game over! It's a Tie!"
        }
        reloadBtn.classList.remove('hide')
    }

    gameOptions.forEach((element) => {
        element.addEventListener('click', function()  {
            playerOption = this.id
            gameLogic()
        })
    })

    reloadBtn.addEventListener("click", () => {
        playerScore = 0
        pcScore = 0
        movesLeft = 5
        movesLeftDisplay.textContent = movesLeft
        playerScrDisplay.textContent = playerScore
        pcScrDisplay.textContent = pcScore
        result.textContent = "Choose your move!"
        gameOptions.forEach(button => button.disabled = false)
        reloadBtn.classList.add('hide')
    })
}
