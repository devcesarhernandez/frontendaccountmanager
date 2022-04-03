import React from 'react'
import {
	Routes,
	Route,
} from "react-router-dom"
import Auth from "./Routes/Auth/Auth"
import Category from "./Routes/Categories/Category"
import Platform from "./Routes/Platforms/Platform"

function App() {
	return (
		<>
			<Auth />
			<Category />
			<Platform />
		</>
  	);
}

export default App;