import { bmiCalculator } from "./bmiCalculator/bmi";
import { colourFlipper } from "./colourFlipper/bgFlipper";
import { memoizingPromise } from "./memoizingPromises/memoizingPromise";
import { rpsGame } from "./rpsGame/rpsGame";

export const routeDefinitions = [
  // add new projects on top
  { path: '/memoizingPromises', component: memoizingPromise, label: 'Memoizing Promises' },
  { path: '/bmiCalculator', component: bmiCalculator, label: 'BMI Calculator' },
  { path: '/colourFlipper', component: colourFlipper, label: 'Colour Flipper' },
  { path: '/rpsGame', component: rpsGame, label: 'Rock Paper Scissors' },
]