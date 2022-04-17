import React from "react"
import {Routes, Route} from "react-router-dom"
import Create from "../../Pages/Forms/Platform/Create"
import AccoutForm from "../../Pages/Forms/Account/Account"
import Accounts from "../../Pages/Tables/Accounts/Accounts"
import Platforms from "../../Pages/Tables/Platforms/Platforms"
import CategoryForm from "../../Pages/Forms/Category/Category"
import Dashboard from "../../Pages/Layouts/Dashboard/Dashboard"
import Categories from "../../Pages/Tables/Categories/Categories"

const Home = () => {
	return (
		<Routes>
			<Route element={<Dashboard />}>
				<Route path="/home" element={ <Accounts /> }></Route>
				<Route path="/accounts">
					<Route index element={ <Accounts /> }></Route>
					<Route path="create" element={ <AccoutForm /> }></Route>
				</Route>
				<Route path="/categories">
					<Route index element={ <Categories /> }></Route>
					<Route path="create" element={ <CategoryForm /> }></Route>
				</Route>
				<Route path="/platforms">
					<Route index element={ <Platforms /> } />
					<Route path="create" element={ <Create /> } />
				</Route>
			</Route>
		</Routes>
	)
}

export default Home