import React, { useState, useCallback } from 'react'

import Title from './Title'
import Count from './Count'
import CountBtn from './CountBtn'
import Age from './Age'
import AgeBtn from './AgeBtn'

const App = () => {
	const [count, setCount] = useState(0)
	const [age, setAge] = useState(10)

	// a fn to increment count
	// each time these 2 fns are called seen as diferent fns, in each case, so rerender, memo can't tell that they are the same fns, , in memory the fns are different on each rerender, need to use useCallback. UseCallback needs to listen for some properties, is called dependency. Can use prvious too. Even better as only rerendered once each time as we are not listening for a dependency }, [count]) or }, [age])
	const incrementCount = useCallback(() => {
		setCount((prevCount) => prevCount + 1)
	}, [])

	const incrementAge = useCallback(() => {
		setAge((prevAge) => prevAge + 1)
	}, [])

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
// Age and Count not calling a fn, so not rendering each time when using memo
