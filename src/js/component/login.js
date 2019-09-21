import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import SignUp from "../component/signup.js";

import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	onChangeEmail = e => this.setState({ email: e.target.value });
	onChangePassword = e => this.setState({ password: e.target.value });

	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<React.Fragment>
							<div className="container">
								<nav className="navbar navbar-dark bg-dark mb-3">
									<Link to="/">
										<img
											src="https://mirrorme.be/wp-content/uploads/2019/05/T1.png"
											className="mirrorme"
										/>
									</Link>
									<div className="ml-auto">
										<Link to="/about">
											<span className="navbar-brand ml-3 mb-0 h1">About Us</span>
										</Link>
										<Link to="/membership">
											<span className="navbar-brand ml-3 mb-0 h1">Membership</span>
										</Link>
									</div>
								</nav>
							</div>

							<div className="login text-light">
								<div className="form-group">
									<label className="exampleInputEmail1">Email address</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
										onChange={this.onChangeEmail}
									/>
								</div>
								<div className="form-group">
									<label className="exampleInputPassword1">Password</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
										onChange={this.onChangePassword}
									/>
								</div>

								<button
									type="submit"
									className="btn btn-primary"
									onClick={() => actions.onLogin(this.state.email, this.state.password)}>
									{"Login"}
								</button>

								<Link to="/">
									<a href="#"> home</a>
								</Link>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
