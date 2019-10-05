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
			password: null,
			membership: null
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
	onChangeMembership = e => this.setState({ membership: e.target.value });

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<FormGroup>
								<Label for="firstName">First Name</Label>
								<Input type="text" name="firstName" id="firstName" onChange={this.onChangeFirstName} />
							</FormGroup>
							<FormGroup>
								<Label for="lastName">Last Name</Label>
								<Input type="text" name="lastName" id="lastName" onChange={this.onChangeLastName} />
							</FormGroup>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input type="email" name="email" id="email" onChange={this.onChangeEmail} />
							</FormGroup>
							<FormGroup>
								<Label for="password">Password</Label>
								<Input type="password" name="password" id="password" onChange={this.onChangePassword} />
							</FormGroup>
							<FormGroup>
								<Label for="membership">Membership</Label>
								<Input
									type="select"
									name="membership"
									id="membership"
									onChange={this.onChangeMembership}>
									<option>Bronze</option>
									<option>Gold</option>
									<option selected>Platinum</option>
								</Input>
							</FormGroup>
							<Button>Submit</Button>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

// User.propTypes = {
// 	anyProp: PropTypes.any,
// 	history: PropTypes.object,
// 	match: PropTypes.object,
// 	isLoggedIn: PropTypes.object,
// 	clickFunc: PropTypes.func
// };mmmm
