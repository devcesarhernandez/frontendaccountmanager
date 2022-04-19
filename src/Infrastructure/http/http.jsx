const get = async (url, token) => {
	const response = await fetch(url,{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"token": token || ""
		}
	})
	return !response.ok ? {ok: false, message: "Server error"} : response.json()
}

/**
 * Esta funcion hace petiones POST
 * @param {String} url La url de la petición
 * @param {Object} body Recibe los datos a insertar en un objecto
 * @param {String} token El token de sesión
 * @returns {Object}
 */
const post = async (url, body, token) => {
	const response = await fetch(url,{
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
			"token": token || ""
		}
	})
	return !response.ok ? {ok: false, message: "Server error"} : response.json()
}

const patch = async (url, body, token) => {
	const response = await fetch(url,{
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			"token": token || ""
		},
		body
	})
	return !response.ok ? {ok: false, message: "Server error"} : response.json()
}

const _delete = async (url, token) => {
	const response = await fetch(url,{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"token": token || ""
		}
	})
	return !response.ok ? {ok: false, message: "Server error"} : response.json()
}

export const http = {
	get,
	post,
	patch,
	delete: _delete
}