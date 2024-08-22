import { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

export const CloseButton = ({ onClick, size = 36, style = {}, ...props }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<X
			size={size}
			style={{
				cursor: 'pointer',
				color: isHovered ? 'red' : 'black',
				transition: 'color 0.3s ease',
				...style,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
			{...props}
		/>
	);
};

CloseButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	size: PropTypes.number,
	style: PropTypes.object,
};
