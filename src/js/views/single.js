import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import "../../styles/profile.scss";

export class Single extends React.Component {
	render() {
		return (
			<div className="container">
				<Link to={"/profilePic"}>
					<a href="#"> Back</a>
				</Link>
				{/* <div className="card-deck"> */}
				<Context.Consumer>
					{({ store }) => {
						let profile = store.profile;
						// to find the selected folder Id
						let folderId = this.props.match.params.theid;
						let pictureFolderMapping = profile.unique_picture_mapping;
						let currentFolder = pictureFolderMapping.find(x => x.id == folderId);

						// to get all the urls linked to that folder
						let allPictureSettings = profile.profile_pic_settings;
						let allUrls = allPictureSettings.filter(x => x.pic_folder === currentFolder.folder);
						let increment = 0;
						return allUrls.map((item, index) => {
							// <div key={index} className="row">
							return (
								<div className="col-3" key={index}>
									<Card key={index} style={{ width: 18 + "rem" }}>
										<CardImg top width="50%" src={item.url} />
									</Card>
								</div>
							);
							// </div>
						});
					}}
				</Context.Consumer>
			</div>
			// </div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
