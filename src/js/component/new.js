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
					return (
						<React.Fragment>
							<div className="container">
								<div>{"1 2 3 Trying..."}</div>
								<button className="btn btn-primary">
									<i className="fas fa-camera" onClick={() => actions.onCameraPic()} />
								</button>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

New.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
