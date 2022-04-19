import React, { useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import "./Category.css"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Button from "../../../Components/Button/Button"
import TextArea from "../../../Components/Inputs/TextArea"
import {UserContext} from "../../../Context/UserContext/UserContext"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"
import createCategory from "../../../Infrastructure/repositories/createOrUpdateCategory"

const Category = () =>  {
	const navigate = useNavigate()
	const [ user ] = useContext(UserContext)
	const [ category, setCategory ] = useState({})
	const { handleOpenSnackbar } = useContext(SnackbarContext)

	const handleCategory = async () => {
		const res = await createCategory("post", category, user.token)
		if ( res.ok ) navigate("/categories")
		handleOpenSnackbar(res.message, res.ok ? "success" : "error")
	}

	const handleDataCategory = (e) => {
		setCategory({
			...category,
			[e.target.id]: e.target.value
		})
	}
	
	return (
		<form>
			<h2>Crear categoria</h2>
			<div className="mb-3">
				<Label htmlFor="name">Nombre:</Label>
				<Input id="name" onChange={handleDataCategory} />
			</div>
			<div className="mb-3">
				<Label htmlFor="description">Descripción:</Label>
				<TextArea id="description" onChange={handleDataCategory} className="form-control rs-none" rows="5" />
			</div>
			<Button className="btn btn-success w-100 mb-2" onClick={handleCategory}>Crear categoría</Button>
		</form>
	)
}

export default Category