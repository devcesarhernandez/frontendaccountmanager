import React from "react"
import Link from "./Link"
import {useResolvedPath, useLocation} from "react-router-dom"

const LinkActive = (props) => {
	const {to, children, ...propsLink} = props
	const resolved = useResolvedPath(to)
	const pathname = new RegExp(resolved.pathname, "i")
	const match = useLocation().pathname.match(pathname)
	return (
		<Link 
			to={to} 
			{...propsLink}
			className={`nav-link link-dark px-0 px-sm-3 ${match ? "active" : ""}`}
		>
			{children}
		</Link>
	)
}

export default LinkActive