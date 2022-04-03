import React from "react"

const Select = (props) => {
	const { options, className, ...propsSelect } = props
	return (
		<select
			className={ className || "form-select"}
			{ ...propsSelect }
		>
			{ options.map( option => (<option key={option._id} selected={option?.selected} value={option._id}>{option.name}</option>)) }
		</select>
	)
}

export default Select