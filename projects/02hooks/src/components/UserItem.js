import React, { useContext } from 'react'

import { MyContext } from '../context'

const UserItem = () => {
	const context = useContext(MyContext)

	console.log(context)
	return (
		<div>
			<h1>UserItem</h1>
			{context.active
				? context.users.map((item) => (
						<div key={item.id}>
							<div>Name: {item.name}</div>
						</div>
				  ))
				: null}
			<hr />
			<button onClick={context.toggleActive}>Toggle it </button>
		</div>
	)
}

export default UserItem
// need to access the context, using the hook to access the context we have in it's own file. This context is completely inked to the state that we are passing the value.
// above accessing the active property
