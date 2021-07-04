import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moviesList } from '../store/actions'

class Home extends Component {
	getMoviesHandler() {
		// dispatch needs to dispatch an action, so will be moviesList, which will be sent to the reducers
		this.props.dispatch(moviesList())
	}

	render() {
		console.log(this.props)
		const { movies } = this.props
		return (
			<div>
				{movies && movies.moviesList ? movies.moviesList.map((item) => <div key='item.id'>name: {item.name}</div>) : null}
				<button onClick={() => this.getMoviesHandler()}>Get movies</button>
			</div>
		)
	}
}

// mapStateToProps in charge of getting data from store
const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps)(Home)

// connect is going to inject some props on the Home component
// already have dispatch on our props, so use that

// when the app starts we have the default data
