// @yuchen
import { postToken, postLogin } from '../../apis/yuchenAPIs'


export const handleAuth = (localToken) => async dispatch => {
	console.log(localToken)
	postToken(localToken)
		.then(e => {
			console.log(e)
			dispatch({type: '_USER_LOAD', payload: e})
		})
		.catch(err => console.log(err))

	// const e = await postToken(localToken)
	// console.log('safeafafeaffaffsafefasfffafefafe')
	// console.log(e)
}

export const handleLogin = (user, pwd) => async dispatch => {
	console.log('r w there')
	// console.log(user)
	// console.log(pwd)
	postLogin(user, pwd)
		.then(e => {
			dispatch({type: '_USER_LOAD', payload: e})
		})
		.catch (err => console.log(err))
}

export const handle_t1 = () => async dispatch => {
	console.log('yes')
	
	dispatch({type: 'T1', payload: 't1'})
	
}