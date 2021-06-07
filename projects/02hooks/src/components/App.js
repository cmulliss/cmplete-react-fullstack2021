import React, { useState, useEffect } from 'react'
import Post from './Post'

const App = ({ initialCount }) => {
	const [state, setState] = useState({
		count: initialCount,
		user: 'Francis'
	})
	// fetching array of post objects, loop to show all posts
	let [posts, setPosts] = useState([
		{
			name: 'first post',
			body: 'post body content'
		},
		{
			name: 'second post',
			body: 'more  body content'
		}
	])

	const decrement = () => {
		setState({
			...state,
			count: state.count - 1
		})
	}

	const addOnePost = () => {
		let newPost = {
			name: 'PHP is still awesome',
			body: 'something about php'
		}

		setPosts([...posts, newPost])
	}

	const removePosts = () => {
		setPosts([])
	}

	useEffect(() => {
		// console.log('change on state')
	}, [state])

	useEffect(() => {
		// console.log('change on posts')
	}, [posts])

	useEffect(() => {
		//console.log('MOUNTED')
	}, [])

	return (
		<>
			<h1>{state.user}</h1>
			<h3>Count: {state.count}</h3>
			<button
				onClick={() =>
					setState({
						...state,
						count: state.count + 1
					})
				}
			>
				{' '}
				Increment +1{' '}
			</button>
			<button onClick={decrement}> Decrement -1 </button>
			<p />
			<button
				onClick={() =>
					setState({
						...state,
						count: initialCount
					})
				}
			>
				{' '}
				Reset{' '}
			</button>
			<p />
			<button onClick={removePosts}> Remove posts </button>
			<p />
			{posts.map((item, i) => (
				<Post item={item} key={i} />
			))}

			<button onClick={addOnePost}>Add a post</button>
		</>
	)
}

export default App

// useEffect, use like a lifecycle method, needs a callback fn
// don't want it run each time, needs to be told to listen for particular property to be updated, hence fn, followed by [], so can listen for multiple things
