import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import "../../styles/profile.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Avatar from "react-avatar-edit";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export class User extends React.Component {
	constructor() {
		super();
		this.toggle = this.toggle.bind(this);
		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			password: null
		};
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	onChangeFirstName = e => this.setState({ firstName: e.target.value });
	onChangeLastName = e => this.setState({ lastName: e.target.value });
	onChangeEmail = e => this.setState({ email: e.target.value });
	onChangePassword = e => this.setState({ password: e.target.value });

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container user-settings-width">
							<FormGroup>
								<Label for="firstName">First Name</Label>
								<Input
									type="text"
									name="firstName"
									id="firstName"
									onChange={this.onChangeFirstName}
									defaultValue={store.profile.first_name}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="lastName">Last Name</Label>
								<Input
									type="text"
									name="lastName"
									id="lastName"
									onChange={this.onChangeLastName}
									defaultValue={store.profile.last_name}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input
									type="email"
									name="email"
									id="email"
									onChange={this.onChangeEmail}
									defaultValue={store.profile.email}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input
									type="password"
									name="password"
									id="password"
									onChange={this.onChangePassword}
									defaultValue={store.profile.password}
								/>
							</FormGroup>
							<Button
								color="primary"
								onClick={() =>
									actions.updateProfile(
										this.state.firstName === null ? store.profile.first_name : this.state.firstName,
										this.state.lastName === null ? store.profile.last_name : this.state.lastName,
										this.state.email === null ? store.profile.email : this.state.email,
										this.state.password === null ? store.profile.password : this.state.password,
										this.props.history
									)
								}>
								Submit
							</Button>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

User.propTypes = {
	anyProp: PropTypes.any,
	history: PropTypes.object,
	match: PropTypes.object
};
