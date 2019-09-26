import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class About extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<nav className="navbar navbar-dark bg-dark mb-3">
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
						</div>
					</nav>
				</div>
				<div className="container" />
				<div className="container about">
					<div className="row col-12">
						<h1 className="mb-5">Welcome to Mirror Me</h1>

						<p>
							Tired of holding your phone in the mirror to take a picture? Dont want to deal with those
							selfie sticks? Well youre in luck, our team here at Mirror Me have solved these problems.
						</p>
						<p>
							Mirror Me is an interactive mirror that takes pictures and videos with a simple click of a
							button on our app or using google voice commands.
						</p>
						<p>
							The fun doesnt stop there, we have created features like album creation so you can organize
							all your pictures into one album and videos in another.
						</p>
						<p>
							All this on your own personal user profile. Later you have the option to become a member of
							the Mirror Me family where you can enjoy even more perks listed in our membership page.
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
