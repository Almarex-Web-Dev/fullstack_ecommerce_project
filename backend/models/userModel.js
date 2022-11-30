const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxLength: 30,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
    },
    password: {
      type: String,
      required: true,
      min: [6, 'Password is too short'],
      max: 16,
      select: false,
    },
  },
  { timestamps: true },
)

userSchema.methods.createToken = function () {
  return jwt.sign({ userId: this._id, email: this.email }, process.env.SECRET, {
    expiresIn: '3d',
  })
}


// userSchema.methods.comparePasswordFunction = async function (passwordToCompare) {
//   const isMatch = await bcrypt.compare(passwordToCompare, this.password)
//   return isMatch
// }
const userModel = mongoose.model('User', userSchema)
userModel.watch().on('change', (data) => console.log(new Date(), data))

module.exports = userModel

// const breakfastSchema = new Schema({
//   eggs: {
//     type: Number,
//     min: [6, 'Too few eggs'],
//     max: 12,
//   },
//   bacon: {
//     type: Number,
//     required: [true, 'Why no bacon?'],
//   },
//   drink: {
//     type: String,
//     enum: ['Coffee', 'Tea'],
//     required: function () {
//       return this.bacon > 3
//     },
//   },
// })

// const Breakfast = db.model('Breakfast', breakfastSchema)

// const badBreakfast = new Breakfast({
//   eggs: 2,
//   bacon: 0,
//   drink: 'Milk',
// })

// let error = badBreakfast.validateSync()
// assert.equal(error.errors['eggs'].message, 'Too few eggs')
// assert.ok(!error.errors['bacon'])
// assert.equal(
//   error.errors['drink'].message,
//   '`Milk` is not a valid enum value for path `drink`.',
// )

// badBreakfast.bacon = 5
// badBreakfast.drink = null

// error = badBreakfast.validateSync()
// assert.equal(error.errors['drink'].message, 'Path `drink` is required.')

// badBreakfast.bacon = null
// error = badBreakfast.validateSync()
// assert.equal(error.errors['bacon'].message, 'Why no bacon?')
