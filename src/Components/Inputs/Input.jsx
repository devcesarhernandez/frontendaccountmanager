import React from "react"

const Input = (props) => {
	const { type, className, ...propsInput } = props
	return (
		<input
			type={ type || "text"}
			className={ className || "form-control" }
			{...propsInput}
		/>
	)
}

export default Input