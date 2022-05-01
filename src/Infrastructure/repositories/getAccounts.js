import {http} from "../http/http"
import env from "../../Config/env"

const getAccount = async (token) => {
	return await http.get(`${env.URL_API}accounts`, token )
}

export default getAccount