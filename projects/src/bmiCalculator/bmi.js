export function bmiCalculator() {
    document.getElementById('mainContent').innerHTML = `
    <div class="bmiWrapper">
       <h1>BMI Calculator</h1>
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
        <button id="calculator">Calculate</button>
        <div id="result">Your BMI is:</div>
        <div id="health"></div>
    <div>
    `
    let btn = document.getElementById('calculator')
    let result = document.getElementById('result')
    let range = document.getElementById('health')
    let height = parseInt(document.getElementById('heightValue').textContent)
    let weight = parseInt(document.getElementById('weightValue').textContent)

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
            result.textContent = `Your BMI is: ${bmi}`
            if (bmi < 16) {
                range.textContent = 'Severe Thinness'
            }
            else if (bmi < 17) {
                range.textContent = 'Moderate Thinness'
            }
            else if (bmi < 18.5) {
                range.textContent = 'Mild Thinness'
            }
            else if (bmi < 25) {
                range.textContent = 'Normal'
            }
            else if (bmi < 30) {
                range.textContent = 'Overweight'
            }
            else if (bmi < 35) {
                range.textContent = 'Obese Class 1'
            }
            else if (bmi < 40) {
                range.textContent = 'Obese Class 2'
            }
            else if (bmi > 40) {
                range.textContent = 'Obese Class 3'
            }
            return
        }
        bmiRangeFinder()
    })
}