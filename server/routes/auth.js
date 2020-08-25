const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const AdminUser = require('../models/AdminUser')
const AmUser = require('../models/AmUser')
const BasicUser = require('../models/BasicUser')

// @route     Get api/auth
// @desc      Get logged in user
// @access    Private
router.get('/',auth, async (req, res) => {                 // @yuchen这块得改，不能作为谁都能用得方法? 这个方法有啥用，也没对比pwd
  try {
		// console.log(req)
		const title = req.title
		
		console.log(req.title)


    let user;
    if (title == 'basic') {
      user = await BasicUser.findById(req.user).select('-password');
    } else if (title == 'am') {
      user = await AmUser.findById(req.user).select('-password');
    } else if (title == 'admin') {
      user = await AdminUser.findById(req.user).select('-password');
    }
    res.json({ user, title })                        //@ yuchen get到数据返回查询对象，其实没啥用，做一哥redirect就行了
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
})

// @route     Post api/auth/login
// @desc      Auth user & get token
// @access    Public
router.post(
  '/login',
  [
    check('email', '请输入正确的邮箱！').isEmail(),
    check('password', '请输入密码！').exists()
  ],
  async (req, res) => {
		console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
      let title = '';
      if (await BasicUser.findOne({ email })) {
        user = await BasicUser.findOne({ email });
        title = 'basic';
      } else if (await AmUser.findOne({ email })) {
        user = await AmUser.findOne({ email });
        title = 'am';
      } else if (await AdminUser.findOne({ email })) {
        user = await AdminUser.findOne({ email });
        title = 'admin';
      }

      if (!user) {
        return res.status(400).json({ errors:[{ msg: '您输入的邮箱或密码不正确！' }]});
      }

      if (!user.status) {
        return res.status(400).json({ errors:[{ msg: '该账号已被冻结！请联系管理员。 '}]})
      }

      const isMatch = await bcrypt.compare(password, user.password)      // @yuchen 做一步密码对比

      if(!isMatch) {
        return res.status(400).json({ errors:[{ msg: '您输入的邮箱或密码不正确！' }]})
      }

      const payload = {
        user: {
          id: user.id,
          title
        }
      }
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 3600*24*30
      }, (err, token) => {
        if(err) throw err;
        res.json({ token, title });         // @yuchen返回前端后要localStorage.setItem就完事了
      });

    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error')
    }
})

module.exports = router