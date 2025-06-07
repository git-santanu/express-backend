const express = require('express')
const { AuthController } = require('../controllers')
const { validateRegistrationBody, registerValidation } = require('../validations/auth-validation/registrationValidation')
const Router = express.Router()

// register
Router.post('/register', validateRegistrationBody(registerValidation), AuthController.UserSignUp)
// login
Router.post('/login', AuthController.UserLogin)
module.exports = Router