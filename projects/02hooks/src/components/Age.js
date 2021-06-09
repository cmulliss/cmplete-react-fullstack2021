import React from 'react'

// getting a prop of age
const Age = ({ age }) => {
	console.log('4 Age mounted')
	return (
		<div>
			<h3>Age is: {age}</h3>
		</div>
	)
}

export default React.memo(Age)

// all 5 components mount, using a LOT of resources, see console logs:
// forcing a rerender of the components.
// only the appropriate one should rerender, ie whichever is incrementing, but not the other, or the title.
// first fix the title with memo
