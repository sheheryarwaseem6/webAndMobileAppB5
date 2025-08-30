import express from 'express'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import { client } from './dbConfig.js';
import cookieParser  from 'cookie-parser'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();
client.connect();
console.log("You successfully connected to MongoDB!");

const app = express()
const port = process.env.PORT || 3002
app.use(express.json());
app.use(cookieParser())



app.use(authRoutes) 

app.use((req, res, next) => {
  try{
    let decoded = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
    next()
  }catch(error){
    return res.send({
      status : 0,
      error : error,
      message : "Invalid Token"
    })
  }
  
})


app.use(productRoutes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${ port }`)
})