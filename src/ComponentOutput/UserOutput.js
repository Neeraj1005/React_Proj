import React from 'react';
import './style.css';

const userOutput = (props) => {

	return (
		<div className="UserOutput">
			<p>Task1 paragraph</p>
			<p> Task1 Second paragraph </p>
			<p> Task4 {props.MyName} </p>
		</div>
		);
};

export default userOutput; 