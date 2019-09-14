const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: []
		},
		actions: {
			onSignup: (email, password) => {
				let settings = {
					email: email,
					password: password
				};
				fetch("https://3000-cd297974-45e7-473e-ba1d-0900b3f3d039.ws-us1.gitpod.io/signup", {
					method: "POST",
					body: JSON.stringify(settings),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						if (data.msg == "User Already Exists") {
							setStore({ errorStatus: data.msg });
						}
					})
					.catch(error => {
						console.log(error);
					});
			},

			onLogin: (email, password) => {
				history.push("/profile");
			}
		}
	};
};

export default getState;
