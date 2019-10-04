import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class About extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container about">
					<div className="row col-12">
						<h1 className="mb-5">Welcome to Mirror Me</h1>

						<p>
							Are you tired of holding your phone in the mirror to take a picture? Do not want to deal
							with those selfie sticks? Well you are in luck, We Are Mirror Me!, and will solve your
							problems.
						</p>
						<p>
							Mirror Me allows you take pictures and videos with a simple click or using google voice
							commands.
						</p>
						<p>
							The fun does not stop there; we created features such as: album creation so you can organize
							all your pictures and videos into one album, send your pictures to UPS, Fedex Kinkos to
							print them, etc.
						</p>
						<p>
							Worry about security? Your profile is secure in Mirror Me. Later you have the option to
							become a member of the Mirror Me family where you can enjoy even more perks listed in our
							membership page.
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
