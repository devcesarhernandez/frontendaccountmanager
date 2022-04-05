import React from "react"
import types from "./TypesSnackbar"
import Button from "../Button/Button"

const Snackbar = (props) => {
	const { type, message, ...propsSnackbar } = props
	
	return (
		<div className="position-fixed top-0 start-50 translate-middle-x p-3" style={{zIndex: 11}}>
			<div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
				<div className={`toast-header bg-${types[type]} text-white rounded`}>
					<strong className="me-auto">{message || "Bootstrap"}</strong>
					<Button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" children={true}></Button>
				</div>
			</div>
		</div>
	)
}

export default Snackbar