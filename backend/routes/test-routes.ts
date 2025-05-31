import { Router, Request, Response } from 'express';
import Test, { ITest } from '../models/test';

const router = Router();

router.get('/test', async (req: Request, res: Response) => {
	try {
		const test: ITest | null = await Test.findOne();
		res.json(test);
	} catch (error) {
		res.status(500).json({
			message: 'Server error',
			error: (error as Error).message,
		});
	}
});

router.post('/test', async (req: Request, res: Response) => {
	try {
		let test: ITest | null = await Test.findOne();

		if (test) {
			test.questions = req.body.questions;
		} else {
			test = new Test(req.body);
		}

		await test.save();
		res.json(test);
	} catch (error) {
		res.status(500).json({
			message: 'Server error',
			error: (error as Error).message,
		});
	}
});

export default router;
