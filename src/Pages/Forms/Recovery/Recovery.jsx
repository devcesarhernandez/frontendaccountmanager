import React from "react"
import Link from "../../../Components/Link/Link"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Button from "../../../Components/Button/Button"

const Recobery = (props) => {
	return (
		<form>
			<h1 className="text-center">Account Manager</h1>
			<h2 className="fs-4 my-3">Recuperar contraseña</h2>
			<div className="mb-3">
				<Label>Correo electrónico</Label>
				<Input/>
			</div>
			<Button className="btn btn-primary w-100 mb-2">Recuperar contraseña</Button>
			<hr/>
			<Link to="/login" className="btn btn-secondary w-100 mt-2">Iniciar sesión</Link>
		</form>
	)
}

export default Recobery