import React from 'react';

const userInput = (props) => {

// inline css
	const inlineStyle = {
		border: '2px solid red'
	};
// coding part

	return (
	<input type="text" style={inlineStyle} onChange={props.firstname} value={props.valuefirst} />,
	<input type="text" style={inlineStyle} onChange={props.lastname} value={props.valuelast} />
		);

};


export default userInput;