const card = require('../controller/cardController');
const express = require('express');
const { authCheck } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/insertCard',authCheck,card.insert);
router.get('/selectCard',authCheck,card.select);

module.exports=router;