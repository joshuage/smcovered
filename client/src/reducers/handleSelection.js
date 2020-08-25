export const handleSelection = (state='', action) => {
	console.log(action)
	if (action.type === 'T1') {
		return action.payload
	}

	return state
}

export const handlePop = (state='', action) => {
	if (action.type === 'POP') {
		return action.payload
	}

	return state
}

export const data = (state=[], action) => {
	if (action.type === 'data') {
		return action.payload
	}

	return state
}