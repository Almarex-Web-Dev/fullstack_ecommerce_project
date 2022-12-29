const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'please provide your email or password',
    })
  }
  const user = await userModel.findOne({ email })
  if (!user) {
    res.status(404).json({ success: false, message: 'user does not exist' })
  }

  const userPassword = bcrypt.compare(password, user.password)
  if (!userPassword) {
    res.status(400).json({ error: 'Incorrect password' })
  }
  const token = await user.createToken()
  res.status(200).json({
    success: true,
    username: user.email,
    token,
    message: 'successfully loggedIn',
  })
}

// register functionality

const register = async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    res.status(400).json({ messagae: 'Please fill in all the required fields' })
  }

  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await userModel.create({ username, email, password: hash })
    const token = user.createToken()
    // jwt.sign({ user: user._id }, process.env.SECRET, {
    //   expiresIn: '3d',
    // })
    user.save((err, founder) => {
      if (err) return
      else {
        res
          .status(200)
          .json({ user: token, message: 'user successfully created' })
      }
    })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  login,
  register,
}
