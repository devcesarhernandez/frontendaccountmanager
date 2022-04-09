import React from 'react'
import Button from "../../../Components/Button/Button"

const Accounts = props => {
	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Correo electrónico</th>
						<th scope="col">Contraseña</th>
						<th scope="col">Plataforma</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>dev.cesar.hdez@gmail.com</td>
						<td>
							<span id="unoo">*******</span>
							<Button className="btn btn-success btn-sm ms-2">Ver</Button>
						</td>
						<td>Correo electronico</td>
						<td>
							<Button className="btn btn-outline-info btn-sm me-2">Edit</Button>
							<Button className="btn btn-outline-danger btn-sm">Delete</Button>
						</td>
					</tr>
					<tr>
						<th scope="row">1</th>
						<td>dev.cesar.hdez@gmail.com</td>
						<td>
							<span id="unoo">*******</span>
							<Button className="btn btn-success btn-sm ms-2">Ver</Button>
						</td>
						<td>Correo electronico</td>
						<td>
							<Button className="btn btn-outline-info btn-sm me-2">Edit</Button>
							<Button className="btn btn-outline-danger btn-sm">Delete</Button>
						</td>
					</tr>
					<tr>
						<th scope="row">1</th>
						<td>dev.cesar.hdez@gmail.com</td>
						<td>
							<span id="unoo">*******</span>
							<Button className="btn btn-success btn-sm ms-2">Ver</Button>
						</td>
						<td>Correo electronico</td>
						<td>
							<Button className="btn btn-outline-info btn-sm me-2">Edit</Button>
							<Button className="btn btn-outline-danger btn-sm">Delete</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Accounts
