import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Avatar from "react-avatar-edit";
/*import Konva from "konva/lib/Core";
import { Rect } from "konva/lib/shapes/Rect";
import { Circle } from "konva/lib/shapes/Circle";
import { Image } from "konva/lib/shapes/Image";
import { Path } from "konva/lib/shapes/Path";
import { DragAndDrop } from "konva/lib/DragAndDrop";
import { Animation } from "konva/lib/Animation";*/

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

	onBeforeFileLoad(elem) {
		if (elem.target.files[0].size > 71680) {
			alert("File is too big!");
			elem.target.value = "";
		}
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
