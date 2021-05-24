import React, { Component } from 'react'
import './style.css'

class Header extends Component {
	state = {
		keywords: ''
	}
	inputChangeHandler = (event) => {
		this.setState({
			keywords: event.target.value
		})
	}

	// can do what you want between render and return, because just a method, can do a console log to see state
	render() {
		console.log(this.state)
		return (
			<>
				<header onClick={() => console.log('I was clicked')}>
					<div className='logo'>Logo</div>
					<input onChange={this.inputChangeHandler} />
				</header>
			</>
		)
	}
}
export default Header

/*
Google font Anton
event, fire fn when clicked
*/
