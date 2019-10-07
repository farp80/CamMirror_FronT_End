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
			membership_name: null,
			card_holder_name: null,
			card_number: null,
			card_expiration_month: null,
			card_expiration_year: null,
			card_cvv: null
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

	onChangeMembershipName = e => this.setState({ membership_name: e.target.value });
	onChangeCardHolderName = e => this.setState({ card_holder_name: e.target.value });
	onChangeCardNumber = e => this.setState({ card_number: e.target.value });
	onChangeCardExpirationMonth = e => this.setState({ card_expiration_month: e.target.value });
	onChangeCardExpirationYear = e => this.setState({ card_expiration_year: e.target.value });
	onChangeCardCvv = e => this.setState({ card_cvv: e.target.value });

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<div className="col-6">
									<h1>Profile</h1>
									<div className="container user-settings-width">
										<FormGroup>
											<Label for="firstName">First Name</Label>
											<Input
												type="text"
												name="firstName"
												id="firstName"
												onChange={this.onChangeFirstName}
												defaultValue={store.profile.first_name}
											/>
										</FormGroup>
										<FormGroup>
											<Label for="lastName">Last Name</Label>
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
													this.state.firstName === null
														? store.profile.first_name
														: this.state.firstName,
													this.state.lastName === null
														? store.profile.last_name
														: this.state.lastName,
													this.state.email === null ? store.profile.email : this.state.email,
													this.state.password === null
														? store.profile.password
														: this.state.password,
													this.props.history
												)
											}>
											Update
										</Button>
										<Link to="/profilePic">
											<div>
												<a href="#"> {"Go to Profile"}</a>
											</div>
										</Link>
									</div>
								</div>

								<div className="col-6">
									<h1>Membership</h1>
									<FormGroup>
										<Label for="lastName">Card Holder Name</Label>
										<Input
											type="text"
											name="cardHolderName"
											id="cardHolderName"
											onChange={this.onChangeCardHolderName}
											defaultValue={store.profile.card_holder_name}
										/>
									</FormGroup>
									<FormGroup>
										<Label for="email">Card Number</Label>
										<Input
											type="text"
											name="cardNumber"
											id="cardNumber"
											onChange={this.onChangeCardNumber}
											defaultValue={store.profile.card_number}
										/>
									</FormGroup>
									<FormGroup>
										<Label for="password">Card CVV</Label>
										<Input
											type="text"
											name="cardCvv"
											id="cardCvv"
											onChange={this.onChangeCardCvv}
											defaultValue={store.profile.card_cvv}
										/>
									</FormGroup>
									<FormGroup>
										<Label for="membership">Membership Type</Label>
										<Input
											type="select"
											name="membership"
											id="membership_type"
											onChange={this.onChangeMembershipName}
											defaultValue={store.profile.membership_name}>
											<option selected>--select--</option>
											<option>Bronze</option>
											<option>Gold</option>
											<option>Platinum</option>
										</Input>
									</FormGroup>
									<FormGroup>
										<Label for="expirationDate">Expiration Month</Label>
										<Input
											type="select"
											name="ExpirationDateOptions"
											id="expirationDate"
											onChange={this.onChangeCardExpirationMonth}
											defaultValue={store.profile.card_expiration_date}>
											<option selected>--select--</option>
											<option>January</option>
											<option>February</option>
											<option>March</option>
											<option>April</option>
											<option>May</option>
											<option>June</option>
											<option>July</option>
											<option>August</option>
											<option>September</option>
											<option>October</option>
											<option>November</option>
											<option>December</option>
										</Input>
									</FormGroup>
									<FormGroup>
										<Label for="expirationYear">Expiration Year</Label>
										<Input
											type="select"
											name="ExpirationYearOptions"
											id="expirationYear"
											onChange={this.onChangeCardExpirationYear}
											defaultValue={store.profile.card_expiration_date}>
											<option selected>--select--</option>
											<option>2019</option>
											<option>2020</option>
											<option>2021</option>
											<option>2022</option>
											<option>2023</option>
											<option>2024</option>
											<option>2025</option>
											<option>2026</option>
										</Input>
									</FormGroup>
									<Button
										color="primary"
										onClick={() =>
											actions.updateMembership(
												this.state.membership_name === null
													? store.profile.membership_name
													: this.state.membership_name,

												this.state.card_holder_name === null
													? store.profile.card_holder_name
													: this.state.card_holder_name,

												this.state.card_number === null
													? store.profile.card_number
													: this.state.card_number,

												this.state.card_expiration_month === null
													? store.profile.card_expiration_date
													: this.state.card_expiration_month,

												this.state.card_expiration_year === null
													? store.profile.card_expiration_date
													: this.state.card_expiration_year,

												this.state.card_cvv === null
													? store.profile.card_cvv
													: this.state.card_cvv,

												this.props.history
											)
										}>
										Update
									</Button>
									<Link to="/profilePic">
										<div>
											<a href="#"> {"Go to Profile"}</a>
										</div>
									</Link>
								</div>
							</div>
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
