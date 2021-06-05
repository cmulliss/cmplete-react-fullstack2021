import React, { useState } from 'react'

import './App.css'

const App = () => {
	let [count, setCount] = useState(0)

	const addOne = () => {
		setCount(count + 1)
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Count: {count}</h1>
				<button onClick={addOne}>Add one +1</button>
			</header>
		</div>
	)
}

export default App
