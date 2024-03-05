const mongoose = require('../db');

const dataSourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    content: { type: mongoose.Schema.Types.Mixed, required: true },
    description: String,
    createdAt: { type: Date, default: Date.now }
});

const DataSource = mongoose.model('DataSource', dataSourceSchema);

module.exports = DataSource;