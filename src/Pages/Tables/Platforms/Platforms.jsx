import React from "react"
import Button from "../../../Components/Button/Button"

const Platforms = () => {
	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Plataforma</th>
						<th scope="col">url</th>
						<th scope="col">Categoría</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row">1</td>
						<td>
							<img src="https://logos-marcas.com/wp-content/uploads/2020/11/Gmail-Logotipo-2020-presente.jpg" width="28px"/>
							GMail
						</td>
						<td><a href="https://gmail.com" target="_blank">https://gmail.com</a></td>
						<td>Correo electronico</td>
						<td>
							<Button className="btn btn-outline-info btn-sm me-2" data-id-platform="aslsaf464">Edit</Button>
							<Button className="btn btn-outline-danger btn-sm" data-id-platform="aslsaf464">Delete</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Platforms