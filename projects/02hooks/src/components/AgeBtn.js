import React from 'react'

// fn handleAge coming in as prop
const AgeBtn = ({ handleAge }) => {
	console.log('5 AgeBtn mounted')
	return (
		<div>
			<button onClick={handleAge}> Add one to Age</button>
		</div>
	)
}

export default React.memo(AgeBtn)
