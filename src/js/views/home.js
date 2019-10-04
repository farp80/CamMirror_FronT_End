import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export class Home extends React.Component {
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
			<React.Fragment>
				<div className="container" />
				<div className="container homeBackgroundPic">
					<div className="jumbotron jumbotron">
						<div className="container">
							<h1 className="display-4 text-center">Welcome!</h1>
							<p className="lead text-center">This is where your selfies do not need your hands.</p>
						</div>
					</div>
				</div>
				<div className="container mt-4">
					<div className="row">
						<div className="col-sm-6 pl-0">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Signup For Free</h5>
									<p className="card-text">
										Want to see the possibilites? Start your free trial today.
									</p>
									<button className="btn btn-secondary">
										<Link to="/signup">
											<i className="fas fa-camera" />
										</Link>
									</button>
								</div>
							</div>
						</div>
						<div className="col-sm-6 pr-0">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Contact Us</h5>
									<p className="card-text">Want to get in touch with us? Cick below.</p>
									<Button id="Popover1" type="button">
										Email Us!
									</Button>
									<Popover
										placement="bottom"
										isOpen={this.state.popoverOpen}
										target="Popover1"
										toggle={this.toggle}>
										<PopoverHeader>Email questions to</PopoverHeader>
										<PopoverBody>desravines1100@yahoo.com</PopoverBody>
									</Popover>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
