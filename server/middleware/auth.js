// @yuchen 解token的地方

const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
  // Get token from header
	const token = req.header('x-auth-token')                        // @yuchen
	console.log('from middleware Auth*****************************************************')
	console.log(token)
	//console.log(token)
  // Check if not token
  if(!token || token == 'unAuthorized') {
		return res.json({meg: 'No token, authorization denied'})      // @yuchen 我觉得这样的逻辑稍好一点
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'))   // @yuchen 存在问题，如果是随意设置的token

    req.user = decoded.user.id
		req.title = decoded.user.title
		req.pwd = decoded.user.pwd
		console.log('***********************************')
		console.log(decoded)
		console.log(req.user)
		console.log(req.title)

		console.log('***********************************')
    next()
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' })
  }
}