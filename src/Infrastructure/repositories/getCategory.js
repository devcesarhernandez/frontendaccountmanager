import {http} from "../http/http"
import env from "../../Config/env"

const getCategory = async (token) => {
	return await http.get(`${env.URL_API}categories`, token )
}

export default getCategory