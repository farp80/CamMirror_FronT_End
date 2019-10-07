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
						<h1 className="mb-5">Welcome to Cam Mirror</h1>
						<p>
							Are you tired of holding your phone in the mirror to take a picture? Do not want to deal
							with those selfie sticks? Well you are in luck, We Are Cam Mirror!, and we solve your
							problems.
						</p>
						<p>
							Cam Mirror allows you take pictures and videos with a simple click or using google voice
							commands.
						</p>
						<p>
							The fun does not stop there; we created features such as: album creation so you can organize
							all your pictures and videos in albums, send your pictures to UPS, Fedex Kinkos to print
							them, etc.
						</p>
						<p>
							Worry about security? Your profile is secure in Cam Mirror. Do not wait longer and become a
							member of the Cam Mirror family, and you can enjoy even more perks listed in our membership
							page.
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
