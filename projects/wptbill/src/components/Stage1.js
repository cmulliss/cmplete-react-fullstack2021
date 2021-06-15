import React, { useState, useContext, useRef } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'

import { MyContext } from '../context'

const Stage1 = () => {
	const textInput = useRef()
	const context = useContext(MyContext)
	// if changes to true show error message
	const [error, setError] = useState([false, ''])

	const handleSubmit = (e) => {
		e.preventDefault()
		const value = textInput.current.value
		const validate = validateInput(value)

		if (validate) {
			// form is valid, add player
			setError([false, ''])
			context.addPlayer(value)

			// reset
			textInput.current.value = ''
		}
	}

	const validateInput = (value) => {
		if (value === '') {
			setError([true, 'Sorry, you need to add something'])
			return false
		}
		if (value.length <= 2) {
			setError([true, 'Sorry, you need 3 char at least'])
			return false
		}
		return true
	}

	console.log(context)
	return (
		<div>
			<Form onSubmit={handleSubmit} className='mt-4'>
				<Form.Group>
					<Form.Control type='text' placeholder='Add player name' name='player' ref={textInput} />
				</Form.Group>
				{error[0] ? <Alert variant='danger'>{error[1]}</Alert> : null}

				<Button className='miami' variant='primary' type='submit'>
					Add Player
				</Button>
				{/* show the list of players */}

				{context.state.players && context.state.players.length > 0 ? (
					<div>
						<hr />
						<div>
							<ul className='list-group'>
								{context.state.players.map((item, idx) => (
									<li key={idx} className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'>
										{item}
										<span className='badge badge-danger' onClick={() => context.removePlayer(idx)}>
											x
										</span>
									</li>
								))}
							</ul>
                            
						</div>
					</div>
				) : null}
			</Form>
		</div>
	)
}

export default Stage1

// access form input by using refs
// going to set errors on state
