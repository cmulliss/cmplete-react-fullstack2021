import React from 'react'
import { Link } from 'react-router-dom'

const AdjacentComp = () => {
	const ids = [
		{ id: '1', name: 'Post 1' },
		{ id: '2', name: 'Post 2' },
		{ id: '3', name: 'Post 3' }
	]
	// can put this in the return
	// const list = ids.map(item =>(
	//     <span key={item.id}>
	//         <Link to={item.id}>{item.name}</Link><br/>
	//     </span>
	// ))

	// return ids.map(item =>(
	//     <span key={item.id}>
	//         <Link to={item.id}>{item.name}</Link><br/>
	//     </span>
	// ))
	return [<div key='1'>Hello </div>, <div key='2'>I am </div>, <div key='3'>A react app</div>]
}

export default AdjacentComp