import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Select from "../../../Components/Inputs/Select"
import Button from "../../../Components/Button/Button"
import {UserContext} from "../../../Context/UserContext/UserContext"
import getCategory from "../../../Infrastructure/repositories/getCategory"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"
import createOrUpdatePlatform from "../../../Infrastructure/repositories/createOrUpdatePlatform"

const Create = (props) => {
	const navigate = useNavigate()
	const [ user ] = useContext(UserContext)
	const [ categories, setCategories ] = useState([])
	const { handleOpenSnackbar } = useContext(SnackbarContext)

	const handleSubmit = async (e) => {
		e.preventDefault()
		
		const f = new FormData()
		f.append("name",e.target.querySelector("#name").value)
		f.append("url",e.target.querySelector("#url").value)
		f.append("icon",e.target.querySelector("#icon").files[0])
		f.append("category",e.target.querySelector("#category").value)
		
		const res = await fetch("https://api.accoountmanager.ga/platforms",{
			method: "POST", 
			body: f, 
			headers: {
				token: user.token
			}
		})
		.then(res => !res.ok ? {ok: false, message: "Error server"} : res.json())
		if( res.ok ) navigate("/platforms")
		handleOpenSnackbar(res.message, res.ok ? "success" : "error")
	}

	useEffect( async () => {
		const res = await getCategory(user.token)
		if ( res.ok ) setCategories(res.payload)
	}, [])
	
	return (
		<form onSubmit={handleSubmit}>
			<h2>Registrar nueva plataforma</h2>
			<div className="mb-3">
				<Label htmlFor="name">Nombre:</Label>
				<Input id="name" />
			</div>
			<div className="mb-3">
				<Label htmlFor="url">URL:</Label>
				<Input type="url" id="url" />
			</div>
			<div className="mb-3">
				<Label htmlFor="icon">Logo:</Label>
				<Input type="file" id="icon" accept="image/*" />
			</div>
			<div className="mb-3">
				<Label htmlFor="category">Categoria:</Label>
				<Select id="category" options={categories} />
			</div>
			<Button type="submit" className="btn btn-success w-100">Registrar plataforma</Button>
		</form>
	)
}

export default Create