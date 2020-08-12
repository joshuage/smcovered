const express = require('express')
const router = express.Router()

// @yuchen token三剑客
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')

const User = require('../models/AdminUser')

const adminRegister = async (pwd, email) => {                           // @yuchen 这里还要改哦 college 
		const user = new User({
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





router.post('/', (req, res) => {
	console.log('yuchen*************************************************')
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
			expiresIn: 3600*24*30
		}, (err, token) => {
			if(err) throw err
			res.json({ token, title: 'adminUser' })       
		})} catch (err) {
			console.log(err)
			res.send('something is wrong with creating an amUser, try search in console')
		}
})

module.exports = router