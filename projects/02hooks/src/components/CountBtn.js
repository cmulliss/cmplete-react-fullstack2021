import React from 'react'

const CountBtn = ({ handleCount }) => {
	console.log('3 CountBtn mounted')
	return (
		<div>
			<button onClick={handleCount}>Increment the count</button>
		</div>
	)
}

export default React.memo(CountBtn)

// this time want to trigger a fn, handleCount, to fire on clicking button, solve problem with useCallback
