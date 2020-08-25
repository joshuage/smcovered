// @yuchen private apis for admin
import axios from './yuchenAxios'


// @yuchen 这个token里面有密码
export const createAdminToken = async (email, pwd) => {
	// axios.defaults.headers.common['x-auth-token'] = t
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': 'default'
		}
	}
	//const a = axios.create(config)
	// axios.defaults.headers.common['x-auth-token'] = t
	// axios_.defaults.headers.common['x-auth-token'] = t
	// axios.defaults.baseURL='http://localhost:5000'

	console.log("@from createAdminToken in yuchenAPIs")
	// console.log(axios.defaults.headers.common)


	const body = JSON.stringify({ email, pwd })




	//console.log(a.defaults.headers.common)

	const res = await axios.post('/yuchen/api/create_admin', body, config)
	const {token, title} = res.data
	
	localStorage.setItem('token', token)
	console.log(token)
	console.log(title)
}




export const postToken = async (myToken) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': myToken
		}
	}
  console.log(myToken)
	const body = JSON.stringify({myToken})

	const res = await axios.post('/yuchen/api/post_token', body, config)



	console.log('@from postToken in yuchenAPIs')
	console.log(res)
	return new Promise(resolve => {
		const {_isAuthenticated, _user, _title} = res.data
		resolve({_isAuthenticated, _user, _title})
	})
}


// @desc     call on top of each page onloading
export const handleToken = () => {
	if (!localStorage.token) {
		localStorage.setItem('token', 'default')
	}
}

export const postLogin = async (user, pwd) => {
	// console.log(user)
	// console.log(pwd)
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const body = JSON.stringify({user, pwd})
	console.log(body)
	const res = await axios.post('/yuchen/api/login', body, config)

	console.log(res)

	const {token} = res.data
	localStorage.setItem('token', token)

	return new Promise(resolve => {
		const {_isAuthenticated, _user, _title} = res.data
		resolve({_isAuthenticated, _user, _title})
	})
}

export const createAm = async (email, pwd) => {
	// axios.defaults.headers.common['x-auth-token'] = t
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': 'default'
		}
	}


	const body = JSON.stringify({ email, pwd })

	const res = await axios.post('/yuchen/api/create_am', body, config)
	const msg = res.data
	
	
	return new Promise(resolve => {
		resolve(msg)
	})
}

export const getData = async title => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': 'default'
		}
	}

	const body = JSON.stringify({ title })

	const res = await axios.post('/yuchen/api/getdata', body, config)

	const msg = res.data.result

	return new Promise(resolve => {
		resolve(msg)
	})
}