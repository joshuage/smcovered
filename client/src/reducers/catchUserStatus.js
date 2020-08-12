export const catchUserStatus = (state='', action) => {
	if (action.type === 'UNKNOW_USER') {
		return action.payload
	}

	return state
}