import { store } from 'react-notifications-component';

export const errorMessage = (message) => {

    console.log("Invalid "+message);
	store.addNotification({
		message: message,
		type: "danger",
		insert: "top",
		width:450,
		container: "top-center",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 5000,
			onScreen: false
		}
	});
}
