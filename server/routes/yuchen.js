// @yuchen
const express = require('express')
const router = express.Router()

// @yuchen token三剑客
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')

const AdminUser = require('../models/AdminUser')
const AmUser = require('../models/AmUser')
const BasicUser = require('../models/BasicUser')

const auth = require('../middleware/auth')

const adminRegister = async (pwd, email) => {                           // @yuchen 这里还要改哦 college 
	const user = new AdminUser({
		email,
		password: pwd,
		date: null,
		status: true,
	})

	const salt = await bcrypt.genSalt(10)
	user.password = await bcrypt.hash(pwd, salt)

	await user.save()
	console.log('sign in with admin account********************************************************')
}

const amRegister = async (pwd, email) => {                           // @yuchen 这里还要改哦 college 
	const user = new AmUser({
		email,
		password: pwd,
		date: null,
		status: true,
	})

	const salt = await bcrypt.genSalt(10)
	user.password = await bcrypt.hash(pwd, salt)

	await user.save()
}

// @route     Post yuchen/api/create_admin
// @desc      create admin
// @access    Private


router.post('/create_admin', (req, res) => {
	console.log('@create admin*************************************************')
	const { email, pwd } = req.body
	console.log('is there a token?')
	console.log(req.header('x-auth-token'))
	adminRegister(pwd, email)

	try {
		const payload = {                   // @yuchen 没有全部数据的token
			user: {
				id: email,                    // @yuchen 你这名字起的有歧义了
				title: 'adminUser',
				pwd
			}
		}

		jwt.sign(payload, config.get('jwtSecret'), {
			expiresIn: 3600 * 24 * 30
		}, (err, token) => {
			if (err) throw err
			res.json({ token, title: 'adminUser' })
		})
	} catch (err) {
		console.log(err)
		res.send('something is wrong with creating an amUser, try search in console')
	}
})

// @route     Post /post_token
// @desc      user & send token
// @access    Private

router.post('/post_token', auth, async (req, res) => {
	console.log('@post token**************************************************')
	console.log('is there a token?')
	const _title = req.title
	const email = req.user
	const pwd = req.pwd
	// console.log(req.body.myToken)
	console.log(_title)
	console.log(email)
	console.log(pwd)


	let user = {}
	let title = ''
	if (await BasicUser.findOne({ email })) {
		user = await BasicUser.findOne({ email })
		title = 'basicUser'
	} else if (await AmUser.findOne({ email })) {
		user = await AmUser.findOne({ email })
		title = 'amUser'
	} else if (await AdminUser.findOne({ email })) {
		user = await AdminUser.findOne({ email })
		title = 'adminUser'
	} else {
		console.log('from else if not find the user')
		res.send({ _isAuthenticated: 'unathenticated' })         // @yuchen 
		res.end('end here')
	}
	console.log('***********************************************')
	console.log(pwd)
	console.log(user)
	console.log('pppppppppppppppppppppppppppppppppp')
	console.log(user)
	console.log('pppppppppppppppppppppppppppppppppp')
	if (user !== {}) {                                        // @yuchen 这里还有待商榷
		await bcrypt.compare(pwd, user.password) && _title == title ?
			res.json({ _isAuthenticated: 'authenticated', _user: user.email, _title: title }) :
			res.json({ _isAuthenticated: 'unathenticated' })


		console.log(req.body.myToken)
		console.log('end of post_token********************************************')
	}
	// res.send('done')    // @yuchen 这里也有不完全的地方 cannot set header after they are sent to the client
})

router.post('/login', async (req, res) => {
	const user = req.body.user
	const pwd = req.body.pwd

	let current = {}
	let title = ''

	if (await AdminUser.findOne({ email: user })) {
		current = await AdminUser.findOne({ email: user })
		title = 'adminUser'
	} else if (await AmUser.findOne({ email: user })) {
		current = await AmUser.findOne({ email: user })
		title = 'amUser'
	} else if (await BasicUser.findOne({ email: user })) {
		current = await BasicUser.findOne({ email: user })
		title = 'basicUser'
	}

	// console.log('from login**********************************************%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
	// console.log(current)
	// console.log(title)
	// console.log('from login**********************************************%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

	
	if (current !== {} && await bcrypt.compare(pwd, current.password)) {

		const payload = {                   // @yuchen 没有全部数据的token
			user: {
				id: user,                    // @yuchen 你这名字起的有歧义了
				title: title,
				pwd                          // @yuchen 为了自己看，记得删除
			}
		}
		

		jwt.sign(payload, config.get('jwtSecret'), {
			expiresIn: 3600 * 24 * 30
		}, (err, token) => {
			if (err) throw err
			res.json({ token, _isAuthenticated: 'authenticated', _user: current.email, _title: title })
		})
	} else {
		res.json({ _isAuthenticated: 'unauthenticated' })
	}
})

router.post('/create_am', (req, res) => {
	const { email, pwd } = req.body
	amRegister(pwd, email)

	res.send('done')	
})

router.post('/getdata', (req,res) => {
	const { title } = req.body
	//var result = [{}]  // @yuchen
	AmUser.find({}, (err, user) => {
		var result = []
		user.forEach((u) => {
			console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
			console.log(result)
			console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
			var data = {}
			data = {...data, 'name': u.email, 'date': '19 Aug, 2020', 'shipTo': 'Tempe, AZ', 'belongs': 'yuchen ge'}
			result = [...result, data]
		})
		res.json({result})
	})

	// result.forEach(o => {
	// 	console.log(o)
	// })



	// res.send('yyyyyyyyyyyyyy')
})


module.exports = router