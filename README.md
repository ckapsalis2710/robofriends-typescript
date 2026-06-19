# RoboFriends (TypeScript)

A TypeScript port of [RoboFriends](https://github.com/ckapsalis2710/robofriends): a React + Redux app that fetches a list of users from a public API and displays them as searchable "robot" cards, each with a procedurally generated avatar.

> Live demo: https://ckapsalis2710.github.io/robofriends-typescript/

## About

This version rebuilds the original RoboFriends app in **TypeScript**, adding static typing across the whole Redux flow:

- Typed Redux **actions** (`actions.ts`) using a discriminated union (`RobotActionTypes`) for all dispatchable actions.
- Typed **reducers** (`reducers.ts`) with explicit state interfaces (e.g. `IRobot`).
- A typed Redux **store** (`index.tsx`), exporting a `RootState` type inferred from the root reducer.
- The `App` container uses `connect()` from `react-redux` together with `ConnectedProps` to fully type the props injected by Redux.
- All components are written as `.tsx` files with typed props (`Card`, `CardList`, `SearchBox`, `Scroll`, `ErrorBoundary`).

The app still uses:
- **Redux Thunk** for the async `requestRobots` action that fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **Redux Logger** for logging dispatched actions during development.
- **[RoboHash](https://robohash.org/)** to generate a unique avatar image per robot id.
- **[Tachyons](https://tachyons.io/)** for styling.
- A client-side search box that filters the robot list by name.
- An `ErrorBoundary` component to gracefully catch rendering errors.

## Tech Stack

- React 18
- TypeScript
- Redux + React-Redux
- Redux Thunk / Redux Logger
- Create React App (`react-scripts`)
- Tachyons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/ckapsalis2710/robofriends-typescript.git
cd robofriends-typescript
npm install
```

### Running locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The page reloads automatically as you edit files.

### Available Scripts

- **`npm start`** — Runs the app in development mode.
- **`npm test`** — Runs the test runner in interactive watch mode.
- **`npm run check-types`** — Runs the TypeScript compiler (`tsc --noEmit`) to type-check the project without emitting files.
- **`npm run build`** — Builds an optimized production bundle into the `build/` folder.
- **`npm run deploy`** — Builds and publishes the app to GitHub Pages via `gh-pages`.
- **`npm run eject`** — Ejects the Create React App configuration (one-way operation).

## Learn More

- [React documentation](https://reactjs.org/)
- [Redux documentation](https://redux.js.org/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
