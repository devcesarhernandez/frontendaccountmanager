import React from "react"
import "./Category.css"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Button from "../../../Components/Button/Button"
import TextArea from "../../../Components/Inputs/TextArea"

const Category = () =>  {
	return (
		<form>
			<h2>Crear categoria</h2>
			<div className="mb-3">
				<Label>Nombre:</Label>
				<Input />
			</div>
			<div className="mb-3">
				<Label>Descripción:</Label>
				<TextArea className="form-control rs-none" rows="5" />
			</div>
			<Button className="btn btn-success w-100 mb-2">Crear categoría</Button>
		</form>
	)
}

export default Category