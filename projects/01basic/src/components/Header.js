import React, { Component } from 'react'

import './style.css'

class Header extends Component {
	inputChangeHandler(event) {
		console.log(event.target.value)
	}

	render() {
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

2 ways of doing events, one can be reused but more code.
*/
