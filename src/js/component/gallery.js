import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Avatar from "react-avatar-edit";
import ProfilePic from "../component/profilePic.js";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export class Gallery extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const profile = store.profile;
					return (
						<React.Fragment>
							<nav className="navbar navbar-dark bg-dark mb-3">
								<Link to="/">
									<img
										src="https://mirrorme.be/wp-content/uploads/2019/05/T1.png"
										className="mirrorme"
									/>
								</Link>
								<div className="ml-auto">
									<Link to="/membership">
										<span className="navbar-brand ml-3 mb-0 h1">Start Membership</span>
									</Link>
								</div>
								<button
									onClick={() => actions.logOut()}
									type="button"
									className="btn1 btn-primary form-control">
									Logout
									<i className="fas fa-sign-out-alt" />
								</button>
							</nav>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
Gallery.propTypes = {
	anyProp: PropTypes.any,
	history: PropTypes.object,
	match: PropTypes.object
};
