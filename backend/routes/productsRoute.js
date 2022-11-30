const express = require('express')
const router = express.Router()

const {
  getProducts,
  getSingleProducts,
} = require('../controller/productController')

router.route('/').get(getProducts)
router.route('/:id').get(getSingleProducts)

module.exports = router
