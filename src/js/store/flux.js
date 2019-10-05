const getState = ({ getStore, getActions, setStore }) => {
	const backend_url = process.env.BACKENDURL;
	const raspberry_ip = process.env.RASPBERRYIP;
	return {
		store: {
			profile_code: null,
			token: null,
			currentUserId: null,
			profile: {
				first_name: null,
				last_name: null,
				currentUserId: null,
				profileId: null,
				email: null,
				createdDate: null,
				updatedDate: null,
				cloudinary_folder: null,
				cloudinary_url: null,
				membership_name: null,
				card_holder_name: null,
				card_number: null,
				card_expiration_date: null,
				card_cvv: null,
				profile_pic_settings: null
			}
		},
		actions: {
			logOut: () => {
				setStore({ token: null, currentUserId: null });
			},
			isButtonEnabled: (first_name, last_name, email, password) => {
				return first_name === "" || last_name === "" || email === "" || password === "";
			},
			deleteProfile: () => {
				// TODO Fix body
				fetch(
					backend_url + "/profile",
					{
						method: "DELETE",
						headers: { "Content-Type": "Application/json", authorization: "Bearer " + store.token }
					}.then(data => {
						history.push("/");
					})
				).catch(error => {
					console.log(error);
				});
			},
			updateProfile: (first_name, last_name, email, password, history) => {
				let store = getStore();

				if (store.currentUserId !== null) {
					fetch(backend_url + "/profile", {
						method: "PUT",
						headers: {
							"Content-Type": "Application/json",
							authorization: "Bearer " + store.token
						},
						body: JSON.stringify({
							first_name: first_name,
							last_name: last_name,
							email: email,
							password: password,
							user_id: store.currentUserId
						})
					})
						.then(response => {
							return response.json();
						})
						.then(data => {
							console.log(" NEW FN: " + data.first_name);
							let store = getStore();
							let profile = store.profile;
							profile.first_name = data.first_name;
							profile.last_name = data.last_name;
							profile.email = data.email;
							profile.updatedDate = data.updated_date;
							setStore({ profile: profile });
							history.push("/profilePic");
						});
				} else {
					console.log(" You need to Login first.");
				}
			},
			createMembership: (
				membership_name,
				card_holder_name,
				card_number,
				card_expiration_month,
				card_expiration_year,
				card_cvv,
				history
			) => {
				let store = getStore();
				let settings = {
					membership_name: membership_name,
					card_holder_name: card_holder_name,
					card_number: card_number,
					card_expiration_date: card_expiration_month + "/" + card_expiration_year,
					card_cvv: card_cvv,
					user_id: store.currentUserId
				};
				// console.log("cefev", settings);
				// console.log("###", membership_name);

				fetch(backend_url + "/membership", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						authorization: "Bearer " + store.token
					},
					body: JSON.stringify(settings)
				})
					.then(response => {
						return response.json();
					})

					.then(data => {
						if (data.msg == "User Already Exists") {
							setStore({ errorStatus: data.msg });
						}
					});
				fetch(backend_url + "/membership")
					.then(resp => resp.json())
					.then(data => {
						let store = this.state.store;
						setStore({ profile: data });
						history.push("/profilePic");
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
				fetch("http://" + raspberry_ip + ":5000/start")
					.then(response => response.json())
					.then(data => {
						if (data.msg === "Started") {
							console.log("STARTED");
						}
					})
					.then(async () => {
						let store = getStore();
						const resp = await fetch("http://" + raspberry_ip + ":5000/take", {
							method: "POST",
							body: JSON.stringify({
								user_id: store.currentUserId,
								first_name: store.profile.first_name,
								last_name: store.profile.last_name
							}),
							headers: {
								"Content-Type": "application/json"
							}
						});
						if (resp.status === 200) {
							return resp.json();
						} else {
							throw new Error("Incorrect Profile usage");
						}
					})
					.then(async data => {
						let urlSplitted = data.result.secure_url.split("/");
						let store = getStore();

						if (urlSplitted.length > 9) {
							let profile = store.profile;
							profile.cloudinary_folder = urlSplitted[8];
							profile.cloudinary_url = data.result.secure_url;

							const resp = await fetch(backend_url + "/pictures", {
								method: "POST",
								body: JSON.stringify({
									user_id: store.currentUserId,
									folder: urlSplitted[8],
									url: data.result.secure_url,
									update_date: new Date(),
									date: new Date(urlSplitted[8])
								}),
								headers: {
									"Content-Type": "application/json"
								}
							});
							if (resp.status === 200) {
								setStore({ profile: profile });
								return resp.json();
							} else {
								throw new Error("Incorrect Profile usage");
							}
						} else {
							console.log(" Incorrect URL from Cloudinary");
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
						let store = getStore();
						store.token = data.jwt;
						store.currentUserId = data.id;
						store.profile.email = data.email;
						setStore({
							store: store
						});
					})
					// .then(() => {
					// 	fetch(backend_url + "/profile/" + store.currentUserId);
					// })
					// .then(response => response.json())
					// .then(data => {
					// 	let store = getStore();
					// 	console.log(" CODE: " + data.code);
					// 	store.profile_code = data.code;
					// 	setStore({ store: store });
					// })
					.then(async () => {
						let store = getStore();
						//TODO fix the get and post. If it is on the Table then update
						const codeAsInteger = parseInt(store.profile_code);

						//if (codeAsInteger === 100) {
						console.log(" NO MORE ADDITION");
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
						//}
					})
					.then(data => {
						let store = getStore();
						let profile = store.profile;

						profile.first_name = data.first_name;
						profile.last_name = data.last_name;
						profile.createdDate = data.created_date;
						profile.currentUserId = data.currentUserId;

						setStore({ profile: profile });
						history.push("/profilePic");
					})
					.catch(error => {
						console.log("PROFILE  ERROR: " + "\n", error);
					});
			},
			onGallery: () => {
				let store = getStore();
				let currentprofile = store.profile;
				fetch(backend_url + "/picture/" + store.currentUserId)
					.then(response => response.json())
					.then(data => {
						currentprofile.profile_pic_settings = data;
						setStore({ profile: currentprofile });
					});
			}
		}
	};
};

export default getState;
