import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import "../../styles/home.scss";

export class Membership extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div className="container">
								<nav className="navbar navbar-dark bg-dark mb-3">
									<Link to="/">
										<img
											src="https://mirrorme.be/wp-content/uploads/2019/05/T1.png"
											className="mirrorme"
										/>
									</Link>
									<div className="ml-auto">
										<Link to="/about">
											<span className="navbar-brand ml-3 mb-0 h1">About Us</span>
										</Link>
									</div>
								</nav>
							</div>

							<div className="container" />
							<div className="container">
								<div className="row col-12">
									<div className="membership-benefits mt-5 mb-5">
										<h1>
											As a member you will enjoy full access to Mirror Me with benefits listed
											below
										</h1>
										<ul>
											<li>unlimited picture and video taking</li>
											<li>you will be able to save and edit all your pictures and videos</li>
											<li>upload pictures to your social media for posting</li>
										</ul>
										<h1>All these benefits for a small price of just $9.99 a month</h1>
									</div>
									<div classNmae="membership-form">
										<form>
											<div className="form-row">
												<div className="col-md-4 mb-3">
													<label className="validationDefault01">First name</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault01"
														placeholder="First name"
														required
													/>
												</div>
												<div className="col-md-4 mb-3">
													<label className="validationDefault02">Last name</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault02"
														placeholder="Last name"
														required
													/>
												</div>
												<div className="col-md-4 mb-3">
													<label className="validationDefaultEmail">Email</label>
													<div className="input-group">
														<div className="input-group-prepend" />
														<input
															type="text"
															className="form-control"
															id="validationDefaultEmail"
															placeholder="Email"
															aria-describedby="inputGroupPrepend2"
															required
														/>
													</div>
												</div>
											</div>
											<div className="form-group">
												<label htmlFor="inputAddress">Address</label>
												<input
													type="text"
													className="form-control"
													id="inputAddress"
													placeholder="Address"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="inputAddress2">Address 2</label>
												<input
													type="text"
													className="form-control"
													id="inputAddress2"
													placeholder="Address 2"
												/>
											</div>
											<div className="form-row">
												<div className="col-md-6">
													<label className="validationDefault03">City</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault03"
														placeholder="City"
														required
													/>
												</div>
												<div className="col-md-3 mb-3">
													<label className="validationDefault04">State</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault04"
														placeholder="State"
														required
													/>
												</div>
												<div className="col-md-3 mb-3">
													<label className="validationDefault05">Zip</label>
													<input
														type="text"
														className="form-control"
														id="validationDefault05"
														placeholder="Zip"
														required
													/>
												</div>
											</div>
										</form>
									</div>
									<div className="container">
										<div className="row">
											<div className="span12">
												<form className="form-horizontal span6">
													<fieldset>
														<legend>Payment</legend>

														<div className="control-group">
															<label className="control-label">Card Holder Name</label>
															<div className="controls">
																<input
																	type="text"
																	className="input-block-level"
																	pattern="\w+ \w+.*"
																	title="Fill your first and last name"
																	required
																/>
															</div>
														</div>

														<div className="control-group">
															<label className="control-label">Card Number</label>
															<div className="controls">
																<div className="row-fluid">
																	<div className="span3">
																		<input
																			type="text"
																			className="input-block-level"
																			autoComplete="off"
																			maxLength="4"
																			pattern="\d{4}"
																			title="First four digits"
																			required
																		/>
																	</div>
																</div>
															</div>
														</div>

														<div className="control-group">
															<label className="control-label">Card Expiry Date</label>
															<div className="controls">
																<div className="row-fluid">
																	<div className="span9">
																		<select className="input-block-level">
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
																		</select>
																	</div>
																	<div className="span3">
																		<select className="input-block-level">
																			<option>2019</option>
																			<option>2020</option>
																			<option>2021</option>
																			<option>2022</option>
																			<option>2023</option>
																			<option>2024</option>
																			<option>2025</option>
																		</select>
																	</div>
																</div>
															</div>
														</div>

														<div className="control-group">
															<label className="control-label">Card CVV</label>
															<div className="controls">
																<div className="row-fluid">
																	<div className="span3">
																		<input
																			type="text"
																			className="input-block-level"
																			autoComplete="off"
																			maxLength="3"
																			pattern="\d{3}"
																			title="Three digits at back of your card"
																			required
																		/>
																	</div>
																	<div className="span8" />
																</div>
															</div>
														</div>

														<div className="form-actions">
															<button type="submit" className="btn btn-primary mt-3">
																Submit
															</button>
														</div>
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
