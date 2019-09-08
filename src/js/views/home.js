import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
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
			</React.Fragment>
		);
	}
}
