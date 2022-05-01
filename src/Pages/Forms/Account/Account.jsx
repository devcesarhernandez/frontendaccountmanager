import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Select from "../../../Components/Inputs/Select"
import Button from "../../../Components/Button/Button"
import { UserContext } from "../../../Context/UserContext/UserContext"
import getPlatforms from "../../../Infrastructure/repositories/getPlatforms"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"
import createAccount from "../../../Infrastructure/repositories/createOrUpdateAccount"

const Account = (props) => {
	const { handleOpenSnackbar } = useContext( SnackbarContext )
	const { value, password, title, buttonText } = props
	const [ platforms, setPlatforms ] = useState([])
	const [ account, setAccount ] = useState({})
	const [ user ] = useContext( UserContext )
	const navigate = useNavigate()

	useEffect( async () => {
		const res = await getPlatforms(user.token)
		if ( res.ok ) setPlatforms(res.payload)
		else handleOpenSnackbar(res.message, "error")
	},[])

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = await createAccount("post", account, user.token)
		if ( res.ok ) navigate("/accounts")
		handleOpenSnackbar(res.message, res.ok ? "success" : "error")
	}

	const handleDataAccount = (e) => {
		setAccount({
			...account,
			[e.target.id]: e.target.value
		})
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<h2>{ title || "Registar nueva cuenta"}</h2>
			<div className="mb-3">
				<Label htmlFor="email">Correo electronico</Label>
				<Input type="email" id="email" onChange={handleDataAccount}/>
			</div>
			<div className="mb-3">
				<Label htmlFor="password">Contraseña</Label>
				<Input type="password" id="password" onChange={handleDataAccount}/>
			</div>
			<div className="mb-3">
				<Label htmlFor="platformId">Plataforma:</Label>
				<Select id="platformId" options={platforms} onChange={handleDataAccount}/>
			</div>
			<Button type="submit" className="btn btn-success w-100">{ buttonText || "Registrar plataforma"}</Button>
		</form>
	)
}

export default Account