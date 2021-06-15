import React, { Component } from 'react'

const MyContext = React.createContext()

class MyProvider extends Component {
	state = {
		stage: 1,
		players: [],
		result: ''
	}
	// every time you call addPlayerHandler from other components will trigger this fn and update state.
	addPlayerHandler = (name) => {
		this.setState((prevState) => ({
			players: [...prevState.players, name]
		}))
	}
	// call this fn from the other component, stage1
	removePlayerHandler = (idx) => {
		let newArray = this.state.players
		newArray.splice(idx, 1)
		this.setState({ players: newArray })
	}

	render() {
		return (
			<MyContext.Provider
				value={{
					state: this.state,
					addPlayer: this.addPlayerHandler,
					removePlayer: this.removePlayerHandler
				}}
			>
				{this.props.children}
			</MyContext.Provider>
		)
	}
}

export { MyContext, MyProvider }
// Provider needs a value, passing just state for now.
// need to add all the fns
