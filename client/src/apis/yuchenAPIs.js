
import axios from './smCovered'



export const createAdminToken = async (email, pwd, t) => {
	// axios.defaults.headers.common['x-auth-token'] = t
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': t
		}
	}
	//const a = axios.create(config)
	// axios.defaults.headers.common['x-auth-token'] = t
	// axios_.defaults.headers.common['x-auth-token'] = t
	// axios.defaults.baseURL='http://localhost:5000'
	console.log("from createA")
	console.log(axios.defaults.headers.common)


	const body = JSON.stringify({ email, pwd })




	//console.log(a.defaults.headers.common)

	const res = await axios.post('/yuchen/api', body, config)
	const {token, title} = res.data
	
	localStorage.setItem('token', token)
	console.log(token)
	console.log(title)
}