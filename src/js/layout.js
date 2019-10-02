import React from "react";
import Avatar from "react-avatar-edit";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Membership } from "./component/membership";
import { Login } from "./component/login";

import { Profile } from "./component/profile";
import { Gallery } from "./component/gallery";
import { ProfilePic } from "./component/profilePic";
import { User } from "./component/user";
import { About } from "./component/about";
import { Signup } from "./component/signup";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		//const basename = process.env.BASENAME || "";
		const basename = "";
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/membership" component={Membership} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/gallery" component={Gallery} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/profilePic" component={ProfilePic} />
							<Route exact path="/user" component={User} />
							<Route exact path="/about" component={About} />
							<Route exact path="/signup" component={Signup} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>

						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
