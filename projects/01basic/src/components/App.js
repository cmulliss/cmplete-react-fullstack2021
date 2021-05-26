import React, { Component } from 'react'

import './App.css'
import Header from './Header'
import NewsList from './NewsList'

import JSON from '../db.json'

//pass state down to NewsList component below, we do this via props
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
