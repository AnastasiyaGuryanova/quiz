const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
	text: String,
	isCorrect: Boolean,
});

const questionSchema = new mongoose.Schema({
	text: String,
	answers: [answerSchema],
});

const testSchema = new mongoose.Schema({
	questions: [questionSchema],
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
