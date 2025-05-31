import { Schema, model, Document } from 'mongoose';

interface IAnswer extends Document {
	text: string;
	isCorrect: boolean;
}

interface IQuestion extends Document {
	text: string;
	answers: IAnswer[];
}

interface ITest extends Document {
	questions: IQuestion[];
}

const answerSchema = new Schema<IAnswer>({
	text: { type: String, required: true },
	isCorrect: { type: Boolean, required: true },
});

const questionSchema = new Schema<IQuestion>({
	text: { type: String, required: true },
	answers: { type: [answerSchema], required: true },
});

const testSchema = new Schema<ITest>({
	questions: { type: [questionSchema], required: true },
});

const Test = model<ITest>('Test', testSchema);

export { Test, ITest };
export default Test;
