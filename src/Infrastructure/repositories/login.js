import {http} from "../http/http"
import env from "../../Config/env"

const login = async (userName, password) => {
	const res = await http.post(`${env.URL_API}signin`, {userName, password} )
	return res
}

export default login