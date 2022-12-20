import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
	state = { hasError: false };
	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		// log in error aggregator
		console.error(`ErrorBoundaryComponent caught error ${error}, ${info}`);
	}

	render() {
		if (this.state.hasError) {
			return (
				<h2>
					There once was an error that shipped to sea, the name of the ship was
					<Link to="/">GO HOME</Link>
				</h2>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
