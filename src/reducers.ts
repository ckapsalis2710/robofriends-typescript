import {ActionTypes} from './constants';
import { RobotActionTypes } from './actions';

export interface IRobot {
  id: number;
  name: string;
  email: string;
}

export interface ISearchRobotsState {
  searchField: string;
}

const initialStateSearch: ISearchRobotsState = {
  searchField: ''
};

// set deafult values to parameters
export const searchRobots = (state: ISearchRobotsState=initialStateSearch, action: RobotActionTypes): ISearchRobotsState => {
	switch (action.type) {
		case ActionTypes.CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField:action.payload});
		default:
			return state;
	}
}

export interface IRequestRobotsState {
  robots: IRobot[];
  isPending: boolean;
  error: string;
}

const initialStateRobots: IRequestRobotsState = {
  robots: [],
  isPending: false,
  error: ''
};

// set deafult values to parameters
export const requestRobots = (state: IRequestRobotsState=initialStateRobots, action: RobotActionTypes): IRequestRobotsState => {
	switch (action.type) {
		case ActionTypes.REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending: true});
		case ActionTypes.REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending: false});
		case ActionTypes.REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false});
		default:
			return state;
	}
}

