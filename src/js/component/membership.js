import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import "../../styles/home.scss";

export class Membership extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedMember: ""
		};
	}
	render() {
		let bronzeExtraClass = "";
		let goldExtraClass = "";
		let platinumExtraClass = "";

		if (this.state.clickedMember === "bronze") {
			bronzeExtraClass = "selected";
		} else if (this.state.clickedMember === "gold") {
			goldExtraClass = "selected";
		} else if (this.state.clickedMember === "platinum") {
			platinumExtraClass = "selected";
		}

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
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
									</div>
									<div className="container member">
										<div className="row">
											<div
												className={"bronze col-4" + bronzeExtraClass}
												onClick={() => this.setState({ clickedMember: "bronze" })}>
												<h1>Bronze</h1>
												<ul>
													<li>Bronze membership $2.99 per month</li>
													<li>unlimited picture taking</li>
												</ul>
												<br />
												<img
													src="https://www.martialartextreme.com/wp-content/uploads/2018/12/BROWNS.png"
													className="img-member"
												/>
											</div>
											<div
												className={"gold col-4" + goldExtraClass}
												onClick={() => this.setState({ clickedMember: "gold" })}>
												<h1>Gold</h1>
												<ul>
													<li>Gold membership $4.99 per month</li>
													<li>unlimited picture taking</li>
													<li>unlimited video taking</li>
												</ul>
												<img
													src="http://ddiofbako.com/wp-content/uploads/2018/06/Gold-Membership.png"
													className="img-member"
												/>
											</div>
											<div
												className={"platinum col-4" + platinumExtraClass}
												onClick={() => this.setState({ clickedMember: "platinum" })}>
												<h1>Platinum</h1>
												<ul>
													<li>Platinum membership $9.99 per month</li>
													<li>unlimited picture taking</li>
													<li>unlimited video taking</li>
													<li>unlimited editing</li>
												</ul>
												<img
													src="https://cdn.shopify.com/s/files/1/1911/0179/products/platinum_600x600.png?v=1518721647"
													className="img-member"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="container mt-5">
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
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
