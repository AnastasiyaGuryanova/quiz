import { Route, Routes } from 'react-router-dom';
import { Home, Quiz, Edit } from 'pages';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/quiz" element={<Quiz />} />
			<Route path="/edit" element={<Edit />} />
		</Routes>
	);
};
