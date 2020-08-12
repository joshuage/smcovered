const express = require('express');
const app = express();
const connectDB = require('../config/db')

// Connect Database
connectDB();

// Init Middleware
// @yuchen

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,x-auth-token');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS')
	next();
	});
	

app.use(express.json({ extended: false }))

// app.get('/', (req,res) =>
//   res.json({ msg: 'Welcome!' })
// );

// Define Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/basicuser', require('./routes/basicUser'))
app.use('/api/amuser', require('./routes/amUser'))
app.use('/api/adminuser', require('./routes/adminUser'))
app.use('/yuchen/api', require('./routes/yuchen'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// // Admin register
// const bcrypt = require('bcryptjs');
// const User = require('./models/AdminUser');

// const adminRegister = async() => {
//   const password = 'test123123';

//   const user = new User({
//     email: 'mingkunm@usc.edu',
//     password,
//     status: true
//   });

//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(password, salt);

//   await user.save();

//   console.log('Admin register success!');
// }
// adminRegister();




// Admin register @yuchen
// const bcrypt = require('bcryptjs');
// const User = require('./models/AdminUser');

// const adminRegister = async() => {
//   const password = 'abc12345678';

//   const user = new User({
//     email: 'j0909089342@gmail.com',
//     password,
//     status: true
//   });

//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(password, salt);

//   await user.save();

//   console.log('********************************************************');
// }
// adminRegister();




// basic user register
// const bcrypt = require('bcryptjs');
// const User = require('./models/BasicUser');
// const College = require('./models/College');

// const basicRegister = async() => {
//   const college = await College.findById('5f2f7a09a5dc8a9d6f158996');
//   const collegeDisplay = college.name;
//   const password = 'test123123';

  // const user = new User({
  //   email: 'mmk.ee.911@gmail.com',
  //   password,
  //   college: '5f2f7a09a5dc8a9d6f158996',
  //   collegeDisplay,
  //   area: 'Western',
  //   status: true
  // });
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(password, salt);

//   await user.save();
//   console.log('Basic register success!');
// }
// basicRegister();





// AM user register
// const bcrypt = require('bcryptjs');
// const User = require('./models/AmUser');

// const amRegister = async() => {
//   const password = 'test123123';

//   const user = new User({
//     email: 'mmk.ee.911@gmail.com',
//     password,

//     status: true
//   });

//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(password, salt);

//   await user.save();

//   console.log('Admin register success!');
// }

// amRegister();







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




// const fs = require('fs')
// const db = './Data/GroupContact.json';
// const Wechat = require('./models/WeChat')
// const College = require('./models/College');
// const groupName = '(10)USC&SM保险答疑群'

// fs.readFile(db, 'utf8', async (err, data) => {
//   const time1 = new Date();

//   if (err) {
//     console.log(err);
//   }
//   try {
//     var count = 0;
//     const jsonData = JSON.parse(data);
//     const college = await College.findById('5f2f7a09a5dc8a9d6f158996');
//     const collegeDisplay = college.name;

//     jsonData.forEach(async jd => {
//       if (jd.nickname === groupName) {
//         jd.m_nsChatRoomMemList.split(';').forEach(async id => {

//           const wechat = new Wechat({
//             wechatId: id,
//             groupName,
//             college: '5f2f7a09a5dc8a9d6f158996',
//             collegeDisplay,
//             initalData: true
//           })

//           await wechat.save()
//           count = count + 1;
//         })
//       }
//     });

//     const time2 = new Date();
//     let totalTime = time2.getTime() - time1.getTime();
//     totalTime = totalTime/1000;

//     console.log(`录入 ${count} 条数据， 共耗时 ${totalTime} 秒`);
//   } catch (error) {
//     console.log(error);
//   }
// })
