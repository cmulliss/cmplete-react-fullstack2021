import React, { useEffect } from 'react'

const Post = ({ item }) => {
	useEffect(() => {
		console.log('post created')
		// every time useEffect runs, component gets unmounted
		return () => {
			console.log('component exit, posts removed')
		}
	}, [])

	return (
		<div>
			<div>Name: {item.name}</div>
			<div>Body: {item.body}</div>
			<hr />
		</div>
	)
}

export default Post
