import { useNavigate } from 'react-router-dom';

interface QuizResultProps {
	result: number;
	totalQuestions: number;
}

export const QuizResult = ({ result, totalQuestions }: QuizResultProps) => {
	const navigate = useNavigate();

	const onNavigateHome = () => navigate('/');
	const onRetry = () => window.location.reload();

	return (
		<div className="container my-5">
			<div className="card shadow p-4">
				<h2 className="mb-4 text-center">
					Ваш результат: {result} из {totalQuestions}
				</h2>
				<div className="d-flex justify-content-between" style={{ gap: '10px' }}>
					<button
						className="btn btn-warning btn-lg w-50 py-4"
						onClick={onRetry}
					>
						Пройти еще раз
					</button>
					<button
						className="btn btn-success btn-lg w-50 py-4"
						onClick={onNavigateHome}
					>
						На главную
					</button>
				</div>
			</div>
		</div>
	);
};
