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

							<div className="container-fluid py-3">
								<div className="row">
									<div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
										<div id="pay-invoice" className="card">
											<div className="card-body">
												<div className="card-title">
													<h3 className="text-center">Pay Invoice</h3>
												</div>
												<hr>
													<form
														action="/echo"
														method="post"
														noValidate="novalidate"
														className="needs-validation">
														<div className="form-group text-center">
															<ul className="list-inline">
																<li className="list-inline-item">
																	<i className="text-muted fa fa-cc-visa fa-2x" />
																</li>
																<li className="list-inline-item">
																	<i className="fa fa-cc-mastercard fa-2x" />
																</li>
																<li className="list-inline-item">
																	<i className="fa fa-cc-amex fa-2x" />
																</li>
																<li className="list-inline-item">
																	<i className="fa fa-cc-discover fa-2x" />
																</li>
															</ul>
														</div>
														<div className="form-group">
															<label className="cc-payment control-label mb-1">
																Payment amount
															</label>
															<input
																id="cc-payment"
																name="cc-payment"
																type="text"
																className="form-control"
																aria-required="true"
																aria-invalid="false"
																required
																value="9.99"
															/>
															<span className="invalid-feedback">
																Enter the payment amount
															</span>
														</div>
														<div className="form-group has-success">
															<label className="cc-name control-label mb-1">
																Name on card
															</label>
															<input
																id="cc-name"
																name="cc-name"
																type="text"
																className="form-control cc-name"
																required
																autoComplete="cc-name"
																aria-required="true"
																aria-invalid="false"
																aria-describedby="cc-name-error"
															/>
															<span className="invalid-feedback">
																Enter the name as shown on credit card
															</span>
														</div>
														<div className="form-group">
															<label className="cc-number control-label mb-1">
																Card number
															</label>
															<input
																id="cc-number"
																name="cc-number"
																type="tel"
																className="form-control cc-number identified visa"
																required=""
																pattern="[0-9]{16}"
															/>
															<span className="invalid-feedback">
																Enter a valid 16 digit card number
															</span>
														</div>
														<div className="row">
															<div className="col-6">
																<div className="form-group">
																	<label className="cc-exp control-label mb-1">
																		Expiration
																	</label>
																	<input
																		id="cc-exp"
																		name="cc-exp"
																		type="tel"
																		className="form-control cc-exp"
																		required
																		placeholder="MM / YY"
																		autoComplete="cc-exp"
																	/>
																	<span className="invalid-feedback">
																		Enter the expiration date
																	</span>
																</div>
															</div>
															<div className="col-6">
																<label className="x_card_code control-label mb-1">
																	Security code
																</label>
																<div className="input-group">
																	<input
																		id="x_card_code"
																		name="x_card_code"
																		type="tel"
																		className="form-control cc-cvc"
																		required
																		autoComplete="off"
																	/>
																	<span className="invalid-feedback order-last">
																		Enter the 3-digit code on back
																	</span>
																	<div className="input-group-append">
																		<div className="input-group-text">
																			<span
																				className="fa fa-question-circle fa-lg"
																				data-toggle="popover"
																				data-container="body"
																				data-html="true"
																				data-title="Security Code"
																				data-content="<div className='text-center one-card'>The 3 digit code on back of the card..<div className='visa-mc-cvc-preview'></div></div>"
																				data-trigger="hover"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="form-group">
															<label className="x_zip control-label mb-1">
																Postal code
															</label>
															<input
																id="x_zip"
																name="x_zip"
																type="text"
																className="form-control"
																value=""
																data-val="true"
																data-val-required="Please enter the ZIP/Postal code"
																autoComplete="postal-code"
															/>
															<span
																className="help-block"
																data-valmsg-for="x_zip"
																data-valmsg-replace="true"
															/>
														</div>
														<div>
															<button
																id="payment-button"
																type="submit"
																className="btn btn-lg btn-info btn-block">
																<i className="fa fa-lock fa-lg" />
																&nbsp;
																<span id="payment-button-amount">Pay $9.99</span>
																<span id="payment-button-sending" style="display:none;">
																	Sending…
																</span>
															</button>
														</div>
													</form>
												</hr>
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
