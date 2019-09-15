const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: [],
			users: []
		},
		actions: {
			onSignup: (first_name, last_name, email, password) => {
				let settings = {
					first_name: first_name,
					last_name: last_name,
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
							history.push("/login");
						}
					})
					.catch(error => {
						console.log(error);
					});
			},

			onLogin: (email, password) => {
				let settings = {
					email: email,
					password: password
				};
				fetch("https://3000-cd297974-45e7-473e-ba1d-0900b3f3d039.ws-us1.gitpod.io/login", {
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
					.catch(
						error => {
							// console.log(error);
						},

						fetch("https://3000-cd297974-45e7-473e-ba1d-0900b3f3d039.ws-us1.gitpod.io/login")
							.then(resp => resp.json())
							.then(data => {
								let store = getStore();

								setStore({ users: data });
								history.push("/profile/<int:user_id>");
							})
							.catch(error => {})
					);
			}
		}
	};
};

export default getState;
