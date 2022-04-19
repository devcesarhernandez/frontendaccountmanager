import React, {useState, useEffect} from "react"
import {useNavigate, useLocation} from "react-router-dom"
import Cookies, {setCookie} from "./Cookies"
import {protectedRoutes, onlyLoggedOut} from "./FilterRoutes"

const UserProvider = (props) => {
	const {children} = props
	const location = useLocation()
	const navigate = useNavigate()
	const [user, setUser] = useState(Cookies)
	
	useEffect( () => {
		if ( user.logged ) {
			setCookie("token", user.token)
			setCookie("logged", user.logged)
		} 
	}, [user])

	useEffect(() => {
		if( protectedRoutes(location) && !user.logged) navigate("/")
		if( onlyLoggedOut(location) && user.logged) navigate("/home")
	}, [location])
	
	return (
		<UserContext.Provider value={[user, setUser]}>
			{children}
		</UserContext.Provider>
	)
}

export const UserContext = React.createContext()
export default UserProvider