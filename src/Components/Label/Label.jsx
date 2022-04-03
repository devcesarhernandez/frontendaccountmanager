import React from "react"

const Label = (props) => {
	const { children, className, ...propsLabel } = props
	return (
		<label 
			className={ className || "form-label"}
			{ ...propsLabel }
		>
			{ children || "Label" }
		</label>
	)
}

export default Label