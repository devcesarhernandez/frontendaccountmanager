import React from 'react'
import {
	Routes,
	Route,
} from "react-router-dom"
import Auth from "./Routes/Auth/Auth"
import Account from "./Routes/Account/Account"
import Platform from "./Routes/Platforms/Platform"
import Category from "./Routes/Categories/Category"
import SnackbarProvider from "./Context/SnackbarContext/SnackbarContext"
import ModalProvider from "./Context/ModalContext/ModalContext"

function App() {
	return (
		<SnackbarProvider>
			<Auth />
			<ModalProvider>
				<Account />
				<Category />
				<Platform />
			</ModalProvider>
		</SnackbarProvider>
  	);
}

export default App;