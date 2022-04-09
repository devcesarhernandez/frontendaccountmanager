import React from 'react'
import Button from '../../../Components/Button/Button'

const Categories = props => {
	return (
		<div className="table-responsive">
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Categoria</th>
						<th scope="col">Descripción</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td scope="row">1</td>
						<td>Correo electrónico</td>
						<td />
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

export default Categories
