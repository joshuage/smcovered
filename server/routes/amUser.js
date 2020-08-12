// @yuchen

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')

const User = require('../models/AmUser')

const ambassRegister = async (pwd, email, college) => {                           // @yuchen 这里还要改哦 college 
		const user = new User({
			email,
			password: pwd,
			college: '5f2f7a09a5dc8a9d6f158996',
			college,
			area: 'Western',
			status: true,
		})

		const salt = await bcrypt.genSalt(10)
		user.password = await bcrypt.hash(pwd, salt)

		await user.save()
		setTimeout(()=>console.log('amUser'), 10000)
		console.log('sign up by admin********************************************************')
	
}





router.post('/', (req, res) => {
	console.log('8*************************************************')
	//console.log(req.body.email)        // @yuchen 这块得看看header
	const { email, pwd } = req.body
	const college = 'ASU'
	ambassRegister(pwd, email, college)

	try {
	const payload = {                   // @yuchen 没有全部数据的token
		user: {
			id: email,                    // @yuchen 你这名字起的有歧义了
			title: 'amUser',
			pwd
		}
	}

	jwt.sign(payload, config.get('jwtSecret'), {
		expiresIn: 3600*24*30
	}, (err, token) => {
		if(err) throw err
		res.json({ token, title: 'amUser' })        // @yuchen返回前端后要localStorage.setItem就完事了
	})} catch (err) {
		console.log(err)
		res.send('something is wrong with creating an amUser, try search in console')
	}


})

module.exports = router