import { HistoryEntry } from 'types/test';

export const saveResultToHistory = (
	correctAnswers: number,
	totalQuestions: number,
): void => {
	const historyEntry: HistoryEntry = {
		date: new Date().toLocaleString(),
		totalQuestions,
		correctAnswers,
	};

	const quizHistory: HistoryEntry[] = JSON.parse(
		localStorage.getItem('quizHistory') || '[]',
	);
	quizHistory.push(historyEntry);
	localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
};
