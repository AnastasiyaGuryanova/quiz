import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import testRoutes from './routes/test-routes';
import dotenv from 'dotenv';

dotenv.config();

const PORT: number = 5000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
	.connect(process.env.MONGODB_URI as string)
	.then(() => {
		app.use('/api', testRoutes);

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error: Error) => {
		console.error('MongoDB connection error:', error.message);
	});
