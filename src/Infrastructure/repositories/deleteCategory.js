import {http} from "../http/http"
import env from "../../Config/env"

const delelteCategory = async (id, token) => {
	return await http.delete(`${env.URL_API}categories/${id}`, token )
}

export default delelteCategory