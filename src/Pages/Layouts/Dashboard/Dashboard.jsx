import "./Dashboard.css"
import React from "react"
import {Outlet} from "react-router-dom"
import Navbar from "../../../Components/Navbar/Navbar"
import Sidebar from "../../../Components/Sidebar/Sidebar"

const Dashboard = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-2 col-sm-5 col-md-4 col-lg-3 maxh-100 row overflow-visible">
					<Sidebar />
				</div>
				<div className="col container ps-0">
					<Navbar />
					<div className="row">
						<div className="col px-4 py-2">
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard