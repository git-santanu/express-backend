const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/users')
const { AuthController } = require('../controllers')
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_here'
const Router = express.Router()

// register
    Router.post('/register', AuthController.UserSignUp)
    // login
    Router.post('/login', AuthController.UserLogin)
    module.exports = Router