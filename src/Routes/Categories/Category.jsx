import React from "react"
import { Routes, Route } from "react-router-dom"
import CategoryForm from "../../Pages/Forms/Category/Category"

const Category = () => {
	return (
		<Routes>
			<Route path="/categories">
				<Route path="create" element={ <CategoryForm /> }></Route>
			</Route>
		</Routes>
	)
}

export default Category