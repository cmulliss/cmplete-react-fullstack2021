import React, { useState } from 'react'

const PureCompFunct = () => {
	const [name, setName] = useState('Francis')
	console.log('render')
	return (
		<div>
			<h3>{name}</h3>
			<button onClick={() => setName('Francis')}>Click to change</button>
		</div>
	)
}

export default PureCompFunct
