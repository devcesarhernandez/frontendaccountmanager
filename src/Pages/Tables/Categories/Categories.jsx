import React, { useEffect, useState, useContext } from 'react'
import Button from '../../../Components/Button/Button'
import { UserContext } from "../../../Context/UserContext/UserContext"
import getCategory from "../../../Infrastructure/repositories/getCategory"
import deleteCategory from "../../../Infrastructure/repositories/deleteCategory"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"

const Categories = props => {
	const { handleOpenSnackbar } = useContext(SnackbarContext)
	const [ categories, setCategories ] = useState([])
	const [ _delete, setDelete ] = useState(false)
	const [ user ] = useContext( UserContext )

	const handleDelete = async (e) => {
		const res = await deleteCategory(e.target.dataset.idCategory, user.token)
		if ( res.ok ) setDelete( !_delete )
		handleOpenSnackbar(res.message, res.ok ? "success" : "error")
	}

	useEffect( async () => {
		const res = await getCategory(user.token)
		if ( res.ok ) setCategories(res.payload)
		else handleOpenSnackbar(res.message, res.ok ? "success" : "error")
	}, [_delete])
	
	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Categoria</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category, idx) => (
						<tr key={category._id}>
							<td scope="row">{idx + 1}</td>
							<td>{category.name}</td>
							<td>
								<Button 
									className="btn btn-outline-info btn-sm me-2" 
									data-id-category={category._id}
								>
									Edit
								</Button>
								<Button 
									className="btn btn-outline-danger btn-sm" 
									data-id-category={category._id}
									onClick={handleDelete}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Categories
