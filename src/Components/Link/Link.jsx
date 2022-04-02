import React from "react"
import { Link as LinkRouter } from "react-router-dom"

const Link = (props) => {
	const { to, children, className, ...propsLink } = props
	return (
		<LinkRouter 
			to={ to || "/" }
			className={ className || "btn btn-secondary" }
		>
			{ children || "link" }
		</LinkRouter>
	)
}

export default Link