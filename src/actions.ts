import {ActionTypes} from './constants';

import {IRobot} from './reducers';

// returns an object the Action types
interface ISetSearchFieldAction {
  type: typeof ActionTypes.CHANGE_SEARCH_FIELD;
  payload: string;
}

interface IRequestRobotsPendingAction {
  type: typeof ActionTypes.REQUEST_ROBOTS_PENDING;
}

interface IRequestRobotsSuccessAction {
  type: typeof ActionTypes.REQUEST_ROBOTS_SUCCESS;
  payload: IRobot[];
}

interface IRequestRobotsFailedAction {
  type: typeof ActionTypes.REQUEST_ROBOTS_FAILED;
  payload: string;
}

// Union type για όλες τις actions
export type RobotActionTypes =
  | ISetSearchFieldAction
  | IRequestRobotsPendingAction
  | IRequestRobotsSuccessAction
  | IRequestRobotsFailedAction;

export const setSearchField = (text: string): ISetSearchFieldAction => ({
	type: ActionTypes.CHANGE_SEARCH_FIELD,
	payload: text
})

// returns a function. Thunk middleware provides the dispatch to do more actions
export const requestRobots = () => (dispatch: any) => {
	dispatch({ type: ActionTypes.REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: ActionTypes.REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(error => dispatch({ type: ActionTypes.REQUEST_ROBOTS_FAILED, payload: error}));
}