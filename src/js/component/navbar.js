import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { logo } from "../../img/camlogo.jpg";

import PropTypes from "prop-types";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-dark bg-dark mb-3">
					<Link to="/">
						<img src={logo} />
					</Link>

					<div className="form-inline ">
						<Link to="/about">
							<span className="navbar-brand ml-3 mb-0 h1">About Us</span>
						</Link>

						<Context.Consumer>
							{({ store, actions }) => {
								{
									if (store.token === null) {
										return (
											<Link to="/login">
												<button type="button" className="btn1 btn-primary btn-sm form-control">
													<i className="fas fa-lock mr-1" />
													Login
												</button>
											</Link>
										);
									} else {
										return (
											<Link to="/">
												<button
													onClick={() => actions.logOut()}
													type="button"
													className="btn btn-dark">
													<i className="fas fa-sign-out-alt" />
													Logout
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
												<span className="navbar-brand ml-3 mb-0 hi">Start Membership</span>
											</Link>
										);
									}
								}
							}}
						</Context.Consumer>

						<Context.Consumer>
							{({ store, actions }) => {
								{
									if (store.membership_name === null) {
										return <div />;
									} else {
										return (
											<Link to="/membership">
												<h1>{store.profile.membership_name}</h1>
											</Link>
										);
									}
								}
							}}
						</Context.Consumer>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}
