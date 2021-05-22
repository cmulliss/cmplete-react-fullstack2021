import React, { Component } from 'react'

const thisYear = new Date().getFullYear()

class Header extends Component {
	render() {
		return <div>Todays Date is {thisYear}</div>
	}
}

export default Header
