import React from 'react'

// pass via props the item, from the db
const NewsListItem = (props) => {
	return (
		<li key={props.item.id}>
			<h3>{props.item.title}</h3>
			<p>{props.item.feed}</p>
		</li>
	)
}

export default NewsListItem
