import express from 'express'
import { client } from '../dbConfig.js';
import { ObjectId } from 'mongodb';
const router = express.Router()
const myDB = client.db("myEcommerce");
const Products = myDB.collection("products");

router.post('/user/product', async (req, res) => {
  const product = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    createdAt: Date.now()
  }

  const response = await Products.insertOne(product)
  if (response) {
    return res.send({
      data : product,
      message: "product added succesfully"
    })
  }
  else {
    return res.send("something went wrong")
  }
})

router.get('/user/products', async (req, res) => {
  const allProducts = Products.find()
  const response = await allProducts.toArray()
  console.log(response)
  if (response.length > 0) {
    return res.send(response)

  } else {

    return res.send('No products found')
  }
})

router.delete('/user/product/:id', async (req, res) => {
  const productId = new ObjectId(req.params.id)

  const deleteProduct = await Products.deleteOne({ _id: productId })
  if (deleteProduct) {
    return res.send("product deleted")
  } else {
    return res.send("something went wrong")
  }
})

router.put('/user/product/:id', async (req, res) => {
  // const query = {id : new ObjectId(req.params.id)}
  // const update = { title: req.body.title, description: req.body.description }
  const result = await Products.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: {title: req.body.title, description: req.body.description} },
    {}
  )

  if(result){
    return res.send("product updated successfully")
  }else{
    return res.send("something went wrong")
  }
})

router.get('/user/product/:id', async (req, res) => {
  const product = await Products.findOne({_id : new ObjectId(req.params.id)})
  if(product){
    return res.send(product)
  }else{
    return res.send('product not found')
  }
})

router.post('/user/cart/:productId/:userId', (request, res) => {
  if (cart) {
    res.send('removed cart')
  } else {
    res.send('added to cart')
  }
})

router.get('/user/cart/:userId', (request, res) => {
  res.send('this is user cart')
})

router.post('/user/checkout/:cartId', (request, res) => {
  res.send('order placed succesfully')
})

export default router;