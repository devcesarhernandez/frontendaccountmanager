import React from "react"

const TextArea = (props) => {
	const { className, ...porpsTextArea } = props
	return (
		<textarea
			className={ className || "form-control" }
			{ ...porpsTextArea }
		></textarea>
	)
}

export default TextArea