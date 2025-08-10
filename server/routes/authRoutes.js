import express from 'express'
import bcrypt from 'bcryptjs'
const router = express.Router()
import { client } from '../dbConfig.js';
const myDB = client.db("myEcommerce");
const Users = myDB.collection("users");

router.post('/register', async (req, res) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.email || !req.body.password) {
    res.send('please fill out complete form')
  } else {
    let email = req.body.email.toLowerCase()
    const emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (email.match(emailFormat) && req.body.password.match(passwordValidation)) {
      const checkUser = await Users.findOne({ email: email })
      if (checkUser) {
        return res.send('Email already exist')
      } else {
        const hashedPassword = await bcrypt.hashSync(req.body.password)
        const user = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: email,
          password: hashedPassword,
          phone: req.body.phone,
        }

        const response = await Users.insertOne(user)
        return res.send('user registered successfully')
      }
    } else {
      return res.send("invalid email or password")
    }
  }
})

router.post('/login', (request, res) => {
  console.log(request.body)
  if (request.body.email && request.body.password) {
    const checkUser = users.find(user => user.email === request.body.email && user.password === request.body.password)
    console.log(checkUser, 'checkUser')
    if (checkUser) {
      res.send('login successful')
    } else {
      res.send('login failed')
    }
  } else {
    res.send('login failed')
  }
})


export default router;