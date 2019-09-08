import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Mirror Me</span>
				</Link>
				<div className="ml-auto">
					<Link to="/loginsignup">
						<span className="navbar-brand mb-0 h1">
							<i className="fas fa-lock mr-1" />
							Log in
						</span>
					</Link>

					<Link to="/membership">
						<span className="navbar-brand ml-3 mb-0 h1">Membership</span>
					</Link>
				</div>
			</nav>
		);
	}
}
