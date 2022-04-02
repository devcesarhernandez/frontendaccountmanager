import React from "react"
import Link from "../../../Components/Link/Link"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Button from "../../../Components/Button/Button"

const Signup = () => {
	return (
		<form>
			<h1 className="text-center">Account Manager</h1>
			<h2 className="fs-4 my-3">Crear cuenta</h2>
			<div className="mb-3">
				<Label>Nombre(s):</Label>
				<Input/>
			</div>
			<div className="mb-3">
				<Label>Apellido(s):</Label>
				<Input/>
			</div>
			<div className="mb-3">
				<Label>Nombre de usuario:</Label>
				<Input/>
			</div>
			<div className="mb-3">
				<Label>Correo electrónico</Label>
				<Input/>
			</div>
			<div className="mb-3">
				<Label>Contraseña</Label>
				<Input type="password"/>
			</div>
			<div className="mb-3">
				<Label>Repetir contraseña</Label>
				<Input type="password"/>
			</div>
			<Button className="btn btn-primary w-100 mb-2">Crear cuenta</Button>
			<hr/>
			<small className="text-muted text-center d-block">¿Ya tinenes cuenta?</small>
			<Link to="/login" className="btn btn-secondary w-100 mt-4">Iniciar sesión</Link>
		</form>
	)
}

export default Signup