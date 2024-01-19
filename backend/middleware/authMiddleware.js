const jwt = require("jsonwebtoken");
const { validateJWTToken } = require("../utils/utils");
exports.authCheck = async (req, res,next) => {
  let token = req.cookies.authToken;
  if (!token)
    return res.status(401).send({ auth: false, message: "No Token Provided." });
  let decoded = validateJWTToken(token);
  if (decoded.exp <= Date.now() / 1000) {
    return res.status(401).send({ auth: false, message: "Token has expired" });
  }
  else{
    next();
  }
};
