import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Membership extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store }) => {
					return (
						<React.Fragment>
							<div className="membership-benefits">
								<h1>As a member you will enjoy full access to Mirror Me with benefits listed below</h1>
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
											<label className="validationDefaultUsername">Username</label>
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text" id="inputGroupPrepend2">
														@
													</span>
												</div>
												<input
													type="text"
													className="form-control"
													id="validationDefaultUsername"
													placeholder="Username"
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
									<div className="form-group">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="invalidCheck2"
												required
											/>
											<label className="form-check-label invalidCheck2">
												Agree to terms and conditions
											</label>
										</div>
									</div>
									<button className="btn btn-primary" type="submit">
										Submit form
									</button>
								</form>
							</div>

							<div className="container">
								<form className="form-horizontal" role="form">
									<fieldset>
										<legend>Payment</legend>
										<div className="form-group">
											<label className="col-sm-3 control-label" htmlFor="card-holder-name">
												Name on Card
											</label>
											<div className="col-sm-9">
												<input
													type="text"
													className="form-control"
													name="card-holder-name"
													id="card-holder-name"
													placeholder="Card Holder's Name"
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label" htmlFor="card-number">
												Card Number
											</label>
											<div className="col-sm-9">
												<input
													type="text"
													className="form-control"
													name="card-number"
													id="card-number"
													placeholder="Debit/Credit Card Number"
												/>
											</div>
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label" htmlFor="expiry-month">
												Expiration Date
											</label>
											<div className="col-sm-9">
												<div className="row">
													<div className="col-xs-3">
														<select
															className="form-control col-sm-2"
															name="expiry-month"
															id="expiry-month">
															<option>Month</option>
															<option value="01">Jan (01)</option>
															<option value="02">Feb (02)</option>
															<option value="03">Mar (03)</option>
															<option value="04">Apr (04)</option>
															<option value="05">May (05)</option>
															<option value="06">June (06)</option>
															<option value="07">July (07)</option>
															<option value="08">Aug (08)</option>
															<option value="09">Sep (09)</option>
															<option value="10">Oct (10)</option>
															<option value="11">Nov (11)</option>
															<option value="12">Dec (12)</option>
														</select>
													</div>
													<div className="col-xs-3">
														<select className="form-control" name="expiry-year">
															<option value="13">2013</option>
															<option value="14">2014</option>
															<option value="15">2015</option>
															<option value="16">2016</option>
															<option value="17">2017</option>
															<option value="18">2018</option>
															<option value="19">2019</option>
															<option value="20">2020</option>
															<option value="21">2021</option>
															<option value="22">2022</option>
															<option value="23">2023</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label" htmlFor="cvv">
												Card CVV
											</label>
											<div className="col-sm-3">
												<input
													type="text"
													className="form-control"
													name="cvv"
													id="cvv"
													placeholder="Security Code"
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-sm-offset-3 col-sm-9">
												<button type="button" className="btn btn-success">
													Pay Now
												</button>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
