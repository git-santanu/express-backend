const Joi = require("joi");

const registerValidation = Joi.object({
  payload: {
    email: Joi.string().required().label('email'),
    password: Joi.string().required().min(4).label('password'),
    name: Joi.string().required().label('name')
  }
})
const validateRegistrationBody = (schema) => (req, res, next) => {
  const { error } = schema.validate({ payload: req.body });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
module.exports = {
  registerValidation,
  validateRegistrationBody
}