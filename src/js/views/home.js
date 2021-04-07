import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="background">
			<h2 className="header">CHARACTERS</h2>
			<div className="row cardrow mx-auto">
				{store.people.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/200x200.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<Link to="/details" className="btn btn-dark">
										Learn more!
									</Link>
									<a href="#" className="btn btn-warning float-right">
										<i className="fas fa-heart"></i>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h2 className="header">PLANETS</h2>
			<div className="row cardrow mx-auto">
				{store.planets.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/200x200.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<Link to="/details" className="btn btn-dark">
										Learn more!
									</Link>
									<a href="#" className="btn btn-warning float-right">
										<i className="fas fa-heart"></i>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<h2 className="header">STARTSHIPS</h2>
			<div className="row cardrow mx-auto">
				{store.starships.map((item, index) => {
					return (
						<div className="col" key={index}>
							<div className="card" style={{ width: "18rem" }}>
								<img src="http://placehold.jp/200x200.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<Link to="/details" className="btn btn-dark">
										Learn more!
									</Link>
									<a href="#" className="btn btn-warning float-right">
										<i className="fas fa-heart"></i>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
