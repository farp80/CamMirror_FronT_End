import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Signup extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<React.Fragment>
							<div className="signup">
								<form>
									<div className="form-group">
										<label forHtml="exampleInputEmail1">Email address</label>
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
										<label forHtml="exampleInputPassword1">Create Password</label>
										<input
											type="password"
											className="form-control"
											id="exampleInputPassword1"
											placeholder="Password"
										/>
									</div>
									<div className="form-group form-check">
										<input type="checkbox" className="form-check-input" id="exampleCheck1" />
										<label className="form-check-label" forHtml="exampleCheck1">
											Check me out
										</label>
									</div>
									<button type="submit" className="btn btn-primary">
										Signup
									</button>
								</form>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
