// get all products controller
const productModel = require('../models/productModel')

const getProducts = async (req, res) => {
  const { category, featured, name } = req.query
  const queryObject = {}

  if (category) {
    queryObject.category = category == 'true' ? true : false
  }
  //
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  const products = await productModel.find(queryObject)
  if (!queryObject) {
    res
      .status(404)
      .json({ success: false, message: 'Unable to fetch your products' })
  }
  res
    .status(200)
    .json({ success: true, data: products, nbHitss: products.length })
}

// get single product controller
const getSingleProducts = (req, res) => {
  res.status(200).json({ success: true, message: 'Get single all products' })
}

module.exports = {
  getProducts,
  getSingleProducts,
}

// // post new product controller
// const postProducts = (req, res) => {
//   res.status(200).json({ success: true, message: 'post all products' })
// }

// // update  product controller
// const updateProducts = (req, res) => {
//   res.status(200).json({ success: true, message: 'update all products' })
// }
// // delelte product controller
// const deleteProducts = (req, res) => {
//   res.status(200).json({ success: true, message: 'delete all products' })
// }
