// @yuchen 怕冲突 加_
// @yuchen private
const initialState = {
	_token: localStorage.getItem('token'),
	_isAuthenticated: null,
	_user: null,
	_title: null
}

export const _auth = (state = initialState, action) => {
	const { type, payload } = action
	console.log(payload)
	console.log(type)
	switch (type) {
		case '_USER_LOAD':
			if (payload._isAuthenticated === 'authenticated') {
				return {
					...state,
					_isAuthenticated: true,
					_user: payload._user,
					_title: payload._title
				}
			} else {
				return {
					...state,
					_isAuthenticated: false,
					_user: payload._user === undefined ? 'undefined' : payload._user,
					_title: payload._title === undefined ? 'undefined' : payload._title
				}
			}

		  default:
				return state
	}
}