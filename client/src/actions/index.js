import axios from 'axios'
import { FETCH_USER, CREATE_USER } from './types'


export const createUser = (userId) => async dispatch => {
	const respones = await axios.post()
	dispatch({type: CREATE_USER, payload: respones.data})
}