import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
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
				<div className="container">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h1 className="display-4 text-center">Welcome!</h1>
							<p className="lead text-center">This is a where perfect selfies are made.</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Try For Free</h5>
									<p className="card-text">
										Want to see the possibilites? Start your free trial today.
									</p>
									<button className="btn btn-primary">
										<i className="fas fa-camera" />
									</button>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
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
