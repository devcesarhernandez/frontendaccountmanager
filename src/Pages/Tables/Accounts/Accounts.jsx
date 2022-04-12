import React, { useContext } from 'react'
import Account from "../../Forms/Account/Account"
import Button from "../../../Components/Button/Button"
import { ModalContext, ButtonModal } from "../../../Context/ModalContext/ModalContext"

const Accounts = props => {
	const { handleModalProperties } = useContext(ModalContext)
	const handleModal = () => {
		handleModalProperties("Editar cuenta", <Account title="Editar cuenta" buttonText="Actualizar cuenta" />)
	}
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
							<ButtonModal className="btn btn-outline-info btn-sm me-2">Edit</ButtonModal>
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
							<ButtonModal className="btn btn-outline-info btn-sm me-2" onClick={ handleModal }>Edit</ButtonModal>
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
							<ButtonModal className="btn btn-outline-info btn-sm me-2">Edit</ButtonModal>
							<Button className="btn btn-outline-danger btn-sm">Delete</Button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Accounts
