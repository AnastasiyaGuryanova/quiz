import PropTypes from 'prop-types';

export const ProgressIndicator = ({ progress }) => {
	return (
		<div className="progress flex-grow-1 mx-3" style={{ height: '1.5rem' }}>
			<div
				className="progress-bar bg-success"
				role="progressbar"
				style={{ width: `${progress}%` }}
				aria-valuenow={progress}
				aria-valuemin="0"
				aria-valuemax="100"
			></div>
			<div
				className="progress-bar bg-danger"
				role="progressbar"
				style={{ width: `${100 - progress}%` }}
				aria-valuenow={100 - progress}
				aria-valuemin="0"
				aria-valuemax="100"
			></div>
		</div>
	);
};

ProgressIndicator.propTypes = {
	progress: PropTypes.number.isRequired,
};
