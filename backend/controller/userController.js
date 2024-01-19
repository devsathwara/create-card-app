const User = require("../models/User");
const signinValidation = require("../validation/validation");
const utils = require("../utils/utils");
const config = require("../config/config");
const jwt = require('jsonwebtoken')
exports.register = async (req, res) => {
  try {
    let { email, password } = signinValidation.parse(req.body);
    let { name } = req.body;
    let userFind = await User.findOne({ email: email });
    if (!userFind) {
      let user = new User({
        name: name,
        email: email,
        password: password,
      });
      await user.save();
      return res.status(201).json({ message: "User registered" });
    } else {
      return res.json({ message: "ALready register Please login" });
    }
  } catch (error) {
    console.error(error);
  }
};
exports.login = async (req, res) => {
  try {
    let user = await User.findOne(signinValidation.parse(req.body));
    if (!user) {
      return res
        .status(401)
        .send({ auth: false, message: "Invalid email or password." });
    } else {
      const token = jwt.sign({ email: user.email }, config.app.env.secret, {
        expiresIn: "24h",
      });
      res.cookie("authToken", token, { httpOnly: true , expires:config.app.env.cookieExpiration})
      res.cookie("uid", user.id, { httpOnly: true , expires:config.app.env.cookieExpiration})
      return res
        .status(200)
        .json({ auth: true, message: "Logged in successfully.", token: token });
    }
  } catch (error) {}
};
