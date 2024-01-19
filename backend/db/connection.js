const mongoose = require('mongoose');
const config = require('../config/config');
mongoose.connect(config.app.env.DB_URL,).then(()=>{
    console.log("Connected to the database");
})