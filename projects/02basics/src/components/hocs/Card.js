import React from 'react'

const myStyle = {
	background: 'lightgrey'
}

const Card = (props) => {
	return (
		<div style={myStyle} className='card'>
			{props.children}
		</div>
	)
}

export default Card

// this is an HOC
