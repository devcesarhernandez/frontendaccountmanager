const Cookies = document.cookie.split(";").reduce( (accum, cookie) => ({
	...accum, [ cookie.split("=")[0].trim() ]:cookie.split("=")[1] 
}), {})

export const setCookie = (name, value) => {
	document.cookie = `${name}=${value}; path=/`
}

export const deleteCookie = (name) => {
	document.cookie = `${name}=; max-age=0; path=/`
}

export default Cookies