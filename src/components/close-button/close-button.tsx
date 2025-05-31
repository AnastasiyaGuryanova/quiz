import { useState } from 'react';
import { X } from 'react-bootstrap-icons';

interface CloseButtonProps {
	onClick: () => void;
	size?: number;
	style?: React.CSSProperties;
}

export const CloseButton = ({ onClick, size = 36, style = {} }: CloseButtonProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

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
		/>
	);
};
