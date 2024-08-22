export const calculateCorrectAnswers = (test, answers) => {
	return test.questions.reduce((acc, question, index) => {
		return question.answers[answers[index]]?.isCorrect ? acc + 1 : acc;
	}, 0);
};
