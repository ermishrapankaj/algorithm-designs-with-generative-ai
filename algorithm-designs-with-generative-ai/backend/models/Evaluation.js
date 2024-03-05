const mongoose = require('../db');

const evaluationSchema = new mongoose.Schema({
    algorithm: { type: mongoose.Schema.Types.ObjectId, ref: 'Algorithm', required: true }, // INPUT_REQUIRED {Update the ref if Algorithm model has a different name}
    performanceMetrics: { type: Map, of: Number, required: true },
    evaluatedAt: { type: Date, default: Date.now }
});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);

module.exports = Evaluation;