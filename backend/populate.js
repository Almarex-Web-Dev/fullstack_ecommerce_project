require('dotenv').config()

const connectDB = require('./db/connect')
const productModel = require('./models/productModel')
const jsonProducts = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await productModel.deleteMany()
    await productModel.create(jsonProducts)
    console.log('Products is successfully added to the database')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
