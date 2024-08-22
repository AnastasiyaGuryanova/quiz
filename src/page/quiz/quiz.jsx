import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '@components';
import { QuizResult, QuestionCard } from './components';
import { fetchTestData, saveResultToHistory, calculateCorrectAnswers } from '@utils';

export const Quiz = () => {
	const [test, setTest] = useState(null);
	const [result, setResult] = useState(null);

	useEffect(() => {
		setTest(fetchTestData());
	}, []);

	const handleFinishQuiz = (answers) => {
		const correctAnswers = calculateCorrectAnswers(test, answers);
		saveResultToHistory(correctAnswers, test.questions.length);
		setResult(correctAnswers);
	};

	if (!test) {
		return <Loader />;
	}

	if (result !== null) {
		return <QuizResult result={result} totalQuestions={test.questions.length} />;
	}

	return <QuestionCard questions={test.questions} onFinishQuiz={handleFinishQuiz} />;
};
