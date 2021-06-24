import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
	state = {
		name: 'Francis'
	}

	// don't rerender if the same, or chabge it to a pure component which will do the same
	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (nextState.name === this.state.name) {
	// 		return false
	// 	}
	// }

	render() {
		console.log('render')
		return (
			<>
				<h3>{this.state.name}</h3>
				<button onClick={() => this.setState({ name: 'Francis' })}>Click to change</button>
			</>
		)
	}
}

export default PureComp
