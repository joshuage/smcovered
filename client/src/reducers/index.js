import { combineReducers } from 'redux'

const userFetch = (state=null, action) => {
	if (action.type === 'FETCH_USER') {
		return [...state, action.payload]
	}
	return state
}

const d = (state='default !!', action) => {
	return state
}

export default combineReducers({
	fetchUser: userFetch,
	de: d
})