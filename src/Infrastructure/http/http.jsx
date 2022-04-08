const get = async (url, token) => {
	const response = await fetch(url,{
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"token": token || ""
		}
	})
	return response.json()
}

const post = async (url, body, token) => {
	const response = await fetch(url,{
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
			"token": token || ""
		}
	})
	return await response.json()
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
	return response.json()
}

const _delete = async (url, token) => {
	const response = await fetch(url,{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"token": token || ""
		}
	})
	return response.json()
}

export const http = {
	get,
	post,
	patch,
	delete: _delete
}