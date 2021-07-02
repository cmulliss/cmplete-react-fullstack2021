import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<div className='container'>
				<Switch>
					<Route path='/' component={Home} exact></Route>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
