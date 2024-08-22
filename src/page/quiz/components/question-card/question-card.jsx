import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CloseButton } from '@components';

export const QuestionCard = ({ questions, onFinishQuiz }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState([]);
	const navigate = useNavigate();

	const handleAnswerSelect = (index) => {
		const newAnswers = [...answers];
		newAnswers[currentQuestionIndex] = index;
		setAnswers(newAnswers);
	};

	const handlePrev = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	};

	const handleNext = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			onFinishQuiz(answers);
		}
	};

	const handleClose = () => navigate('/');

	const question = questions[currentQuestionIndex];
	const disablePrev = currentQuestionIndex === 0;
	const disableNext = answers[currentQuestionIndex] === undefined;

	return (
		<div className="container my-5">
			<div className="card shadow p-4 position-relative">
				<div className="text-center mb-3">
					<strong className="fs-4 text-primary">
						Вопрос {currentQuestionIndex + 1} из {questions.length}
					</strong>
				</div>

				<CloseButton
					onClick={handleClose}
					style={{ position: 'absolute', top: '10px', right: '15px' }}
				/>

				<h3 className="mb-4">{question.text}</h3>

				<ul className="list-group mb-4">
					{question.answers.map((answer, index) => (
						<li key={index} className="list-group-item pl-4">
							<label className="form-check-label">
								<input
									type="radio"
									name="answer"
									className="form-check-input me-2"
									checked={answers[currentQuestionIndex] === index}
									onChange={() => handleAnswerSelect(index)}
								/>
								{answer.text}
							</label>
						</li>
					))}
				</ul>

				<div className="d-flex justify-content-between" style={{ gap: '10px' }}>
					<button
						className="btn btn-secondary btn-lg w-50 py-4"
						onClick={handlePrev}
						disabled={disablePrev}
					>
						Предыдущий вопрос
					</button>

					<button
						className="btn btn-primary btn-lg w-50 py-4"
						onClick={handleNext}
						disabled={disableNext}
					>
						{currentQuestionIndex === questions.length - 1
							? 'Завершить'
							: 'Следующий вопрос'}
					</button>
				</div>
			</div>
		</div>
	);
};

QuestionCard.propTypes = {
	questions: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			answers: PropTypes.arrayOf(
				PropTypes.shape({
					text: PropTypes.string.isRequired,
				}),
			).isRequired,
		}),
	).isRequired,
	onFinishQuiz: PropTypes.func.isRequired,
};
