import React from "react";
import "./PageNotFound.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";

export default function PageNotFound() {
	const navigate = useNavigate();
	const handleNavigateToHomePage = () => {
		navigate("/");
	};
	return (
		<div className="pageNotFound-container">
			<div className="gradient__bg">
				<Navbar />
			</div>
			<div className="pageNotFound-subContainer">
				<div className="pageNotFound-para pageNotFound-404">404</div>
				<div className="pageNotFound-para pageNotFound-oops">Oops!</div>
				<div className="pageNotFound-para pageNotFound-text">
					Sorry, we can't find the page you are looking for, but you
					can explore our services on our homepage.
				</div>
				<div className="pageNotFound-para">
					<Button
						variant="contained"
						onClick={handleNavigateToHomePage}
						style={{ backgroundColor: "#FF481A" }}
					>
						Back to home
					</Button>
				</div>
			</div>
		</div>
	);
}
