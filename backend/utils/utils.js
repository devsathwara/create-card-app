 const jwt=require('jsonwebtoken');
const config = require('../config/config');
exports.createJWTToken=(data, expiresIn)=> {
    console.log("first")
    if (!config.app.env.secret) {
      throw new Error("JWT Secret is not defined");
    }
  
    return jwt.sign(data,config.app.env.secret, { expiresIn: expiresIn });
  }
  
exports.validateJWTToken=(token)=> {
    if (!config.app.env.secret) {
      throw new Error("JWT Secret is not defined");
    }
  
    try {
      const decoded = jwt.verify(token, config.app.env.secret);
      return decoded;
    } catch (err) {
      console.log(err);
    }
  }
