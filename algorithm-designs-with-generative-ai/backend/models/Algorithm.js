const mongoose = require('../db');

const algorithmSchema = new mongoose.Schema({
    name: { type: String, required: true },
    version: { type: String, required: true },
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // INPUT_REQUIRED {Update the ref if User model has a different name}
    code: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

module.exports = Algorithm;