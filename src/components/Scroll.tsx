import React from 'react';

interface IScrollProps {
	children?: React.ReactNode;
}

const Scroll: React.FC<IScrollProps> = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: '1px solid white', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;