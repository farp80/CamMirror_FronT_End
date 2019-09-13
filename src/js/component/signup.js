import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
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
									<label forHtml="exampleInputEmail1">Email address</label>
									<input
										onChange={e => this.setState({ email: e.target.value })}
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
									/>
									<small id="emailHelp" className="form-text text-muted">
										{"We will never share your email with anyone else."}
									</small>
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
								<div className="form-group form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1" />
									<label className="form-check-label" forHtml="exampleCheck1">
										{"Check me out"}
									</label>
								</div>
								<button
									type="submit"
									className="btn btn-primary"
									onClick={() => actions.onSignup(this.state.email, this.state.password)}>
									{"Signup"}
								</button>
								{this.onErrorHandling(store.errorStatus)}
								<Link to="/">
									<a href="#"> {"home"}</a>
								</Link>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
