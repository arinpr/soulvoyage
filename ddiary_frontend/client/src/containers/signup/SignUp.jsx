import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spin from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import Toast from "../../components/alerts/alert";
import axios from "axios";

export default function SignUp( {onSignInClick} ) {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [retypePasswordError, setRetypePasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noError, setnoError] = useState(true);

  const prodUrl = import.meta.env.VITE_PROD_PATH + "/addUser";
  const devUrl = import.meta.env.VITE_LOCAL_PATH + "/addUser";
  const currentEnv = import.meta.env.VITE_APP_DEV;

  const [dbpath, setDbpath] = useState();


  useEffect(() => {
    if (currentEnv === "local") {
      setDbpath(devUrl);
    } else {
      setDbpath(prodUrl);
    }
  }, []);

  console.log("SignUP : " + dbpath);
  const handleNameChange = (event) => {
    setnoError(true);
    const tempName = event.target.value;
    if (tempName == "") setNameError("This field can't be empty.");
    setName(tempName);
  };

  const handleUserNameChange = (event) => {
    setnoError(true);
    const tempUserName = event.target.value;
    if (tempUserName == "") setUserNameError("This field can't be empty.");
    setUserName(tempUserName);
  };
  const handlePasswordChange = (event) => {
    setnoError(true);
    const tempPassword = event.target.value;
    if (tempPassword == "") setPasswordError("This field can't be empty.");
    setPassword(tempPassword);
  };
  const handleRetypePasswordChange = (event) => {
    setnoError(true);
    setRetypePasswordError("");
    const tempRetypePassword = event.target.value;
    if (tempRetypePassword == "")
      setRetypePasswordError("This field can't be empty.");
    setRetypePassword(tempRetypePassword);
  };

  const checkForNoErrors = () => {
    let noErrors = true;
    if (Name) {
      setNameError("");
    } else {
      setNameError("This field can't be empty");
      noErrors = false;
    }
    if (userName) {
      setUserNameError("");
    } else {
      setUserNameError("This field can't be empty");
      noErrors = false;
    }
    if (password) {
      setPasswordError("");
    } else {
      setPasswordError("This field can't be empty.");
      noErrors = false;
    }
    if (password) {
      setPasswordError("");
    } else {
      setPasswordError("This field can't be empty.");
      noErrors = false;
    }
    if (retypePassword != password) {
      setRetypePasswordError(
        "Password field is not matching with the above Password."
      );
      noErrors = false;
    } else {
      setRetypePasswordError("");
    }
    return noErrors;
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    if (checkForNoErrors()) {
      setnoError(true);
      const credentials = {
        userName: Name,
        email: userName,
        password: password,
      };
      console.log(credentials);
      axios
        .post(`${dbpath}`, credentials)
        .then((response) => {
			console.log(response)
          if (response.data.status === "success") {
            Toast({ type: "success", message: "Account Created Successfully" });
            let token = response.data.message.jwttoken;
            let email = response.data.message.email;
            let username = response.data.message.userName;
            localStorage.setItem("SavedToken", token);
            localStorage.setItem("SavedEmail", email);
            localStorage.setItem("SavedUserName", username);
            navigate("/welcome-page");
          } else if (response.data.status === "failed") {
            Toast({ type: "error", message: "An Error Occurred" });
          }
        })
        .catch(() => {
          Toast({ type: "error", message: "Internal Server Error" });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      Toast({ type: "warn", message: "Please fill all the fields" });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center container container-table">
      <div className="row vertical-center-row">
        <div className="signupform">
          <h1 className="text-center signuptext ">Sign Up</h1>
          <Form className="Modal_width" onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>
                {" "}
                {!noError && !retypePasswordError && (
                  <span style={{ color: "red" }}>
                    {" "}
                    Fields cannot be empty
                    <br />
                  </span>
                )}{" "}
                Name<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="Name"
                placeholder="Name"
                value={Name}
                onChange={handleNameChange}
                style={nameError ? { borderWidth: "5px" } : {}}
                className={nameError ? "border border-danger thick" : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                {" "}
                Mail id<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="E mail"
                value={userName}
                onChange={handleUserNameChange}
                className={userNameError ? "border border-danger " : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                {" "}
                Password<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className={passwordError ? "border border-danger " : ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                {" "}
                Retype Password
                {retypePasswordError && (
                  <span style={{ color: "red" }}>
                    *<br /> {retypePasswordError}
                  </span>
                )}
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={retypePassword}
                onChange={handleRetypePasswordChange}
                className={retypePasswordError ? "border border-danger " : ""}
              />
            </Form.Group>

            <Button
              className="SignUpButton"
              variant="primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spin /> : "CREATE ACCOUNT"}
            </Button>
            <div className="text-center mt-1">
                <hr />
                <div className="d-flex justify-content-center gap-2">
                <p>Already SignUp?</p>
                <Link className="text-primary text-decoration-underline" to={'#'} onClick={onSignInClick}>SignIn</Link>
                </div>
             </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
