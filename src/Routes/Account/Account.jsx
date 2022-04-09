import React from "react"
import { Routes, Route } from "react-router-dom"
import AccoutForm from "../../Pages/Forms/Account/Account"
import Accounts from "../../Pages/Tables/Accounts/Accounts"

const Account = () => {
	return (
		<Routes>
			<Route path="/accounts">
				<Route index element={ <Accounts /> }></Route>
				<Route path="create" element={ <AccoutForm /> }></Route>
			</Route>
		</Routes>
	)
}

export default Account