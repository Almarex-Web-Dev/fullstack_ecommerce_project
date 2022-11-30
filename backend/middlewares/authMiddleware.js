const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const requestHeaderAuth = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization || !authorization.startsWith('Bearer')) {
    res
      .status(401)
      .json({ success: false, message: 'Authorization token required' })
  }
  const bearerToken = authorization.split(' ')[1]
  try {
    const user = jwt.verify(bearerToken, process.env.SECRET)
    if (!user) {
      res.status(404).json({ success: false, message: 'User does not exist' })
    }
    const { _id, username } = await userModel.find(user)
    req.user = { _id, username }
    next()
  } catch (error) {
    throw new Error(error)
  }
}

module.export = requestHeaderAuth
