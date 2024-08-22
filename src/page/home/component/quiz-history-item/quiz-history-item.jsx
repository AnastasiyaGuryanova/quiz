import PropTypes from 'prop-types';
import { ProgressIndicator } from '../progress-indicator/progress-indicator';

export const QuizHistoryItem = ({ entry }) => {
	const progress = (entry.correctAnswers / entry.totalQuestions) * 100;

	return (
		<li className="list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded">
			<span className="text-muted">Дата: {entry.date}</span>

			<ProgressIndicator progress={progress} />

			<span className="badge bg-success rounded-pill" style={{ fontSize: '1.3em' }}>
				Верно: {entry.correctAnswers} из {entry.totalQuestions}
			</span>
		</li>
	);
};

QuizHistoryItem.propTypes = {
	entry: PropTypes.shape({
		date: PropTypes.string.isRequired,
		totalQuestions: PropTypes.number.isRequired,
		correctAnswers: PropTypes.number.isRequired,
	}).isRequired,
};
