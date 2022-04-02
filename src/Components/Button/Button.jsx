import React from 'react';

const Button = (props) => {
	const { type,  className, ...propsButton } = props
	return (
		<button 
			type={ type || "button"}
			className={ className || "btn btn-primary"}
			{...propsButton}
		>
			{props.children || "Click me."}
		</button>
	)
}

export default Button