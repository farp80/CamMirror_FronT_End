import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<nav className="navbar navbar-dark bg-dark mb-3">
							<Link to="/">
								<img src="https://mirrorme.be/wp-content/uploads/2019/05/T1.png" className="mirrorme" />
							</Link>
							<div className="ml-auto">
								{store.token == null ? (
									<Link to="/login">
										<button
											// onClick={() => actions.logIn()}
											type="button"
											className="btn1 btn-primary btn-sm form-control">
											Login
											<i className="fas fa-lock mr-1" />
										</button>
									</Link>
								) : (
									<Link to="/">
										<button
											onClick={() => actions.logOut()}
											type="button"
											className="btn1 btn-primary btn-sm form-control">
											Logout
											<i className="fas fa-sign-out-alt" />
										</button>
									</Link>
								)}
								<Link to="/about">
									<span className="navbar-brand ml-3 mb-0 h1">About Us</span>
								</Link>
								<Link to="/membership">
									<span className="navbar-brand ml-3 mb-0 h1">Start Membership</span>
								</Link>
							</div>
							<Link to="/">
								<button onClick={() => actions.logOut()} type="button" className="btn1 btn-dark">
									Logout
									<i className="fas fa-sign-out-alt" />
								</button>
							</Link> */}
						</nav>
					);
				}}
			</Context.Consumer>
		);
	}
}
