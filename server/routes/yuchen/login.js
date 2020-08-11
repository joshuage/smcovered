const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

router.get('/', (req, res) => {
	try {
		console.log(req)
		res.json({"key": 'everything is fine'})
		res.send('server runs')
	} catch (err) {
		console.log(err.message)
		res.send('something went wrong')
	}
})

module.exports = router