import {http} from "../http/http"
import env from "../../Config/env"

/**
 * Esta función registra o actualiza una cuenta en la BD
 * @param {String} method 
 * @param {Object} body 
 * @param {String} token 
 * @param {String} id 
 */
const createAccount = async (method="post", body, token, id) => {
	return await http[method](`${env.URL_API}accounts${id ? "/"+id : ""}`, body, token )
}

export default createAccount