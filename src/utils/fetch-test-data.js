export const fetchTestData = async () => {
	try {
		const response = await fetch('http://localhost:5000/api/test');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Не удалось получить тестовые данные:', error);
	}
};
