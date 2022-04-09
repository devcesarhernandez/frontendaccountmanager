import React from "react"
import { Routes, Route } from "react-router-dom"
import CategoryForm from "../../Pages/Forms/Category/Category"
import Categories from "../../Pages/Tables/Categories/Categories"

const Category = () => {
	return (
		<Routes>
			<Route path="/categories">
				<Route index element={ <Categories /> }></Route>
				<Route path="create" element={ <CategoryForm /> }></Route>
			</Route>
		</Routes>
	)
}

export default Category