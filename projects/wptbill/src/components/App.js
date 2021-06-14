import React, { Component } from 'react'
import { MyContext } from '../context'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Stage1 from './Stage1'
import Stage2 from './Stage2'

class App extends Component {
	//need static toimport context into a class
	static contextType = MyContext

	render() {
		return (
			<div className='wrapper'>
				<div className='center-wrapper'>
					<h1>Who pays the bill?</h1>
					{this.context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
				</div>
			</div>
		)
	}
}

export default App

// this component will check the context and check which stage we are in.
