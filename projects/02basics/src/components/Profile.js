import React from 'react'

import Card from './hocs/Card'
import Auth from './hocs/Auth'

const Profile = () => {
	return (
		<Auth>
			<Card>
				<h1>profile</h1>
			</Card>
		</Auth>
	)
}

export default Profile
