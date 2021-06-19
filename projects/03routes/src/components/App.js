import React from 'react'
import { MemoryRouter, Route, Link } from 'react-router-dom'

import Home from './Pages/Home'
import Posts from './Pages/Posts'
import Profile from './Pages/Profile'
import PostsItem from './Pages/PostsItem'

// replace BrowserRouter with HashRouter, then MemoryRouter
const App = () => {
	return (
		<MemoryRouter>
			<header>
				<div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
					<h5 className='my-0 mr-md-auto font-weight-normal'>Company name</h5>
					<nav className='my-2 my-md-0 mr-md-3'>
						<Link className='p-2 text-dark' to='/'>
							Home
						</Link>{' '}
						-
						<Link className='p-2 text-dark' to='/posts'>
							Posts
						</Link>{' '}
						-
						<Link
							className='p-2 text-dark'
							to={{
								pathname: '/profile',
								hash: '#francis',
								search: '?true=enabled'
							}}
						>
							Profile
						</Link>
					</nav>
				</div>
			</header>
			<div className='container'>
				<Route exact path='/' component={Home} />
				<Route exact path='/posts' component={Posts} />
				<Route exact path='/posts/:id' component={PostsItem} />
				<Route exact path='/profile' component={Profile} />
			</div>
		</MemoryRouter>
	)
}

export default App

// by default a route will pass props
// params,  <Route exact path='/posts/:id'...
// remember, every time we create a route, the props are passed, so go to PostsItem and catch the props, the values will be there.
//
