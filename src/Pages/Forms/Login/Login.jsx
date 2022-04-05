import React, { useContext } from "react"
import Link from "../../../Components/Link/Link"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Button from "../../../Components/Button/Button"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"

const Login = (props) => {
	const { handleOpenSnackbar } = useContext(SnackbarContext)
	const handleSubmit = () => {
		handleOpenSnackbar("Servicio no disponible", "error")
	}
	return (
		<form>
			<h1 className="text-center">Account Manager</h1>
			<h2 className="fs-4 my-3">Iniciar sesión</h2>
			<div className="mb-3">
				<Label>Correo electrónico</Label>
				<Input/>
			</div>
			<div className="mb-3">
				<Label>Contraseña</Label>
				<Input type="password"/>
				<small className="text-muted text-end d-block">Olvide mi contraseña. <Link to="/recovery" className="link-primary">Click aqui.</Link></small>
			</div>
			<Button className="btn btn-primary w-100 mb-2" onClick={handleSubmit}>Iniciar sesión</Button>
			<hr/>
			<small className="text-muted text-center d-block">¿O aún no tinenes cuenta?</small>
			<Link to="/signup" className="btn btn-secondary w-100 mt-4">Crear cuenta</Link>
		</form>
	)
}

export default Login