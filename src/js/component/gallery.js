import React from "react";
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
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						{
							let currentProfile = store.profile;
							return currentProfile.unique_picture_mapping.map((item, index) => {
								return (
									<div className="row" key={item.id}>
										<i className="far fa-folder" key={item.id}>
											<Link to={"/single/" + item.id}>
												<a href="#"> {item.folder}</a>
											</Link>
										</i>
									</div>
								);
							});
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}
Gallery.propTypes = {
	anyProp: PropTypes.any,
	history: PropTypes.object,
	match: PropTypes.object
};
