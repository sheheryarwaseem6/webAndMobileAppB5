import express from 'express'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { client } from './dbConfig.js';


client.connect();
console.log("You successfully connected to MongoDB!");

const app = express()
const port = process.env.PORT || 3001
app.use(express.json());



// app.use(authRoutes) 

app.use((req, res, next) => {
  const token = 'hgj'
  if (token === 'valid') {
    next()
  } else {
    res.send('token invalid')
  }
})


app.use(userRoutes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${ port }`)
})










