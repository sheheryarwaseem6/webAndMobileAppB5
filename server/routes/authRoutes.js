import express from 'express'
const router = express.Router()

router.post('/register', (req, res) => {
  if (!req.body.email && !req.body.password) {
    res.send('email and password are required')
  } else {
    users.push({ email: req.body.email, password: req.body.password })
    res.send('user registered successfully')
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