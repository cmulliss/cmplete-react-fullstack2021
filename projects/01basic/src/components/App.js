import React, { Component } from 'react'

import './App.css'
import Header from './Header'
import NewsList from './NewsList'

import JSON from '../db.json'

class App extends Component {
	state = {
		news: JSON
	}

	render() {
		return (
			<>
				<Header />
				<NewsList news={this.state.news} />
			</>
		)
	}
}

export default App
