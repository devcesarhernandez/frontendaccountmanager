import React from "react"
import Label from "../../../Components/Label/Label"
import Input from "../../../Components/Inputs/Input"
import Select from "../../../Components/Inputs/Select"
import Button from "../../../Components/Button/Button"

const options  = [
	{
		_id: "alfjasjfoiwej879",
		name: "GMail",
		description: "djsaj sdjlasasjj ldj ffjls flsfj asfaslñ ",
	},
	{
		_id: "sjflkasf46asde",
		name: "Mega",
		description: "djsaj sdjlasasjj ldj ffjls flsfj asfaslñ ",
	}
]

const Account = (props) => {
	const { value, password, title, buttonText } = props
	return (
		<form>
			<h2>{ title || "Registar nueva cuenta"}</h2>
			<div className="mb-3">
				<Label htmlFor="email">Correo electronico</Label>
				<Input type="email" id="email"/>
			</div>
			<div className="mb-3">
				<Label htmlFor="password">Contraseña</Label>
				<Input type="password" id="password"/>
			</div>
			<div className="mb-3">
				<Label htmlFor="platform">Plataforma:</Label>
				<Select id="category" options={options} />
			</div>
			<Button type="submit" className="btn btn-success w-100">{ buttonText || "Registrar plataforma"}</Button>
		</form>
	)
}

export default Account