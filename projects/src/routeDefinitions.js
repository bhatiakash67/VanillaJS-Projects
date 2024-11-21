import { bmiCalculator } from "./bmiCalculator/bmi";
import { colourFlipper } from "./colourFlipper/bgFlipper";
import { memoizingPromise } from "./memoizingPromises/memoizingPromise";
import { rpsGame } from "./rpsGame/rpsGame";
import { digitalClock } from "./digitalClock/digitalClock";
import { searchBar } from "./searchBar/searchBar";

const routeDefinitions = [
  // add new projects on top
  { path: '/memoizingPromises', component: memoizingPromise, content: 'About the project tech used in it', label: 'Memoizing Promises', img: 'src/assets/cat.jpg' },
  { path: '/searchBar', component: searchBar, content: 'Display fetched data into a table. Apply search bar for the table.', label: 'Search Bar', img: 'src/assets/cat.jpg' },
  { path: '/digitalClock', component: digitalClock, content: 'About the project tech used in it', label: 'Digital Clock', img: 'src/assets/cat.jpg' },
  { path: '/bmiCalculator', component: bmiCalculator, content: 'About the project tech used in it', label: 'BMI Calculator', img: 'src/assets/cat.jpg' },
  { path: '/colourFlipper', component: colourFlipper, content: 'About the project tech used in it', label: 'Colour Flipper', img: 'src/assets/cat.jpg' },
  { path: '/rpsGame', component: rpsGame, content: 'About the project tech used in it', label: 'Rock Paper Scissors', img: 'src/assets/cat.jpg' },
]
export default routeDefinitions