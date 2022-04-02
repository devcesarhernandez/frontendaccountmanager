import React from "react"
import "./Index.css"
import { Outlet } from "react-router-dom"

const Index = () => {
	return (
		<div className="container">
			<div className="row justify-content-center align-items-center minh-100">
				<div className="col-sm-12 col-md-8 col-lg-4 mx-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Index