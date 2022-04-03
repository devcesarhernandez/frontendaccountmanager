import React from "react"
import { Routes, Route } from "react-router-dom"
import Create from "../../Pages/Forms/Platform/Create"

const Platform = () => {
	return (
		<Routes>
			<Route path="/platforms">
				<Route path="create" element={ <Create /> } />
			</Route>
		</Routes>
	)
}

export default Platform