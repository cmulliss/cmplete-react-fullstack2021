import React from 'react'

const NewsListItem = (props) => {
	return (
		<ul key={props.item.id}>
			<li>
				<h3>{props.item.title} </h3>
				<div>{props.item.feed}</div>
			</li>
		</ul>
	)
}

export default NewsListItem
