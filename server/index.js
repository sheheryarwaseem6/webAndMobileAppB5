import express from 'express'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://dbuser:admin@cluster0.no9iv95.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();
console.log("You successfully connected to MongoDB!");

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());



app.use(authRoutes) 

app.use((req, res) => {
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










