const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product's name"],
    },
    price: {
      type: Number,
      required: [true, `What's the price ?`],
    },
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      default: 1,
    },
    discount: {
      type: Number,
      default: 50,
    },
    ratings: {
      type: Number,
      default: 4.0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    thumbnails: {
      thumnail_1: String,
      thumnail_2: String,
      thumnail_3: String,
      thumnail_4: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    company_name: {
      type: String,
    },
  },
  { timestamps: true },
)

const productModel = mongoose.model('Product', productSchema)
productModel
  .watch()
  .on('change', (data) =>
    console.log(new Date().now(), `New data added to the db ${data}`),
  )

module.exports = productModel
