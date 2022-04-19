import {http} from "../http/http"
import env from "../../Config/env"

/**
 * Esta función registra una nueva categoria en la BD
 * @param {String} method 
 * @param {Object} body 
 * @param {String} token 
 * @param {String} id 
 */
const createCategory = async (method="post", body, token, id) => {
	return await http[method](`${env.URL_API}categories${id ? "/"+id : ""}`, body, token )
}

export default createCategory