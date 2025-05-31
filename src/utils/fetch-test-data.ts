import { Test } from 'types/test';

export const fetchTestData = async (): Promise<Test | null> => {
	try {
		const response = await fetch('http://localhost:5000/api/test');
		if (!response.ok) {
			throw new Error('Не удалось получить тестовые данные');
		}
		const data: Test = await response.json();
		return data;
	} catch (error) {
		console.error('Не удалось получить тестовые данные:', error);
		return null;
	}
};
