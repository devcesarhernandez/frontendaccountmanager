import {http} from "../http/http"
import env from "../../Config/env"

const deleltePlatform = async (id, token) => {
	return await http.delete(`${env.URL_API}platforms/${id}`, token )
}

export default deleltePlatform