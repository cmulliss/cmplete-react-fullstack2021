import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Movie from './Movie'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<div className='container'>
				<Switch>
					<Route path='/movie' component={Movie} />
					<Route path='/' component={Home} exact />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
