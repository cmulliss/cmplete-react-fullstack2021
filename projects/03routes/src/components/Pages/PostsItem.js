import React from 'react'

const PostsItem = (props) => {
	console.log('props from PostsItem', props)
	return (
		<div>
			<div>{props.match.params.id}</div>
		</div>
	)
}

export default PostsItem
