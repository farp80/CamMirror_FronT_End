import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export class New extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: false
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
					<React.Fragment>
						<div className="container" />
						<div className="bodyb">
							<div className="container">
								{/*<div className="card bg-dark text-white">
							<img
								src="http://granyflats.co/wp-content/uploads/2019/03/bathroom-mirror-tv-touch-screen-anti-fog-touch-screen-magic-mirror-silver-color-inch-for-bathroom-home-decorations-christmas-gifts.jpg"
								className="card-img"
								width="cover"
								height="cover"
							/>
							<div className="card-img-overlay">
								<h1 className="card-title">Welcome</h1>
								<p className="card-text">User photo and User_Name to go here.</p>
								<p className="card-text">Last updated 3 mins ago</p>
							</div>
						</div>*/}
								<div className="jumbotronb jumbotron-fluid">
									<div className="container">
										{/*<img
									src="http://granyflats.co/wp-content/uploads/2019/03/bathroom-mirror-tv-touch-screen-anti-fog-touch-screen-magic-mirror-silver-color-inch-for-bathroom-home-decorations-christmas-gifts.jpg"
									className="card-img"
								/>*/}
										<h1 className="display-4 text-center">{"Welcome! " + profile.first_name}</h1>
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
													<i className="fas fa-camera" />
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
					</React.Fragment>;
				}}
			</Context.Consumer>
		);
	}
}

New.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
