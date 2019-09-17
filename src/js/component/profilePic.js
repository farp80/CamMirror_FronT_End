import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Avatar from "react-avatar-edit";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export class ProfilePic extends React.Component {
	constructor(props) {
		super(props);
		const src = "https://lightningdesignsystem.com/assets/images/avatar2.jpg";
		this.state = {
			preview: null,
			src
		};
		this.onCrop = this.onCrop.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	onClose() {
		this.setState({ preview: null });
	}

	onCrop(preview) {
		this.setState({ preview });
	}

	render() {
		return (
			<React.Fragment>
				<div>
					<Avatar width={390} height={295} onCrop={this.onCrop} onClose={this.onClose} src={this.state.src} />
					<img src={this.state.preview} alt="Preview" />
				</div>
			</React.Fragment>
		);
	}
}
