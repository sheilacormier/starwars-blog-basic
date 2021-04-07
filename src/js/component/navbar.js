import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark pb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG28.png"
						height="70"
						className="d-inline-block align-top"
						alt=""
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
