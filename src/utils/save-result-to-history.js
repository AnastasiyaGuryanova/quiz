export const saveResultToHistory = (correctAnswers, totalQuestions) => {
	const historyEntry = {
		date: new Date().toLocaleString(),
		totalQuestions,
		correctAnswers,
	};

	const quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];

	quizHistory.push(historyEntry);

	localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
};
