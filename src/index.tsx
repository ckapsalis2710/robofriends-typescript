import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, Store} from 'redux';
import {createLogger} from 'redux-logger';
import { thunk } from 'redux-thunk'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './containers/App.css';
import App from './containers/App';
import {ISearchRobotsState, IRequestRobotsState, searchRobots, requestRobots} from './reducers';
import { RobotActionTypes } from './actions';

export type RootState = {
  searchRobots: ISearchRobotsState;
  requestRobots: IRequestRobotsState;
};

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

const logger = createLogger();

const store: Store<RootState, RobotActionTypes> = createStore(
  rootReducer as any, 
  applyMiddleware(thunk, logger)
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<App />
	  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();
