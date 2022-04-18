import React from 'react'
import Auth from './Routes/Auth/Auth'
import Home from './Routes/Home/Home'
import UserProvider from './Context/UserContext/UserContext'
import ModalProvider from './Context/ModalContext/ModalContext'
import SnackbarProvider from './Context/SnackbarContext/SnackbarContext'

function App() {
	return (
		<UserProvider>
			<SnackbarProvider>
				<Auth />

				<ModalProvider>
					<Home />
				</ModalProvider>
			</SnackbarProvider>
		</UserProvider>
	);
}

export default App
