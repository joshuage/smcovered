const express = require('express');
const app = express();
const connectDB = require('../config/db')

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

// app.get('/', (req,res) =>
//   res.json({ msg: 'Welcome!' })
// );

// Define Routes
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/basicuser', require('./routes/basicUser'));
// app.use('/api/adminuser', require('./routes/adminUser'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// // Admin register
// const bcrypt = require('bcryptjs');
// const User = require('./models/User');

// const adminRegister = async() => {
//   const password = 'smtop123!!#qqq';

//   const user = new User({
//     email: 'smcoverdmanagementsystem@gmail.com',
//     password,
//     title: 'admin',
//     status: true
//   });

//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(password, salt);

//   await user.save();

//   console.log('Admin register success!');
// }

// adminRegister();


// Register University
// const College = require('./models/College');
// const collegeRegister = async() => {
//   // const name = 'University of Southern California';
//   const name = 'University of California, Riverside';
//   const area = 'Western';

//   const co = new College({
//     name,
//     area,
//     availability: true
//   });

//   await co.save();

//   console.log(`${name} Register Success!`);
// }
// collegeRegister();

// const w = new WeChat({
//   wechatId: '',
//   groupName: ''
// })

// await WeChat.save()
