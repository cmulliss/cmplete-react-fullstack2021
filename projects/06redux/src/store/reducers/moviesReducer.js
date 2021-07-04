const DEFAULT_STORE = {
	userName: 'Mot',
	userId: 1234
}

export default function (state = { DEFAULT_STORE }, action) {
	switch (action.type) {
		case 'MOVIES_LIST':
			return { ...state, moviesList: action.payload }
		case 'MOVIE_DATA':
			return { ...state, movieData: action.payload }
		default:
			return state
	}
}
// to keep previous state, use spread and new property, moviesList.
//new state will be = to what we had before + moviesList
