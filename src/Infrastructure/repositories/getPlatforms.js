import {http} from "../http/http"
import env from "../../Config/env"

const getPlatform = async (token) => {
	return await http.get(`${env.URL_API}platforms`, token)
}

export default getPlatform