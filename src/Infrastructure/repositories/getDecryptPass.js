import {http} from "../http/http"
import env from "../../Config/env"

const getDecryptPass = async (id, token) => {
	return await http.get(`${env.URL_API}accounts/${id ? id : ""}`, token )
}

export default getDecryptPass