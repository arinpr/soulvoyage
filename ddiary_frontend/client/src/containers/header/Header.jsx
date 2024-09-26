import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/aijournal.jpeg";
import diary1 from "../../assets/diary1.jpg";
import { getApp } from "firebase/app";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const userList = [
	"Deepak Gokharu",
	"Abhigyan Agarwal",
	"Siddhant Gupta",
	"Gaurav S",
	"Shubh R",
	"Poojan D",
	"Jagdish D",
	"Vishal T",
];

const Header = () => {
	const [email, setEmail] = useState();
	const [validEmail, setValidEmail] = useState(true);

	const validateEmail = () => {
		// Regular expression for email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isValid = emailRegex.test(email);
		setValidEmail(isValid);
		return isValid;
	};

	// Initialize Realtime Database and get a reference to the service
	const database = getDatabase(getApp());

	let navigate = useNavigate();
	const routeEarlyRegistration = () => {
		let path = "/early-registration";
		navigate(path);
	};

	const Push = () => {
		const isValid = validateEmail();

		if (isValid) {
			const updates = {};
			const newUserKey = push(child(ref(database), "emails")).key;
			updates["/emails/" + newUserKey] = email;
			update(ref(database), updates);
			routeEarlyRegistration();
		} else {
			// Handle invalid email
			console.log("Invalid email");
			// Add your logic here for invalid email submission
		}
	};

	return (
		<div className="gpt3__header section__padding" id="home">
			<div className="gpt3__header-content">
				<h1 className="gradient__text">
					Your Personal Journaling Revolutionized
				</h1>
				<p>
					This fusion of AI and journaling aims to provide users with
					various tools, features, or systems that assist in
					organizing thoughts, generating insights, providing
					professional help, or offering personalized prompts for
					journal entries..
				</p>

				{/* <div className="gpt3__header-content__input">
					<Form.Group
						controlId="formBasicEmail"
						className="gpt3__header-content__input__form"
					>
						<Form.Control
							className="pt3__header-content__input__form__control"
							type="email"
							placeholder="Your Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							isInvalid={!validEmail}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a valid email address.
						</Form.Control.Feedback>
					</Form.Group>
					<button type="button" onClick={Push}>
						Get Started
					</button>
				</div> */}

				<div className="gpt3__header-content__people">
					<div>
						<AvatarGroup
							max={7}
							total={500}
							sx={{
								"& .MuiAvatar-root": {
									fontSize: 14,
								},
							}}
						>
							{userList.map((userName, index) => {
								return (
									<Avatar
										key={`userImage_${index}`}
										alt={userName}
										src={`/tempUserImages/${userName}.png`}
									/>
								);
							})}
						</AvatarGroup>
					</div>
					{/* <img src={people} /> */}
					<p className="lineHeight25">
						500 people have already requested for access to this
						platform
					</p>
				</div>
			</div>

			<div className="gpt3__header-image">
				<img src={diary1} />
			</div>
		</div>
	);
};

export default Header;
