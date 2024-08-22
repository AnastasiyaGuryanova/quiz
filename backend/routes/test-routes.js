const express = require('express');
const Test = require('../models/test');

const router = express.Router();

router.get('/test', async (req, res) => {
	const test = await Test.findOne();

	res.json(test);
});

router.post('/test', async (req, res) => {
	let test = await Test.findOne();

	if (test) {
		test.questions = req.body.questions;
	} else {
		test = new Test(req.body);
	}

	await test.save();
	res.json(test);
});

module.exports = router;
