import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {RootState} from '../index';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchField, requestRobots} from '../actions';

interface IAppProps {}

const mapStateToProps = (state: RootState) => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = {
  onSearchChange: setSearchField,
  onRequestRobots: requestRobots
};


// Redux connection with props of component
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

// Props of component (included Redux props)
interface IAppProps extends PropsFromRedux {};

class App extends React.Component<IAppProps> {

	componentDidMount() {
    	this.props.onRequestRobots();
	}

  	onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    	this.props.onSearchChange(event.target.value);
  	};

	render() {
		const {searchField, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return isPending ?
			<h1>Loading</h1>
		:
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/> 
					</ErrorBoundary>
				</Scroll>
			</div>
	}
}

export default connector(App);