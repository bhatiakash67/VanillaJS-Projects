# VanillaJS Projects 
- Cache API Calls in JavaScript by Memoizing Promises. [Here](./src/memoizingPromises/).

## File Directory Setup
```mermaid
graph TD;
    A[User loads the page] --> B[index.html loads]
    B --> C[src/main.js executes]
    C --> D[renderNav function creates navigation]
    C --> E[router function determines current route]
    E --> F{Which route?}
    F -->|"/"| G[renderHome from home/main.js]
    F -->|"/memoizing-promises"| H[memoizePromises from memoizingPromises/main.js]
    F -->|"/rps-game"| I[rpsGame from rpsGame/main.js]
    F -->|"/colour-flipper"| J[colourFlipper from colourFlipper/main.js]
    G --> K[Update #mainContent div content]
    H --> K
    I --> K
    J --> K
```