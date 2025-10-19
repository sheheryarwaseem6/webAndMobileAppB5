import express from 'express'
import { client } from '../dbConfig.js';
import { ObjectId } from 'mongodb';
const router = express.Router()
const myDB = client.db("olxClone");
const Products = myDB.collection("products");
const Favourites = myDB.collection("favourites");
import jwt from 'jsonwebtoken';
import {upload} from '../middlewares/multer.js';
import cloudinary from '../middlewares/cloudinary.js'


router.post('/user/product', upload.single('productImage'), async (req, res) => {
  let decoded = jwt.verify(req.cookies.token, process.env.SECRET);
  console.log(decoded)
  let imageUrl = null;
  if(req.file){
    imageUrl = await cloudinary.uploader.upload(req.file.path, {
      folder: "products",
    });
  }
  const product = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    productImage : imageUrl?.secure_url,
    postedBy: decoded._id,
    status: true,
    deletedAt: null,
    isDeleted: false,
    productType: req.body.productType,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }

  const response = await Products.insertOne(product)
  if (response) {
    return res.send("product added successfully")
  }
  else {
    return res.send("something went wrong")
  }
})

router.get('/user/products', async (req, res) => {
  const {page, limit} = req.query
  const skip = (parseInt(page) - 1) * parseInt(limit)
  const totalProducts = await Products.countDocuments({ status: true, isDeleted: false, deletedAt: null})
  const totalPages = Math.ceil(totalProducts / parseInt(limit))
  const allProducts = Products.find({ status: true, isDeleted: false, deletedAt: null }).skip(skip).limit(parseInt(limit))
  const response = await allProducts.toArray()
  console.log(response)
  if (response.length > 0) {
    return res.status(200).send({
      data: response,
      totalPages: totalPages,
      currentPage: page,
      totalProducts: totalProducts
    })

  } else {

    return res.status(404).send({
      message: 'No products found'
    })
  }
})
router.get('/user/myProducts', async (req, res) => {
  let decoded = jwt.verify(req.cookies.token, process.env.SECRET);
  const allProducts = Products.find({ postedBy: decoded._id, isDeleted: false, deletedAt: null })
  const response = await allProducts.toArray()
  console.log(response)
  if (response.length > 0) {
    return res.send(response)

  } else {

    return res.send('No products found')
  }
})

router.post('/user/product/:id', async (req, res) => {
  try {
    const productId = new ObjectId(req.params.id)
    let decoded = jwt.verify(req.cookies.token, process.env.SECRET);
    const product = await Products.findOne({ _id: productId, postedBy: decoded._id });
    if (!product) {
      return res.status(404).send({
        status: 0,
        message: "Product not found"
      })
    }
    const deleteProduct = await Products.updateOne({ _id: productId, postedBy: decoded._id }, { $set: { isDeleted: true, deletedAt: Date.now() } }, {})
    return res.status(200).send({
      status: 1,
      message: "Product Deleted"
    })
  } catch (error) {
    return res.status(500).send({
      status: 0,
      error: error,
      message: "internal server error"
    })
  }
})

router.put('/user/product/:id', async (req, res) => {
  // const query = {id : new ObjectId(req.params.id)}
  // const update = { title: req.body.title, description: req.body.description }
  const result = await Products.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { title: req.body.title, description: req.body.description } },
    {}
  )

  if (result) {
    return res.send("product updated successfully")
  } else {
    return res.send("something went wrong")
  }
})

router.get('/user/product/:id', async (req, res) => {
  const product = await Products.findOne({ _id: new ObjectId(req.params.id), status: true, isDeleted: false, deletedAt: null })
  if (product) {
    return res.send(product)
  } else {
    return res.send('product not found')
  }
})

router.post('/user/favourite/:productId', async (req, res) => {
  try {
    let decoded = jwt.verify(req.cookies.token, process.env.SECRET);
    let product = await Products.findOne({ _id: new ObjectId(req.params.productId), status: true, isDeleted: false, deletedAt: null })
    if (!product) {
      return res.status(404).send({
        status: 0,
        message: "product not found"
      })
    }
    let favourite = await Favourites.insertOne({
      userId: decoded._id,
      productId: req.params.productId
    })
    return res.status(200).send({
      status: 1,
      message: "added to favourite"
    })
  } catch (error) {
    return res.status(500).send({
      status: 0,
      error: error,
      message: "Internal Server Error"
    })
  }

})

router.get('/user/cart/:userId', (request, res) => {
  res.send('this is user cart')
})

router.post('/user/checkout/:cartId', (request, res) => {
  res.send('order placed succesfully')
})

router.post('/uploadFile', upload.single('productPhoto'), async (req, res) =>{
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  console.log(req.file, req.body)
      const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "products",
    });
    console.log(result)
  return res.status(200).send({
    file : req.file,
    body:  req.body,
    result : result
  })
});


export default router;