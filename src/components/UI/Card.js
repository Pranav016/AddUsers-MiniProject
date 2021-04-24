import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
	return (
		// eslint-disable-next-line prettier/prettier
		<div className={`${classes.card} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
