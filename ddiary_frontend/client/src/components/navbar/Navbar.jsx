import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine, RiMenu2Line, RiMenu4Line } from "react-icons/ri";
import { useNavigate, useLocation, useLoaderData } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Modal, Box, Typography } from "@mui/material";
import { SignIn, SignUp } from "../../containers";
import { Overlay } from "react-bootstrap";

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}

const signinModalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [openSignInModal, setOpenSignInModal] = useState(false);
	const [openSignUpModal, setOpenSignUpModal] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const showSignUpModal = () => {
		setOpenSignInModal(false);
		setOpenSignUpModal(true);
	};
	const closeSignUpModal = () => {
		setOpenSignUpModal(false);
	};
	const showSignInModal = () => {
		//console.log("SignInModal");
		setOpenSignInModal(true);
		setOpenSignUpModal(false);
	};
	const closeSignInModal = () => {
		setOpenSignInModal(false);
	};

	const handleNavigateToHomePage = () => {
		const currentPathName = location.pathname;
		if (currentPathName != "/") {
			const homepagePath = "/";
			navigate(homepagePath);
		}
	};

	const SignInModal = () => {
		return (
			<Modal
				open={openSignInModal}
				onClose={closeSignInModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={signinModalStyle}>
					<SignIn onSignUpClick={showSignUpModal} />
				</Box>

			</Modal>
		);
	};
	const SignUpModal = () => {
		return (
			<Modal
				open={openSignUpModal}
				onClose={closeSignUpModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={signinModalStyle}>
					<SignUp onSignInClick={showSignInModal} />
				</Box>

			</Modal>
		);
	};

	return (
		<div className="journal__navbar">
			<div className="journal__navbar-links">
				<div className="journal__navbar-links_logo" onClick={handleNavigateToHomePage}>
					<img
						
						src="/assets/images/SoulVoyage-logo.svg"
						alt="Soul Voyage Logo"
						className="journal__navbar-soulVoage-logo"
					/>
					<span className="text-primary p-0 m-0">Soul Voyage</span>
			
				</div>
				<div className="journal__navbar-links_container">
					<p>
						<a href="#journal">AI Journal</a>
					</p>
					<p>
						<a href="#journaling_analytics">Journaling Analytics</a>
					</p>
					<p>
						<a href="#professional_help">Professional Help</a>
					</p>
					{/* <p><a href="#blog">Success Stories</a></p> */}
					<p>
						<a href="#pricing">Pricing</a>
					</p>
				</div>
			</div>
			<div className="journal__navbar-sign display-sign">
				<button className="navbar-button"
					type="button"
					onClick={showSignInModal}
				>
					Sign in
				</button>
				{/* <button
					type="button"
					onClick={showSignUpModal}
				>
					Sign up
				</button> */}
			</div>
			<div className="journal__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#555AE2"
						size={35}
						className="border bg-dark text-white"
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu4Line
						color="#555AE2"
						className="border p-1"
						size={35}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="checking">
					<div className="journal__navbar-menu_container scale-right-to-left" >
						<div className="">
							<p>
								<a href="#home">AI Journal</a>
							</p>
							<p>
								<a href="#journal">Journaling Analytics</a>
							</p>
							<p>
								<a href="#journaling_analytics">
									Professional Help
								</a>
							</p>
							<p>
								<a href="#professional_help">Case Studies</a>
							</p>
							{/* <p><a href="#blog">Success Stories</a></p> */}
							<p>
								<a href="#pricing">Pricing</a>
							</p>
							<div className="journal__navbar-sign">
								<button className="navbar-button"
									type="button"
									onClick={showSignInModal}
								>
									Sign in
								</button>
							</div>
						</div>
						
					</div>
					</div>
				)}
			</div>
			{SignInModal()}
			{SignUpModal()}
		</div>
	);
}

export default Navbar;
