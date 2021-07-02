const DEFAULT_STORE = {
	userName: 'Mot',
	userId: 1234
}

export default function (state = { DEFAULT_STORE }, action) {
	switch (action.type) {
		case 'MOVIES_LIST':
			return action.payload
		default:
			return state
	}
}
