import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './Home'
import Header from './Header'
import PureComp from './PureComp'
import PureCompFunct from './PureCompFunct'
import AdjacentComp from './AdjacentComp'
import Profile from './Profile'
import User from './User'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<div className='container'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/user' component={User} />
					<Route path='/profile' component={Profile} />
					<Route path='/purecomp' component={PureComp} />
					<Route path='/purecompfunct' component={PureCompFunct} />
					<Route path='/adjacentcomp' component={AdjacentComp} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
