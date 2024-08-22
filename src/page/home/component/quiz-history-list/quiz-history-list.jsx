import PropTypes from 'prop-types';
import { QuizHistoryItem } from '../quiz-history-item/quiz-history-item';

export const QuizHistoryList = ({ history }) => {
	if (history.length === 0) {
		return (
			<div className="col-12 text-center">
				<p className="text-muted fs-5">Нет пройденных тестов</p>
			</div>
		);
	}

	return (
		<div className="col-12 col-md-12">
			<ul className="list-group">
				{history.map((entry, index) => (
					<QuizHistoryItem key={index} entry={entry} />
				))}
			</ul>
		</div>
	);
};

QuizHistoryList.propTypes = {
	history: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			totalQuestions: PropTypes.number.isRequired,
			correctAnswers: PropTypes.number.isRequired,
		}),
	).isRequired,
};
