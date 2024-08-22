import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PencilSquare, Trash, Plus } from 'react-bootstrap-icons';
import { CloseButton, Loader } from '@components';
import { fetchTestData, saveTestData } from '@utils';

export const Edit = () => {
	const [test, setTest] = useState(null);
	const [editingQuestionIndex, setEditingQuestionIndex] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const loadTestData = async () => {
			const data = await fetchTestData();
			setTest(data);
		};
		loadTestData();
	}, []);

	const handleQuestionChange = (index, text) => {
		const newTest = { ...test };
		newTest.questions[index].text = text;
		setTest(newTest);
	};

	const handleAnswerChange = (qIndex, aIndex, text) => {
		const newTest = { ...test };
		newTest.questions[qIndex].answers[aIndex].text = text;
		setTest(newTest);
	};

	const handleAnswerCorrectToggle = (qIndex, aIndex) => {
		const newTest = { ...test };
		newTest.questions[qIndex].answers[aIndex].isCorrect =
			!newTest.questions[qIndex].answers[aIndex].isCorrect;
		setTest(newTest);
	};

	const handleAddQuestion = () => {
		const newTest = { ...test };
		newTest.questions.push({ text: '', answers: [{ text: '', isCorrect: false }] });
		setTest(newTest);
		setEditingQuestionIndex(newTest.questions.length - 1);
	};

	const handleRemoveQuestion = (index) => {
		const newTest = { ...test };
		newTest.questions.splice(index, 1);
		setTest(newTest);
	};

	const handleAddAnswer = (qIndex) => {
		const newTest = { ...test };
		newTest.questions[qIndex].answers.push({ text: '', isCorrect: false });
		setTest(newTest);
	};

	const handleRemoveAnswer = (qIndex, aIndex) => {
		const newTest = { ...test };
		newTest.questions[qIndex].answers.splice(aIndex, 1);
		setTest(newTest);
	};

	const handleSave = () => {
		saveTestData(test);
		navigate('/');
	};

	if (!test) {
		return <Loader />;
	}

	return (
		<div className="container my-5">
			<h2 className="mb-4 text-center">Редактировать тест</h2>

			<ul className="list-group mb-3">
				{test.questions.map((question, qIndex) => (
					<li key={qIndex} className="list-group-item">
						{editingQuestionIndex === qIndex ? (
							<div className="w-100 ">
								<div className="w-100 d-flex align-items-center mb-3">
									<input
										type="text"
										value={question.text}
										onChange={(e) =>
											handleQuestionChange(qIndex, e.target.value)
										}
										className="form-control"
										style={{ flex: 1 }}
									/>

									<CloseButton
										onClick={() => setEditingQuestionIndex(null)}
										size={36}
									/>
								</div>

								<ul className="list-group mb-3">
									{question.answers.map((answer, aIndex) => (
										<li
											key={aIndex}
											className="list-group-item d-flex justify-content-between align-items-center"
										>
											<div className="form-check d-flex align-items-center me-3">
												<input
													type="radio"
													className="form-check-input"
													checked={answer.isCorrect}
													onChange={() =>
														handleAnswerCorrectToggle(
															qIndex,
															aIndex,
														)
													}
													style={{ marginRight: '10px' }}
												/>
											</div>

											<input
												type="text"
												value={answer.text}
												onChange={(e) =>
													handleAnswerChange(
														qIndex,
														aIndex,
														e.target.value,
													)
												}
												className="form-control me-3"
											/>
											<button
												className="btn btn-danger ml-2"
												onClick={() =>
													handleRemoveAnswer(qIndex, aIndex)
												}
											>
												<Trash size={20} />
											</button>
										</li>
									))}
								</ul>
								<button
									className="btn btn-success mb-3"
									onClick={() => handleAddAnswer(qIndex)}
								>
									<Plus size={20} /> Добавить вариант ответа
								</button>
							</div>
						) : (
							<div className="d-flex justify-content-between align-items-center">
								<span>{question.text}</span>
								<div className="d-flex">
									<button
										className="btn btn-warning me-2 mr-2"
										onClick={() => setEditingQuestionIndex(qIndex)}
									>
										<PencilSquare size={20} />
									</button>
									<button
										className="btn btn-danger"
										onClick={() => handleRemoveQuestion(qIndex)}
									>
										<Trash size={20} />
									</button>
								</div>
							</div>
						)}
					</li>
				))}
			</ul>

			<button
				className="btn btn-primary btn-lg mb-3 d-block w-100 py-4"
				onClick={handleAddQuestion}
			>
				<Plus size={24} /> Добавить вопрос
			</button>

			<div className="d-flex justify-content-between" style={{ gap: '10px' }}>
				<button className="btn btn-success btn-lg w-50 py-4" onClick={handleSave}>
					Сохранить
				</button>
				<button
					className="btn btn-secondary btn-lg w-50 py-4"
					onClick={() => (window.location.href = '/')}
				>
					Назад
				</button>
			</div>
		</div>
	);
};
