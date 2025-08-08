import React from 'react';

interface IErrorBoundryProps {
  children: React.ReactNode;
}

interface IErrorBoundryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundryProps, IErrorBoundryState> {
	constructor(props: IErrorBoundryProps){
		super(props);
		this.state = {
			'hasError': false
		}
	}

	componentDidCatch(error: Error, info: React.ErrorInfo): void{
		this.setState({ 'hasError': true});
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return <h1>Ooooops. This is not good</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;