import React from 'react';

const userInput = (props) => {

	const inlineStyle = {
		border: '2px solid red'
	};

	return <input 
	type="text" style={inlineStyle}
	onChange={props.changed}
	value={props.value}
	/>;

};


export default userInput;