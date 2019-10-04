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
							<Link to="/profilePic">
								<img src="https://mirrorme.be/wp-content/uploads/2019/05/T1.png" className="mirrorme" />
							</Link>
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
