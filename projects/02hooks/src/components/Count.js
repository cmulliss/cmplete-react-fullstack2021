import React from 'react'

// getting a prop of count
const Count = ({ count }) => {
	console.log('2 Count mounted')
	return (
		<div>
			<h3>The count is: {count}</h3>
		</div>
	)
}

export default React.memo(Count)
