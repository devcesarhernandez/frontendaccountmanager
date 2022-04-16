import React from 'react'
import {
	Routes,
	Route,
} from "react-router-dom"
import Auth from "./Routes/Auth/Auth"
import Home from "./Routes/Home/Home"
import ModalProvider from "./Context/ModalContext/ModalContext"
import SnackbarProvider from "./Context/SnackbarContext/SnackbarContext"

function App() {
	return (
		<SnackbarProvider>
			<Auth />
			<ModalProvider>
				<Home />
			</ModalProvider>
		</SnackbarProvider>
  	);
}

export default App;