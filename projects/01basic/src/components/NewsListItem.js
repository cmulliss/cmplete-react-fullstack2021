import React from 'react'

import './style.css'

// pass via props the item, from the db
const NewsListItem = ({ item }) => {
	return (
		<li className='news_item'>
			<h3>{item.title}</h3>
			<p>{item.feed}</p>
		</li>
	)
}

export default NewsListItem

// before destructuring, need only item from the props:

// const NewsListItem = (props) => {
// 	console.log('props', props)
// 	return (
// 		<li>
// 			<h3>{props.item.title}</h3>
// 			<p>{props.item.feed}</p>
// 		</li>
