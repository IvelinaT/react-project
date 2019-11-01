import React, {Component} from 'react'

class ErrorBoundery extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	}
	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMessage: error.toString()
		})
	}
	render () {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage}</h1>
		}else {
			return this.props.children
		}
		
	} 
}

export default ErrorBoundery