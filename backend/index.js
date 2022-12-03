require('dotenv').config()
const express = require('express')
const authRoutes = require('./routes/authRoutes')
const productsRoutes = require('./routes/productsRoute')
const requestHeaderAuth = require('./middlewares/authMiddleware')

// import connectDB from db folder
const connectDB = require('./db/connect')

const app = express()
app.use(express.json())
app.use('/api/user', authRoutes)
app.use('/api/v1/products', productsRoutes)

const PORT = 8000 || process.env.PORT

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(
        `successfully connected to the db and server is listening on port ${PORT}`,
      )
    })
    process.on('unhandledRejection', (err, promise) => {
      console.log(`${err}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()