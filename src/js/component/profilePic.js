import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/profile.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Avatar from "react-avatar-edit";
/*import Konva from "konva/lib/Core";
import { Rect } from "konva/lib/shapes/Rect";
import { Circle } from "konva/lib/shapes/Circle";
import { Image } from "konva/lib/shapes/Image";
import { Path } from "konva/lib/shapes/Path";
import { DragAndDrop } from "konva/lib/DragAndDrop";
import { Animation } from "konva/lib/Animation";*/

import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
//const profileImage = require("./images/user-profile.jpg");
export class ProfilePic extends React.Component {
	constructor(props) {
		super(props);
		const src = "https://lightningdesignsystem.com/assets/images/avatar2.jpg";
		this.state = {
			preview: {},
			src
		};
		this.onCrop = this.onCrop.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	onClose() {
		this.setState({ preview: null });
	}

	onCrop(preview) {
		this.setState({ preview });
	}

	onBeforeFileLoad(elem) {
		if (elem.target.files[0].size > 71680) {
			alert("File is too big!");
			elem.target.value = "";
		}
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const profile = store.profile;
					return (
						<React.Fragment>
							<div className="container" />
							<div className="container">
								<div className="row">
									<div className="col-md-3 profile">
										<div className="row rowHightest">
											<img
												src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
												alt="Logged in user pic"
												width="200"
											/>
										</div>
										<div className="row rowSmallerHeight">
											<div className="col-md3">
												Welcome{" "}
												{profile.first_name == null
													? ""
													: profile.first_name + " " + profile.last_name}
											</div>
										</div>
										<div className="row rowSmallerHeight">
											<div className="col-md-3">
												<Link to="/gallery">
													<button
														type="button"
														className="btn btn-success btn-sm"
														onClick={() => actions.onGallery()}>
														Gallery
													</button>
												</Link>
											</div>
											<div className="col-md-3">
												<button type="button" className="btn btn-success btn-sm">
													Profile Pic
												</button>
											</div>
										</div>
										<div className="row rowSmallerHeight">
											<div className="col-md-3 profile-usermenu">
												<ul className="nav">
													<li className="active" />
													<li>
														<button
															type="button"
															className="btn btn-outline-primary btn-sm">
															<i className="fas fa-users-cog" />
															<Link to="/user"> Settings</Link>
														</button>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-9">
										<div className="container" />
										<div className="container" />
										<div className="bodyb">
											<div className="container">
												<div className="jumbotronb jumbotron-fluid">
													<div className="container">
														<h1 className="display-4 text-center">{"Welcome!"}</h1>
														<p className="lead text-center">
															{"This is a where perfect selfies are made."}
														</p>
													</div>
												</div>
											</div>

											<div className="container">
												<div className="row">
													<div className="col-sm-4">
														<div className="card">
															<div className="card-body">
																<h5 className="card-title">Take a picture</h5>
																<p className="card-text">Worth a thousands words.</p>
																<button className="btn btn-primary">
																	<i
																		className="fas fa-camera"
																		onClick={() => actions.onCameraPic()}
																	/>
																</button>
															</div>
														</div>
													</div>
													<div className="col-sm-4">
														<div className="card">
															<div className="card-body">
																<h5 className="card-title">Take a Video</h5>
																<p className="card-text">Capture your experience.</p>
																<button className="btn btn-primary">
																	<i className="fas fa-video" />
																</button>
															</div>
														</div>
													</div>
													<div className="col-sm-4">
														<div className="card">
															<div className="card-body">
																<h5 className="card-title">Activate Voice control!</h5>
																<Button id="Popover1" className="btn btn-success">
																	<i className="fas fa-microphone-alt" />
																</Button>
																<Popover
																	placement="bottom"
																	isOpen={this.state.popoverOpen}
																	target="Popover1"
																	toggle={this.toggle}>
																	<PopoverHeader>Link Voice control</PopoverHeader>
																	<PopoverBody>Alexa / Google Assistant</PopoverBody>
																</Popover>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<center>
								<strong>Powered by </strong>
							</center>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
ProfilePic.propTypes = {
	anyProp: PropTypes.any,
	history: PropTypes.object,
	match: PropTypes.object
};
