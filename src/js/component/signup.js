import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: ""
		};
	}

	onErrorHandling = error => {
		if (error !== "") {
			return <div>{error}</div>;
		} else {
			return false;
		}
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div className="signup">
								<div className="form-group">
									<label forHtml="exampleInputName1">First Name</label>
									<input
										onChange={e => this.setState({ first_name: e.target.value })}
										type="first_name"
										className="form-control"
										id="exampleInputName1"
										aria-describedby="emailHelp"
										placeholder="First Name"
									/>
								</div>
								<div className="form-group">
									<label forHtml="exampleInputName2">Last Name</label>
									<input
										onChange={e => this.setState({ last_name: e.target.value })}
										type="last_name"
										className="form-control"
										id="exampleInputName2"
										aria-describedby="emailHelp"
										placeholder="Last Name"
									/>
								</div>
								<div className="form-group">
									<label forHtml="exampleInputEmail1">Email address</label>
									<input
										onChange={e => this.setState({ email: e.target.value })}
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Email"
									/>
								</div>
								<div className="form-group">
									<label forHtml="exampleInputPassword1">{"Create Password"}</label>
									<input
										onChange={e => this.setState({ password: e.target.value })}
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
								</div>
								<Link to="/login">
									<button
										type="submit"
										className="btn btn-primary"
										onClick={() =>
											actions.onSignup(
												this.state.first_name,
												this.state.last_name,
												this.state.email,
												this.state.password
											)
										}>
										{"Signup"}
									</button>
								</Link>
								{this.onErrorHandling(store.errorStatus)}
								<Link to="/">
									<a href="#"> {"Go Back Home"}</a>
								</Link>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
