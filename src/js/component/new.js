import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

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
						<div className="container">hello</div>
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
