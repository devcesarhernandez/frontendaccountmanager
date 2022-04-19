import React, { useContext, useState } from "react"
import Link from "../../../Components/Link/Link"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Button from "../../../Components/Button/Button"
import login from "../../../Infrastructure/repositories/login"
import { UserContext } from "../../../Context/UserContext/UserContext"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"
import { useNavigate } from "react-router-dom"

const Login = (props) => {
	const navigate = useNavigate()
	const [user, setUser] = useContext(UserContext)
	const { handleOpenSnackbar } = useContext(SnackbarContext)
	const [userLogin, setUserLogin] = useState({})
	const handleSubmit = async () => {
		const res = await login(userLogin?.userName, userLogin?.password)
		handleOpenSnackbar(res.message, res.ok ? "success" : "error")
		if (res.ok) {
			setUser({token: res.payload, logged: true})
			navigate("/home")
		}
	}
	return (
		<form>
			<h1 className="text-center">Account Manager</h1>
			<h2 className="fs-4 my-3">Iniciar sesión</h2>
			<div className="mb-3">
				<Label>Nombre de usuario</Label>
				<Input onChange={(e) => setUserLogin({...userLogin, userName: e.target.value})} />
			</div>
			<div className="mb-3">
				<Label>Contraseña</Label>
				<Input type="password" onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} />
				<small className="text-muted text-end d-block">Olvide mi contraseña. <Link to="/recovery" className="link-primary">Click aqui.</Link></small>
			</div>
			<Button className="btn btn-primary w-100 mb-2" onClick={handleSubmit} >Iniciar sesión</Button>
			<hr/>
			<small className="text-muted text-center d-block">¿O aún no tinenes cuenta?</small>
			<Link to="/signup" className="btn btn-secondary w-100 mt-4">Crear cuenta</Link>
		</form>
	)
}

export default Login