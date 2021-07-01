import React from 'react'

const Auth = (props) => {
	const pass = 'password1234'

	if (pass !== 'password123') {
		return <h3>Auth failed</h3>
	} else {
		return props.children
	}
}

export default Auth
