import { bmiCalculator } from "./bmiCalculator/bmi";
import { colourFlipper } from "./colourFlipper/bgFlipper";
import { memoizingPromise } from "./memoizingPromises/memoizingPromise";
import { rpsGame } from "./rpsGame/rpsGame";

export const routeDefinitions = [
  // add new projects on top
  { path: '/memoizingPromises', component: memoizingPromise, content: 'About the project tech used in it', label: 'Memoizing Promises', img: 'src/assets/cat.jpg' },
  { path: '/bmiCalculator', component: bmiCalculator, content: 'About the project tech used in it', label: 'BMI Calculator', img: 'src/assets/cat.jpg' },
  { path: '/colourFlipper', component: colourFlipper, content: 'About the project tech used in it', label: 'Colour Flipper', img: 'src/assets/cat.jpg' },
  { path: '/rpsGame', component: rpsGame, content: 'About the project tech used in it', label: 'Rock Paper Scissors', img: 'src/assets/cat.jpg' },
]