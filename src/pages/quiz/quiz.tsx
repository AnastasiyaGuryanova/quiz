import { useState, useEffect } from 'react';
import { Loader } from 'components';
import { Test } from 'types/test';
import { fetchTestData, saveResultToHistory, calculateCorrectAnswers } from 'utils';
import { QuizResult, QuestionCard } from './components';

export const Quiz = () => {
	const [test, setTest] = useState<Test | null>(null);
	const [result, setResult] = useState<number | null>(null);

	useEffect(() => {
		const loadTestData = async () => {
			const data = await fetchTestData();
			setTest(data);
		};
		loadTestData();
	}, []);

	const handleFinishQuiz = (answers: number[]) => {
		if (test) {
			const correctAnswers = calculateCorrectAnswers(test, answers);
			saveResultToHistory(correctAnswers, test.questions.length);
			setResult(correctAnswers);
		}
	};

	if (!test) {
		return <Loader />;
	}

	if (result !== null) {
		return <QuizResult result={result} totalQuestions={test.questions.length} />;
	}

	return <QuestionCard questions={test.questions} onFinishQuiz={handleFinishQuiz} />;
};
