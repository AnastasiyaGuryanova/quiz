import { Test } from 'types/test';

export const calculateCorrectAnswers = (test: Test, answers: number[]): number => {
	return test.questions.reduce((acc, question, index) => {
		return question.answers[answers[index]]?.isCorrect ? acc + 1 : acc;
	}, 0);
};
