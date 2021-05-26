import React from 'react'

// pass via props the item, from the db
const NewsListItem = (props) => {
	return (
		<>
			<h3>{props.item.title} </h3>
			<div>{props.item.feed}</div>
		</>
	)
}

export default NewsListItem
