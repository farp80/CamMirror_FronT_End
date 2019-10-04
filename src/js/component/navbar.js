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
			<nav className="navbar navbar-dark bg-dark mb-3">
				<Link to="/">
					<img src="https://mirrorme.be/wp-content/uploads/2019/05/T1.png" className="mirrorme" />
				</Link>

				<div className="ml-auto">
					<Link to="/about">
						<span className="navbar-brand ml-3 mb-0 h1">About Us</span>
					</Link>

					<Context.Consumer>
						{({ store, actions }) => {
							{
								if (store.token === null) {
									return (
										<Link to="/login">
											<button type="button" className="btn1 btn-primary btn-sm form-control">
												                                                                                                                                        Login
												<i className="fas fa-lock mr-1" />
											</button>
										</Link>
									);
								} else {
									return (
										<Link to="/">
											<button
												onClick={() => actions.logOut()}
												type="button"
												className="btn btn-dark">
												                                                                                                                                Logout
												<i className="fas fa-sign-out-alt" />
											</button>
										</Link>
									);
								}
							}
						}}
					</Context.Consumer>

					<Context.Consumer>
						{({ store, actions }) => {
							{
								if (store.token === null) {
									return <div />;
								} else {
									return (
										<Link to="/membership">
											<span className="navbar-brand ml-3 mb-0 h1">Start Membership</span>
										</Link>
									);
								}
							}
						}}
					</Context.Consumer>
				</div>
			</nav>
		);
	}
}
