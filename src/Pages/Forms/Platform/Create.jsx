import React from "react"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Select from "../../../Components/Inputs/Select"
import Button from "../../../Components/Button/Button"

const options  = [
	{
		_id: "alfjasjfoiwej879",
		name: "Almacenamiento",
		description: "djsaj sdjlasasjj ldj ffjls flsfj asfaslñ ",
	},
	{
		_id: "sjflkasf46asde",
		name: "Correo electronico",
		description: "djsaj sdjlasasjj ldj ffjls flsfj asfaslñ ",
	}
]

const Create = () => {
	return (
		<form>
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
				<Select id="category" options={options} />
			</div>
			<Button type="submit" className="btn btn-success w-100">Registrar plataforma</Button>
		</form>
	)
}

export default Create