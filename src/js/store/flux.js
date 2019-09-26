const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			currentUserId: null,
			profile: {
				first_name: null,
				last_name: null,
				currentUserId: null,
				profileId: null,
				createdDate: null,
				updatedDate: null
			}
		},
		actions: {
			logOut: (token, currentUserId) => {
				setStore({ token: null, currentUserId: null });
				history.push("/");
			},
			isButtonEnabled: (first_name, last_name, email, password) => {
				console.log("BUTTON STATE");
				return first_name === "" || last_name === "" || email === "" || password === "";
			},
			deleteProfile: currentUserId => {
				fetch(
					"https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/profile/" + store.currentUserId,
					{
						method: "DELETE",
						headers: { "Content-Type": "Application/json", authorization: "Bearer " + store.token }
					}.then(data => {
						history.push("/");
					})
				).catch(error => {
					//console.log(error);
				});
			},

			updateProfile: (first_name, last_name, email, password, currentUserId) => {
				fetch(
					"https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/profile/" + store.currentUserId,
					{
						method: "PUT",
						headers: { "Content-Type": "Application/json", authorization: "Bearer " + store.token },
						body: JSON.stringify({
							first_name: first_name,
							last_name: last_name,
							email: email,
							password: password
						})
					}
				);
				fetch(
					"https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/profile/" + store.currentUserId
				)
					.then(resp => resp.json())
					.then(data => {
						let store = this.state.store;
						setStore({ token: data.jwt });
						history.push("/profile/" + store.currentUserId);
					})
					.catch(error => {
						//console.log(error);
					});
			},

			createMembership: name => {
				let settings = {
					name: name
				};
				fetch("https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/membership", {
					method: "POST",
					body: JSON.stringify(settings),
					headers: {
						"Content-Type": "application/json",
						authorization: "Bearer " + store.token
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
			onCameraPic: () => {
				console.log("$ READy to Take picture!!! ");
				fetch("http://192.168.0.110:5000/start")
					.then(response => response.json())
					.then(data => {
						if (data.msg === "Started") {
							console.log("STARTED");
						}
					})
					.then(async () => {
						const resp = await fetch("http://192.168.0.110:5000/take");
						if (resp.status === 200) {
							return resp.json();
						} else {
							throw new Error("Incorrect Profile usage");
						}
					})
					.then(async () => {
						const resp = await fetch("http://192.168.0.110:5000/end");
						if (resp.status === 200) {
							return resp.json();
						} else {
							throw new Error("Incorrect Profile usage");
						}
					})
					.catch(error => console.log(error));
			},

			onLogin: (email, password, history) => {
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
						setStore({ token: data.jwt, currentUserId: data.id });
					})
					.then(async () => {
						let store = getStore();
						const resp = await fetch(
							"https://3000-ff448188-62c4-4ee2-89a0-f5e507a5dc4c.ws-us1.gitpod.io/profile",
							{
								method: "POST",
								body: JSON.stringify({
									user_id: store.currentUserId
								}),
								headers: {
									"Content-Type": "application/json",
									authorization: "Bearer " + store.token
								}
							}
						);
						if (resp.status === 200) {
							return resp.json();
						} else {
							throw new Error("Incorrect Profile usage");
						}
					})
					.then(data => {
						let store = getStore();
						let profile = store.profile;
						console.log(
							"firstname" +
								data.first_name +
								" | " +
								data.last_name +
								" | " +
								data.created_date +
								" | " +
								data.currentUserId
						);
						profile.first_name = data.first_name;
						profile.last_name = data.last_name;
						profile.createdDate = data.created_date;
						profile.currentUserId = data.currentUserId;
						setStore({ profile: profile });
						history.push("/new");
					})
					.catch(error => {
						console.log("## PROFILES", error);
					});
			}
		}
	};
};

export default getState;
