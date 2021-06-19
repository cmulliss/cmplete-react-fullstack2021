import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
	// we get props related to the react router
	console.log('props', props)
	return (
		<div>
			<Link
				to={{
					pathname: `${props.match.url}/posts`
				}}
			>
				Posts of profile
			</Link>
		</div>
	)
}

export default Profile

// props: history location, match etc. Match contains params with path, url etc. These props (above) are coming from the router in App.js
