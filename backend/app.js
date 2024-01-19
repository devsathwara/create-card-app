const express = require("express");
const config = require("./config/config");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const dbCon = require("./db/connection");
const userRoutes = require("./routes/userRoutes");
const cardRoutes = require("./routes/cardRoutes");
app.use(express.json());
app.use(
  cors({
    origin: " http://localhost:5173/",
  })
);
app.use(cookieParser());
app.use("/user", userRoutes);
app.use("/card", cardRoutes);

app.listen(config.app.env.PORT, () => {
  console.log(`Server is running on port ${config.app.env.PORT}`);
});
