const dotenv = require("dotenv");
dotenv.config();

const config = {
  app: {
    env: {
      NODE_ENV: process.env.NODE_ENV || "development",
      PORT: process.env.PORT || 3001,
      DB_URL: process.env.DB_URL || "",
      secret: process.env.SECRET || "defaultSecret",
      expiresIn: process.env.EXPIREIN || "1d",
      cookieExpiration: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  },
};
module.exports = config;
