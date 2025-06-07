const User = require("../../models/users");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;

const UserSignUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const checkUserExistAlreadyOrNot = await User.findOne({
      where: {
        email: email,
      },
      attributes: ["id"],
      raw: true,
    });
    if (checkUserExistAlreadyOrNot) {
      return res.status(401).json({ error: "User already exist!" });
    }
    const user = await User.create({ name, email, password: hashedPassword });
    const response = {
      id: user.id,
      name: user.name,
      email: user.email
    }
    res.json({ message: "User registered", response });
  } catch (error) {
    console.log("something went wrong", error);
  }
};

const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({
      where: {
        email: email,
      },
      attributes: ["id", "email", "password"],
      raw: true,
    });
    if (!isUserExist)
      return res.status(400).json({ error: "Invalid credential!" });
    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!isPasswordMatch)
      return res.status(400).json({ error: "Invalid credential!" });
    const token = jwt.sign(
      { id: isUserExist.id, email: isUserExist.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Login Successfully", token });
  } catch (error) {
    console.log("something went wrong", error);
  }
};

module.exports = {
  UserSignUp,
  UserLogin,
};
