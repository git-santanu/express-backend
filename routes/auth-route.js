const express = require('express')
const { AuthController } = require('../controllers')
const Router = express.Router()

// register
    Router.post('/register', AuthController.UserSignUp)
    // login
    Router.post('/login', AuthController.UserLogin)
    module.exports = Router