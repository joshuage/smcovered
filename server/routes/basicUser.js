const express = require('express')
const router = express.Router()

// const bcrypt = require('bcryptjs')
// const User = require('../models/AmUser')

// const ambassRegister = async (pwd, email, college) => {                           // @yuchen 这里还要改哦 college 
// 		const user = new User({
// 			email,
// 			password: pwd,
// 			college: '5f2f7a09a5dc8a9d6f158996',
// 			college,
// 			area: 'Western',
// 			status: true,
// 		})

// 		const salt = await bcrypt.genSalt(10)
// 		user.password = await bcrypt.hash(pwd, salt)

// 		await user.save()
// 		setTimeout(()=>console.log('what?'), 10000)
// 		console.log('sign up by admin********************************************************')
	
// }





// router.post('/', (req, res) => {
// 	console.log('8*************************************************')
// 	//console.log(req.body.email)        // @yuchen 这块得看看header
// 	const { email, pwd } = req.body
// 	const college = 'ASU'
// 	ambassRegister(pwd, email, college)
// 	res.send('nothing went wrong')       // @yuchen 下一步要send ** 组成token
// })

module.exports = router