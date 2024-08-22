const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const testRoutes = require('./routes/test-routes');

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(cors());

mongoose
	.connect(
		'mongodb+srv://guryanova:4a1uVD9yc4JyuYok@cluster.voydg.mongodb.net/quiz?retryWrites=true&w=majority&appName=Cluster',
	)
	.then(() => {
		app.use('/api', testRoutes);

		app.listen(PORT, () => {
			console.log('Server is running on port 5000');
		});
	});
