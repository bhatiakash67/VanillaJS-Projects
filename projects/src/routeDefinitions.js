import { bmiCalculator } from "./bmiCalculator/bmi";
import { colourFlipper } from "./colourFlipper/bgFlipper";
import { memoizingPromise } from "./memoizingPromises/memoizingPromise";
import { rpsGame } from "./rpsGame/rpsGame";
import { digitalClock } from "./digitalClock/digitalClock";

export let routeDefinitions = [
  // add new projects on top
  { path: '/memoizingPromises', component: memoizingPromise, content: 'About the project tech used in it', label: 'Memoizing Promises', img: 'src/assets/cat.jpg' },
  { path: '/digitalClock', component: digitalClock, content: 'About the project tech used in it', label: 'Digital Clock', img: 'src/assets/cat.jpg' },
  { path: '/bmiCalculator', component: bmiCalculator, content: 'About the project tech used in it', label: 'BMI Calculator', img: 'src/assets/cat.jpg' },
  { path: '/colourFlipper', component: colourFlipper, content: 'About the project tech used in it', label: 'Colour Flipper', img: 'src/assets/cat.jpg' },
  { path: '/rpsGame', component: rpsGame, content: 'About the project tech used in it', label: 'Rock Paper Scissors', img: 'src/assets/cat.jpg' },
]