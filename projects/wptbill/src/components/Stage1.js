import React, { useState, useContext, useRef } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'

import { MyContext } from '../context'

const Stage1 = () => {
	const textInput = useRef()
	const context = useContext(MyContext)

	return (
		<div>
			<Form className='mt-4'>
				<Form.Group>
					<Form.Control type='text' placeholder='Add player name' name='player' ref={textInput} />
				</Form.Group>
				<Button className='miami' variant='primary' type='submit'>
					Add Player
				</Button>
			</Form>
		</div>
	)
}

export default Stage1

