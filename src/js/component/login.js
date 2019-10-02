import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import SignUp from "../component/signup.js";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";

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
				{({ store, actions }) => {
					return (
						<React.Fragment>
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
									type="button"
									className="btn btn-primary"
									onClick={() =>
										actions.onLogin(this.state.email, this.state.password, this.props.history)
									}>
									Login
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
Login.propTypes = {
	history: PropTypes.object
};
