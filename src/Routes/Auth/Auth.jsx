import React from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../../Pages/Layouts/Index/Index"
import Login from "../../Pages/Forms/Login/Login"
import Signup from "../../Pages/Forms/Signup/Signup"
import Recovery from "../../Pages/Forms/Recovery/Recovery"

const Auth = () => {
	return (
		<Routes>
		 	<Route path="/" element={<Index />}>
				<Route index element={<Login />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="recovery" element={<Recovery />} />
			</Route>
		</Routes>
	)
}

export default Auth