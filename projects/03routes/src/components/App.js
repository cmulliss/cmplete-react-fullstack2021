import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Pages/Home'
import Posts from './Pages/Posts'
import Profile from './Pages/Profile'
import PostsItem from './Pages/PostsItem'

// replace BrowserRouter with HashRouter, then MemoryRouter
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<div className='container'>
				<Switch>
					{/* <Redirect from='/profile' to='/' /> */}
					<Route path='/posts/:id' component={PostsItem} />
					<Route path='/posts' component={Posts} />
					<Route path='/profile' component={Profile} />
					<Route exact path='/' component={Home} />
					{/* 404, render some jsx, no path needed */}
					<Route render={() => <h3>Oops, page not found!</h3>} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App

// by default a route will pass props
// params,  <Route exact path='/posts/:id'...
// remember, every time we create a route, the props are passed, so go to PostsItem and catch the props, the values will be there.
// Can change Link to NavLink, useful for setting active nav link.

// Switch needs specific order, as not using 'exact', reads routes, and as soon as something matches it will show it. The most specific routes need to be at the top. Home is least specific, so goes at bottom.

// Redirect component, needs to and from. Can also do it from within a component.
