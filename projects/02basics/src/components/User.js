import React from 'react'

import UserHOC from './hocs/UserHOC'

const User = (props) => {
	console.log(props)
	return (
		<div>
			<h3>User</h3>
		</div>
	)
}

export default UserHOC(User, 'Hello, I am ')

// this component should be directly linked to the route, so should have history etc, but props seem to be empty? This is because it is the HOC that is being directly linked.
