import React, { useState } from "react"
import Modal from "../../Components/Modal/Modal"
import Button from "../../Components/Button/Button"

export const ModalContext = React.createContext()

export const ButtonModal = (props) => {
	const { ...propsButton } = props
	return (
		<Button data-bs-toggle="modal" data-bs-target="#accountModal" {...propsButton}></Button>
	)
}

const ModalProvider = (props) => {
	const { children } = props
	const [ modalProperties, setModalProperties ] = useState({
		title: "",
		children: <></>
	})
	const handleModalProperties = (title, children) => {
		setModalProperties({title, children})
	}
	return (
		<ModalContext.Provider value={{handleModalProperties}}>
			{ children }
			<Modal title={ modalProperties.title }>
				{ modalProperties.children }
			</Modal>
		</ModalContext.Provider>
	)
}

export default ModalProvider