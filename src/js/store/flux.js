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

            createMembership: (name) => {
				let settings = {
					name: name,
				};
				fetch("https://3000-cd297974-45e7-473e-ba1d-0900b3f3d039.ws-us1.gitpod.io/profile/membership", {
					method: "POST",
					body: JSON.stringify(settings),
					headers: {
						"Content-Type": "application/json", authorization: "Bearer " + store.token
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
						setStore({ token: data.jwt, currentUserId: data.id });
					})
					.then(async () => {
						let store = getStore();
						const resp = await fetch(
							"https://3000-cd297974-45e7-473e-ba1d-0900b3f3d039.ws-us1.gitpod.io/profile/" +
								store.currentUserId,
							{
								method: "POST",
								body: JSON.stringify({
									user_id: currentUserId
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
						profile.first_name = data.first_name;
						profile.currentUserId = data.currentUserId;
						setStore({ profile: profile });
						history.push("/profile/" + store.currentUserId);
					})
					.catch(error => {
						console.log("## PROFILES", error);
					});
			}
		}
	};
};

export default getState;
