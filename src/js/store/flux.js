const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: ""
		},
		actions: {
			logOut: () => {
				let store = this.state.store;
				setStore({ token: data.jwt });
				store.token = null;
			},

			delete: elementId => {
				fetch("https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/user/" + elementId, {
					method: "DELETE",
					headers: { "Content-Type": "Application/json" }
				}).catch(error => {
					//console.log(error);
				});
			},

			updateProfile: (first_name, last_name, email, password, elementId) => {
				fetch("https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/user/" + elementId, {
					method: "PUT",
					headers: { "Content-Type": "Application/json" },
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						password: password
					})
				});
				fetch("https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/user")
					.then(resp => resp.json())
					.then(data => {
						//console.log(data);
						let store = this.state.store;
						setStore({ token: data.jwt });
						history.push("/profile/" + elementId);
					})
					.catch(error => {
						//console.log(error);
					});
			},

			onSignup: (first_name, last_name, email, password) => {
				let settings = {
					first_name: first_name,
					last_name: last_name,
					email: email,
					password: password
				};
				fetch("https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/signup", {
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
				let settings = {
					email: email,
					password: password
				};
				fetch("https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/login", {
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
						// console.log(data.jwt);
						// let store = getStore;
						setStore({ token: data.jwt });
					})

					.then(() => {
						history.push("/profile/" + elementId);
					})

					.catch(error => {
						// console.log(error);
					});
			}
		}
	};
};

export default getState;
