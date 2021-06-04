import React, { Component } from 'react'

import './App.css'
import Header from './Header'
import NewsList from './NewsList'
import Footer from './Footer'
import LifeCycle from './LifeCycle'

import JSON from '../db.json'

// pass state down to NewsList component below, we do this via props
// also pass props down to footer
class App extends Component {
	state = {
		news: JSON,
		filtered: JSON,
		footerText: 'a happy footer',
		active: true
	}
	// a fn to be available on Header, this.getKeywords
	// will go through to Header as this.props.keywords
	// can run functions through children
	getKeywords = (event) => {
		console.log(event.target.value)
		let keywords = event.target.value
		let filtered = this.state.news.filter((item) => {
			return item.title.indexOf(keywords) > -1
		})
		this.setState({
			filtered: filtered
		})
	}
	// using ternary to hide and show elements
	render() {
		const { news, footerText, filtered } = this.state
		return (
			<>
				<Header keywords={this.getKeywords} />
				{/* <NewsList news={filtered}>
					<br />
					<h1>I am a child</h1>
				</NewsList> */}
				<Footer footerText={footerText} />
				{this.state.active ? <LifeCycle /> : null}
				<button
					onClick={() => {
						this.setState({
							active: !this.state.active
						})
					}}
				>
					Action
				</button>
			</>
		)
	}
}

export default App
/*
<Header />
				<NewsList news={this.state.news} />
				<Footer footerText={this.state.footerText} />
The above can be destructured
so, const {news} = this.state
saves repeating this.state
*/
