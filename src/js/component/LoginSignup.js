import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class LoginSignup extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<React.Fragment>
							<div className="login">
								<form>
									<div className="form-group">
										<label className="exampleInputEmail1">Email address</label>
										<input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Enter email"
										/>
										<small id="emailHelp" className="form-text text-muted">
											We will never share your email with anyone else.
										</small>
									</div>
									<div className="form-group">
										<label className="exampleInputPassword1">Password</label>
										<input
											type="password"
											className="form-control"
											id="exampleInputPassword1"
											placeholder="Password"
										/>
									</div>
									<button type="submit" className="btn btn-primary">
										Login
									</button>
									<Link to="/">
										<a href="#"> home</a>
									</Link>
								</form>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
