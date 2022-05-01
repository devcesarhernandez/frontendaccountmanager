import {http} from "../http/http"
import env from "../../Config/env"

const delelteAccount = async (id, token) => {
	return await http.delete(`${env.URL_API}accounts/${id}`, token )
}

export default delelteAccount