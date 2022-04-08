import React from "react"
import { Routes, Route } from "react-router-dom"
import Create from "../../Pages/Forms/Platform/Create"
import Platforms from "../../Pages/Tables/Platforms/Platforms"

const Platform = () => {
	return (
		<Routes>
			<Route path="/platforms">
				<Route index element={ <Platforms /> } />
				<Route path="create" element={ <Create /> } />
			</Route>
		</Routes>
	)
}

export default Platform