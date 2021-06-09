import React, { useState } from 'react'

import Title from './Title'
import Count from './Count'
import CountBtn from './CountBtn'
import Age from './Age'
import AgeBtn from './AgeBtn'

const App = () => {
	const [count, setCount] = useState(0)
	const [age, setAge] = useState(10)

	// a fn to increment count
	const incrementCount = () => {
		setCount(count + 1)
	}

	const incrementAge = () => {
		setAge(age + 1)
	}

	return (
		<>
			<Title />
			<Count count={count} />
			<CountBtn handleCount={incrementCount} />
			<hr />
			<Age age={age} />
			<AgeBtn handleAge={incrementAge} />
		</>
	)
}

export default App

// handleCount is prop for <CountBtn />, same process for <Age/>
