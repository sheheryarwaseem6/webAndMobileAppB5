import express from 'express'
const app = express()
const port = process.env.PORT || 3000
app.use(express.json());

let users = []
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/my-profile', (req, res) => {
  res.send('Hello from my profile')
})

app.get('/weather/:cityName/:countryName', (request, res) => {
  res.send(`Hello from ${request.params.cityName} ${request.params.countryName} ${request?.query?.unit ? request.query.unit : 'centigrade'}`)
})

app.post('/login', (request, res) => {
  console.log(request.body)
  if(request.body.email && request.body.password ) {
    const checkUser = users.find(user => user.email === request.body.email && user.password === request.body.password)
    console.log(checkUser, 'checkUser')
    if(checkUser) {
      res.send('login successful')
    } else {
      res.send('login failed')
    }
  } else {
    res.send('login failed')
  }
})

app.post('/register', (req, res) => {
  if(!req.body.email && !req.body.password) {
    res.send('email and password are required')
  } else {
    users.push({email: req.body.email, password: req.body.password})
    res.send('user registered successfully')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})










