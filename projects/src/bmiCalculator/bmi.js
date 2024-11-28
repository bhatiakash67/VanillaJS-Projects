export function bmiCalculator() {
    document.getElementById('mainContent').innerHTML = `
    <div class="bmiWrapper">
        <div class="bmiBody">
            <h1 id="bmiHeader">BMI Calculator</h1>
            <div class="calculator">
                <div class="bmiSections">
                    <label for="yourHeight">Height</label>
                    <span id="heightValue">174</span>
                </div>
                <input type="range" class="bmiRanges" name="height" id="yourHeight" min="142" max="210">
                <div class="bmiSections">
                    <label for="yourWeight">Weight</label>
                    <span id="weightValue">64</span>
                </div>
                <input type="range" class="bmiRanges" name="weight" id="yourWeight" min="42" max="132">
                <button id="bmiCalculator">CALCULATE</button>
            </div>
            <section class="output">
                <h3 id="bmiResult">Your BMI is</h3>
                <span id="bmiDisplay">0</span>
                <div id="health">N/A</div>
            </section>
            <section class="bmiScale">
                <div style="--color: var(--underweight)">
                    <h4>Underweight</h4>
                    <p>&lt; 18.5</p>
                </div>
                <div style="--color: var(--normal)">
                    <h4>Normal</h4>
                    <p>18.5 - 25</p>
                </div>
                <div style="--color: var(--overweight)">
                    <h4>Overweight</h4>
                    <p>25 - 30</p>
                </div>
                <div style="--color: var(--obese)">
                    <h4>Obese</h4>
                    <p>&ge; 30</p>
                </div>
            </section>
        </div>
    </div>
    `
    let btn = document.getElementById('bmiCalculator')
    let result = document.getElementById('bmiResult')
    let range = document.getElementById('health')
    let height = parseInt(document.getElementById('heightValue').textContent)
    let weight = parseInt(document.getElementById('weightValue').textContent)
    const bmiDisplay = document.getElementById('bmiDisplay')

    function bmiCalculator(h, w) {
        h = h / 100
        let bmi = (w / (h ** 2)).toFixed(2)
        return bmi
    }

    function rangePicker(type, value) {
        if (type === 'height') {
            document.getElementById("heightValue").textContent = value + ' cm'
            height = value
        }
        if (type === "weight") {
            document.getElementById("weightValue").textContent = value + ' kg';
            weight = value
        }
        return [height, weight]
    }

    document.getElementById('yourHeight').addEventListener("input", function () {
        rangePicker('height', this.value)
    })
    document.getElementById('yourWeight').addEventListener("input", function () {
        rangePicker('weight', this.value)
    })

    btn.addEventListener("click", () => {
        let bmi = bmiCalculator(...rangePicker())
        function bmiRangeFinder() {
            bmiDisplay.textContent = `${bmi}`
            if (bmi < 18.5) {
                range.innerHTML = `<strong>underweight</strong>`
            }
            else if (bmi < 25) {
                range.innerHTML = `<strong>normal</strong>`
            }
            else if (bmi < 30) {
                range.innerHTML = `<strong>overweight</strong>`
            }
            else {
                range.innerHTML = `<strong>obese</strong>`
            }
            return
        }
        bmiRangeFinder()
    })
}