const getState = ({ getStore, getActions, setStore }) => {
	const backend_url = process.env.BACKENDURL;
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
			logOut: () => {
				setStore({ token: null, currentUserId: null });
			},
			isButtonEnabled: (first_name, last_name, email, password) => {
				console.log("BUTTON STATE");
				return first_name === "" || last_name === "" || email === "" || password === "";
			},
			deleteProfile: currentUserId => {
				fetch(
					backend_url + "/profile/" + store.currentUserId,
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
				fetch(backend_url + "/profile/" + store.currentUserId, {
					method: "PUT",
					headers: { "Content-Type": "Application/json", authorization: "Bearer " + store.token },
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						password: password
					})
				});
				fetch(backend_url + "/profile/" + store.currentUserId)
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
				fetch(backend_url + "/membership", {
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
				fetch(backend_url + "/signup", {
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
				fetch("http://10.10.3.33:5000/start")
					.then(response => response.json())
					.then(data => {
						if (data.msg === "Started") {
							console.log("STARTED");
						}
					})
					.then(async () => {
						const resp = await fetch("http://10.10.3.33:5000/take");
						if (resp.status === 200) {
							return resp.json();
						} else {
							throw new Error("Incorrect Profile usage");
						}
					})
					.then(async () => {
						const resp = await fetch("http://10.10.3.33:5000/end");
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
				fetch(backend_url + "/login", {
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
						const resp = await fetch(backend_url + "/profile", {
							method: "POST",
							body: JSON.stringify({
								user_id: store.currentUserId
							}),
							headers: {
								"Content-Type": "application/json",
								authorization: "Bearer " + store.token
							}
						});
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
						history.push("/profile");
					})
					.catch(error => {
						console.log("## PROFILES", error);
					});
			}
		}
	};
};

export default getState;
