import React from 'react'
import Button from "../Button/Button"

const Modal = props => {
	const { children, title } = props
	return (
		<div
			className="modal fade"
			id="accountModal"
			tabIndex="-1"
			aria-labelledby="accountMosdalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="accountMosdalLabel">
							{title || "Modal title"}
						</h5>
						<Button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							children={true}
						/>
					</div>
					<div className="modal-body">
						{ children }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
