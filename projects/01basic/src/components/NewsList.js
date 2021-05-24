import React from 'react'

const NewsList = (props) => {
	console.log(props.news)

	return (
		<>
			<p>
				{props.news.map((item) => (
					<ul>
						<li>
							<h3>{item.title} </h3>
							<div>{item.feed}</div>
						</li>
					</ul>
				))}
			</p>
		</>
	)
}

export default NewsList
