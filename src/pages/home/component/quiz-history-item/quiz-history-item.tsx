import { HistoryEntry } from 'types/test';
import { ProgressIndicator } from '../progress-indicator/progress-indicator';

interface QuizHistoryItemProps {
	entry: HistoryEntry;
}

export const QuizHistoryItem = ({ entry }: QuizHistoryItemProps) => {
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
