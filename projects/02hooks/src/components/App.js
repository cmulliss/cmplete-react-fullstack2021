import React from 'react'

import User from './User'
import { MyProvider } from '../context'

const App = () => {
	return (
		<div>
			<h1>Hello</h1>
			<MyProvider>
				<User />
			</MyProvider>
		</div>
	)
}

export default App

// passing this info to 2nd child, User, via props, but passing props all ove the place, difficult and inefficent. Solution is useContext, to create a centralised place to access the data.
// The main goal is to access the data that we have on the context, from within the user item.
// We just create a context in a centralised place, and connect to it.
