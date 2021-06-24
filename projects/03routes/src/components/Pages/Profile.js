import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
	// we get props related to the react router
	console.log('profile props', props)
	const [redir, setRedir] = useState(false)

	// if true redirect, and include on the next render ...
	// simple way, to use props and push user to home

	const redirect = () => {
		if (redir) {
			props.history.push('/')
			// return(
			//     <Redirect to="/"/>
			// )
		}
	}
	// ... so, as the component loads with call redirect fn
	return (
		<>
			{redirect()}
			<Link
				to={{
					pathname: `${props.match.url}/posts`
				}}
			>
				posts of profile
			</Link>
			<hr />
			<button onClick={() => setRedir(true)}>Redirect</button>
		</>
	)
}

export default Profile

// props: history location, match etc. Match contains params with path, url etc. These props (above) are coming from the router in App.js

// Redirect only needs to, not from in this component.
