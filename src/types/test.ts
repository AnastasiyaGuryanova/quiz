export interface Answer {
	text: string;
	isCorrect: boolean;
}

export interface Question {
	text: string;
	answers: Answer[];
}

export interface Test {
	questions: Question[];
}

export interface HistoryEntry {
	date: string;
	totalQuestions: number;
	correctAnswers: number;
}
