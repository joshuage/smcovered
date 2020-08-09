const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config')
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const AdminUser = require('../models/AdminUser');
const BasicUser = require('../models/BasicUser');

// @route     Post api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
  '/',
  [
    check('email', '请输入正确的邮箱！').isEmail(),
    check('password', '请输入密码！').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
      let user = await BasicUser.findOne({ email });

      if(!user) {
        return res.status(400).json({ errors:[{ msg: '您输入的邮箱或密码不正确！' }]});
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if(!isMatch) {
        return res.status(400).json({ errors:[{ msg: '您输入的邮箱或密码不正确！' }]})
      }

      const payload = {
        user: {
          id: user.id
        }
      }
      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 3600*24*30
      }, (err, token) => {
        if(err) throw err;
        res.json({ token });
      });

    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error')
    }
});

module.exports = router;