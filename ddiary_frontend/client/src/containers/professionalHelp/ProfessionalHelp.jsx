import React, { useState } from 'react'
import './professionalHelp.css';
import { Box, Modal } from "@mui/material";
import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';
const signinModalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

function ProfessionalHelp() {
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
  return (
    <>
        <section className='Journal_Professional_Help' id='professional_help'>
            <div className="Professional_Help_box">

                <div className="row g-0 gx-md-5">
                    <div className="col-12 col-lg-4">
                        <img src="assets/img/help.svg" className='Professional_Help_Image' width={'90%'} alt="Journal_Professionl Help" />
                    </div>
                    <div className="col-12 col-lg-8 align-self-center">
                            <div className="text_box">
                                <h1 >
                                    Professional Help from Personalized Mentor
                                </h1>
                                <p>AI-based professional help in mental health is a burgeoning field that harnesses artificial intelligence to enhance mental health services.</p>
                                <button className='common_button'onClick={showSignInModal}>
                                    Get Started for free
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        {SignInModal()}
        {SignUpModal()}
    </>
  )
}

export default ProfessionalHelp