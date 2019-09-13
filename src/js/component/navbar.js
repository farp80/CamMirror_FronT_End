import React from "react";
import { Link } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img src="https://mirrorme.be/wp-content/uploads/2019/05/T1.png" className="mirrorme" />
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<span className="navbar-brand mb-0 h1">
							<i className="fas fa-lock mr-1" />
							Log in
						</span>
					</Link>
					<Link to="/about">
						<span className="navbar-brand ml-3 mb-0 h1">About Us</span>
					</Link>
					<Link to="/membership">
						<span className="navbar-brand ml-3 mb-0 h1">Membership</span>
					</Link>
				</div>
			</nav>
		);
	}
}
