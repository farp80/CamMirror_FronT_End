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

export class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: false,
			token: "",
			currentUserId: ""
		};
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const profile = store.profile;
					return (
						<React.Fragment>
							<div className="container" />
							<div className="bodyb">
								<div className="container">
									<div className="jumbotronb jumbotron-fluid">
										<div className="container">
											<h1 className="display-4 text-center">
												{"Welcome! " /*+ profile.first_name*/}
											</h1>
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
														<i className="fas fa-camera" />
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
													<p className="card-text">Want to link your voice control?</p>
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
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

Profile.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
