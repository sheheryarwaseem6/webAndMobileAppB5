import express from 'express'
const router = express.Router()

router.get('/user/products', (req, res) => {
  res.send('user products')
})

router.get('/user/product/:id', (req, res) => {
  res.send('this productt detail')
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

router.post('/user/checkout/:cartId',(request, res) => {
  res.send('order placed succesfully')
})

export default router;