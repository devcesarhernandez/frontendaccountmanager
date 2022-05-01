import React, { useContext, useState, useEffect } from 'react'
import Account from "../../Forms/Account/Account"
import Button from "../../../Components/Button/Button"
import { UserContext } from "../../../Context/UserContext/UserContext"
import getAccounts from "../../../Infrastructure/repositories/getAccounts"
import deleteAccount from "../../../Infrastructure/repositories/deleteAccount"
import getDecryptPass from "../../../Infrastructure/repositories/getDecryptPass"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"
import { ModalContext, ButtonModal } from "../../../Context/ModalContext/ModalContext"

const Accounts = props => {
	const { handleOpenSnackbar } = useContext( SnackbarContext )
	const { handleModalProperties } = useContext( ModalContext )
	const [ accounts, setAccounts ] = useState([])
	const [ _delete, setDelete ] = useState(false)
	const [ user ] = useContext(UserContext)

	useEffect( async () => {
		const res = await getAccounts(user.token)
		if ( res.ok ) setAccounts(res.payload)
		else handleOpenSnackbar(res.message, "error")
	}, [_delete])
	
	const handleModal = () => {
		handleModalProperties("Editar cuenta", <Account title="Editar cuenta" buttonText="Actualizar cuenta" />)
	}

	const handleViewPass = async (e) => {
		handleModalProperties("Contraseña", "")
		const id = e.target.dataset.idAccount
		const res = await getDecryptPass(id, user.token)
		if (res.ok) handleModalProperties("Contraseña", res.payload)
	}
	
	const handleDeleteAccount = async (e) => {
		const res = await deleteAccount(e.target.dataset.idAccount, user.token)
		if (res.ok) setDelete( !_delete )
		handleOpenSnackbar(res.message, res.ok ? "success" : "error")
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
					{accounts.map((account, idx) => (
						<tr key={account._id}>
							<th scope="row">{idx + 1}</th>
							<td>{account.email}</td>
							<td>
								<span id={account._id}>*******</span>
								<ButtonModal className="btn btn-success btn-sm ms-2" data-id-account={account._id} onClick={handleViewPass}>Ver</ButtonModal>
							</td>
							<td>Correo electronico</td>
							<td>
								<ButtonModal className="btn btn-outline-info btn-sm me-2" data-id-account={account._id} onClick={handleModal}>Edit</ButtonModal>
								<Button className="btn btn-outline-danger btn-sm" data-id-account={account._id} onClick={handleDeleteAccount}>Delete</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Accounts
