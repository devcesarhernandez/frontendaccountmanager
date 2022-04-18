export const protectedRoutes = (location) => {
	const path = location.pathname.split("/")[1]
	const routes = ["accounts", "categories", "platforms", "profile", "home"]
	return routes.includes(path)
}

export const onlyLoggedOut = (location) => {
	const path = location.pathname.split("/")[1]
	const routes = ["login", "recovery", "signup", ""]
	return routes.includes(path)
}

export default (locattion) => location.pathname.split("/")[1]