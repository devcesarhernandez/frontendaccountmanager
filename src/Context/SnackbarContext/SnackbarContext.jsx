import React, {useState} from "react"
import SnackbarComponent from "../../Components/Snackbar/Snackbar"

export const SnackbarContext = React.createContext()

const SnackbarProvider = (props) => {
	const { children, ...propsSnackbar } = props
	const [snackbarProperties, setSnackbarProperties ] = useState({
		message: "",
		severity: "success"
	})
	const handleOpenSnackbar = (message, severity) => {
		setSnackbarProperties({ message, severity })
		var toastLiveExample = document.getElementById('liveToast')
		var toast = new bootstrap.Toast(toastLiveExample)
		toast.show()
	}
	return (
		<SnackbarContext.Provider value={{ handleOpenSnackbar }}>
			{ children }
			<SnackbarComponent 
				message={snackbarProperties.message} 
				type={snackbarProperties.severity}
			/>
		</SnackbarContext.Provider>
	)
}

export default SnackbarProvider