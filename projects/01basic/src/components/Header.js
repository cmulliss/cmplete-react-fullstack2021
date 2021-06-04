import React from 'react'
import './style.css'

const Header = (props) => {
	return (
		<>
			<header>
				<div className='logo'>Logo</div>
				<input onChange={props.keywords} />
			</header>
		</>
	)
}

export default Header

/*
Google font Anton
event, fire fn when clicked

we can trigger the keywords fn from within the child, the above onchange has the event, and it's passing the event into App.js

 <header style={{ background: `${this.state.active ? 'red' : 'blue'}` }} 
 
 
 */
