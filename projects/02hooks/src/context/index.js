import React, { Component } from 'react'

const MyContext = React.createContext()

class MyProvider extends Component {
	state = {
		users: [
			{ id: 1, name: 'Francis' },
			{ id: 2, name: 'Steve' },
			{ id: 3, name: 'Lisa' }
		],
		active: true
	}

	toggleActive = () => {
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		return (
			<MyContext.Provider
				value={{
					users: this.state.users,
					active: this.state.active,
					toggleActive: this.toggleActive
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

export { MyContext, MyProvider }
// create a class component that wraps the whole app.
// To get a provider, need to first create a context.
// Provider needs to wrap whatever we put inside it, {this.props.children}
// Provider needs value, which is what we are going to be passing to other components, in this case state, whatever we have put in state.
