// @yuchen 解token的地方

const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
  // Get token from header
	const token = req.header('x-auth-token')                        // @yuchen
	console.log('from backend *****************************************************')
  // Check if not token
  if(!token) {
		return res.json({meg: 'No token, authorization denied'})      // @yuchen 我觉得这样的逻辑稍好一点
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user.id;
    req.title = decoded.user.title;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}