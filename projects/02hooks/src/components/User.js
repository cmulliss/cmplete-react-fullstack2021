import React, { Component } from 'react'

import { MyContext } from '../context'
import UserItem from './UserItem'

class User extends Component {
	// static properties load before anything else
	// need to create one be able to import the context
	//static contextType = MyContext
	render() {
		return (
			<div>
				<MyContext.Consumer>
					{(context) => {
						console.log('context', context)
					}}
				</MyContext.Consumer>
				<UserItem />
			</div>
		)
	}
}
export default User
// users from App passed down as props here, User.js
// {...props} everthing that is inside the props (es6)
// but, not using props, so delete them

// better to use a functional component
