import React from 'react'

const UserHOC = (WrappedComponent, arg1) => {
	return (props) => (
		<div>
			{arg1}
			<WrappedComponent {...props} />
		</div>
	)
}

export default UserHOC
