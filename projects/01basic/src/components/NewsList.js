import React from 'react'
import NewsListItem from './NewsListItem'

const NewsList = (props) => {
	const news = props.news.map((item) => (
		<li key={item.id}>
			<NewsListItem item={item} key={item.id} />
		</li>
	))

	return <ul>{news}</ul>
}

export default NewsList

// map needs a callback fn
//but map using (), not {}, or will break, because we don't want to return anything.
