import React, { useState } from "react";

import "./mainheader.css"
import { Box, Modal } from "@mui/material";
import SignUp from "../signup/SignUp";
import SignIn from "../signin/SignIn";
const signinModalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};
export default function MainHeader(){
    const [openSignInModal, setOpenSignInModal] = useState(false);
	const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const showSignUpModal = () => {
		setOpenSignUpModal(true);
	};
	const closeSignUpModal = () => {
		setOpenSignUpModal(false);
	};
	const showSignInModal = () => {
		setOpenSignInModal(true);
	};
	const closeSignInModal = () => {
		setOpenSignInModal(false);
	};

	

	const SignInModal = () => {
		//console.log("Sign In Modal");
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
					<SignUp />

				</Box>

			</Modal>
		);
	};
    return (<>
            
                
                    <div className="row g-0 pt-5">
                        <div className="col-12 col-md-6 ">
                            <div className="vector_underline">
                            <h1>
                                Your Personal <br/>Journaling <br/>
                                    <span className="text-primary">
                                         Revolutionized
                                    </span>
                                </h1>
                                <img src="assets/img/vector.png"  alt="" />
                            </div>
                            <p>
                            This fusion of AI and journaling aims to provide users with various tools, features, or systems that assist in organizing thoughts, generating insights, providing professional help, or offering personalized prompts for journal entries.
                            </p> 
                            <button className="common_button" onClick={showSignInModal}>
                                Get Started for free
                            </button>   
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex justify-content-end">
                               <img src="assets/img/banner.svg" width={'100%'} alt=""  />
                            </div>
                        </div>
                    </div>
                    {SignInModal()}
                    {SignUpModal()}
           
    </>);
}