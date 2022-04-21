import React, { useContext, useEffect, useState } from "react"
import Button from "../../../Components/Button/Button"
import { UserContext } from "../../../Context/UserContext/UserContext"
import getPlatforms from "../../../Infrastructure/repositories/getPlatforms"
import deletePlatform from "../../../Infrastructure/repositories/deletePlatform"
import { SnackbarContext } from "../../../Context/SnackbarContext/SnackbarContext"

const Platforms = () => {
	const { handleOpenSnackbar } = useContext( SnackbarContext )
	const [ platforms, setPlatforms ] = useState([])
	const [ _delete, setDelete ] = useState(false)
	const [ user ] = useContext( UserContext )

	const renderingImage = (data) => {
		let binary = ''
        let bytes = [].slice.call(new Uint8Array(data))
        bytes.forEach((b) => binary += String.fromCharCode(b))
        return window.btoa(binary)
	}

	const deletePlatorm = async (e) => {
		const res = await deletePlatform(e.target.dataset.idPlatform, user.token)
		if ( res.ok ) setDelete( !_delete )
		handleOpenSnackbar(res.message, res.ok ? "success" : "error")
	}

	useEffect( async () => {
		const res = await getPlatforms(user.token)
		if ( res.ok ) setPlatforms(res.payload)
		else handleOpenSnackbar(res.message, res.ok ? "success" : "error")
	}, [_delete])
	
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
					{platforms.map( (platform, idx) => (
						<tr key={platform._id}>
							<td scope="row">{idx + 1}</td>
							<td>
								<img src={`data:${platform.icon.contentType};base64,${renderingImage(platform.icon.data.data)}`} width="24px" />
								{platform.name}
							</td>
							<td><a href={platform.url} target="_blank">{platform.url}</a></td>
							<td></td>
							<td>
							<Button className="btn btn-outline-info btn-sm me-2" data-id-platform={platform._id}>Edit</Button>
							<Button className="btn btn-outline-danger btn-sm" data-id-platform={platform._id} onClick={deletePlatorm}>Delete</Button>
						</td>
						</tr>
					) )}
				</tbody>
			</table>
		</div>
	)
}

export default Platforms