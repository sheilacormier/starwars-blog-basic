import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="detailsbg">
			<div className="container mt-5 mb-5">
				{/* start description */}
				<div className="row">
					<div className="col mx-lg-n5">
						<img
							src="https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
							className="card-img-top"
						/>
					</div>
					<div className="col detailsdescription pt-4">
						<h3 className="detailsname">LUKE SKYWALKER</h3>
						<p>
							simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has survived not only five centuries,
							but also the leap into electronic typesetting, remaining essentially unchanged.
						</p>
						<Link to="/">
							<button className="btn btn-warning">Back home</button>
						</Link>
					</div>
				</div>
				{/* end description */}
				<div className="row mb-3 mt-4">
					<div className="col text-center detailsheader">NAME</div>
					<div className="col text-center detailsheader">BIRTH YEAR</div>
					<div className="col text-center detailsheader">GENDER</div>
					<div className="col text-center detailsheader">HEIGHT</div>
					<div className="col text-center detailsheader">SKIN COLOR</div>
					<div className="col text-center detailsheader">EYE COLOR</div>
				</div>
				<div className="row row mb-5 detailspadding">
					<div className="col text-center detailsattributes">Luke</div>
					<div className="col text-center detailsattributes">19XX</div>
					<div className="col text-center detailsattributes">male</div>
					<div className="col text-center detailsattributes">172</div>
					<div className="col text-center detailsattributes">fair</div>
					<div className="col text-center detailsattributes">blue</div>
				</div>
			</div>
		</div>
	);
};
