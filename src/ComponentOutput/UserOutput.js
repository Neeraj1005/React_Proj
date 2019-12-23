import React from 'react';
import './style.css';

const userOutput = (props) => {

	return (
		<div className="UserOutput">
			<p>{props.MyNamefirst} {props.MyNamelast}</p>
		</div>
		);
};

export default userOutput; 