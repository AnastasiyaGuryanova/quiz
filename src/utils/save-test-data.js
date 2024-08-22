export const saveTestData = async (test) => {
	try {
		const response = await fetch('http://localhost:5000/api/test', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(test),
		});

		if (!response.ok) {
			throw new Error('Не удалось сохранить тестовые данные');
		}
	} catch (error) {
		console.error('Ошибка при сохранении теста:', error);
	}
};
