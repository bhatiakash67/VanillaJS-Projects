export function bmiCalculator() {
    document.getElementById('mainContent').innerHTML = `
    <div class="bmiWrapper">
        <h1>BMI Calculator</h1>
    <label for="yourHeight">Enter your height here:</label>
    <input type="range" name="height" id="yourHeight" min=><span></span> <br>
    <label for="yourWeight">Enter your weight here:</label>
    <input type="number" name="weight" id="yourWeight" placeholder="kg">
    <br> <button id="calculator">Calculate</button>
    <div id="result">Your BMI is: </div>
    <div id="health">Scale of health you are at: Normal or not</div>
    <div>
    `
    let btn = document.getElementById('calculator')
    let result = document.getElementById('result')
    let range = document.getElementById('health')

    function bmiCalculator(h, w) {
        h = h / 100
        let bmi = (w / (h ** 2)).toFixed(2)
        return bmi
    }

    btn.addEventListener("click", () => {
        let weight = document.getElementById('yourWeight').value
        let height = document.getElementById('yourHeight').value
        try {
            if (isNaN(weight) || isNaN(height)) {
                throw new Error("Please enter both the values.")
            }
            if (weight <= 0 || height <= 0) {
                throw new Error("Please enter valid values.")
            }
            let bmi = bmiCalculator(height, weight)
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
        }
        catch (error) {
            alert(error.message)
        }
    })
}