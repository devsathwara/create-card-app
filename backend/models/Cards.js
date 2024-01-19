const mongoose = require('mongoose');
const { Schema } = require('zod');

const cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    interest: { type: Object, required: true },
    socials:{ type: Object, required: true },
    uid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: "" }
});

module.exports = mongoose.model("Card", cardSchema);
