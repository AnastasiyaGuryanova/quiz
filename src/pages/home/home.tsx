import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuizHistoryList } from './component';
import { HistoryEntry } from 'types/test';

export const Home = () => {
	const [history, setHistory] = useState<HistoryEntry[]>([]);

	useEffect(() => {
		const savedHistory: HistoryEntry[] = JSON.parse(
			localStorage.getItem('quizHistory') || '[]',
		);
		setHistory(savedHistory);
	}, []);

	return (
		<div className="container">
			<div className="text-center">
				<h1 className="my-5">Проверь свои знания</h1>

				<div className="d-flex justify-content-center mb-5 flex-column">
					<Link
						to="/quiz"
						className="btn btn-primary btn-lg shadow-lg py-4 mb-3"
					>
						Запустить тест
					</Link>

					<Link to="/edit" className="btn btn-secondary btn-lg shadow-lg py-4">
						Редактировать тест
					</Link>
				</div>

				<h3 className="text-center mb-4">История прохождений</h3>

				<div className="row justify-content-center">
					<QuizHistoryList history={history} />
				</div>
			</div>
		</div>
	);
};
