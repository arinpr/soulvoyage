import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spin from "../../components/spinner/spinner";
import Toast from "../../components/alerts/alert";

export default function SignIn({ onSignUpClick }) {
  const navigate = useNavigate();
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const prodUrl = import.meta.env.VITE_PROD_PATH + "/api/auth/login";
  const devUrl = import.meta.env.VITE_LOCAL_PATH + "/api/auth/login";
  const currentEnv = import.meta.env.VITE_APP_DEV;

  const [dbpath, setDbpath] = useState();


  useEffect(() => {
    if (currentEnv === "local") {
      setDbpath(devUrl);
    } else {
      setDbpath(prodUrl);
    }
  }, []);


  const checkNoErrors = () => emailOrUserName && password;

  const handleSignIn = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (checkNoErrors()) {
      const credentials = {
        email: emailOrUserName,
        password,
      };

      try {
        const response = await axios.post(
          `${dbpath}`,
          credentials
        );

        if (response.data.status === "success") {
          const { jwttoken, email, userName } = response.data.message;
          localStorage.setItem("SavedToken", jwttoken);
          localStorage.setItem("SavedEmail", email);
          localStorage.setItem("SavedUserName", userName);
           
         
           
          navigate("/welcome-page"); 
          Toast({ type: "success", message: "Login Successful" })
        } else if (response.data.status === "failed") {
          Toast({ type: "error", message: "Invalid Credentials" });
        }
      } catch (error) {
        Toast({ type: "error", message: "Internal Server Error" });
      } finally {
        setIsLoading(false);
      }
    } else {
      Toast({ type: "warn", message: "Please fill all the fields" });
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmailOrUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signinform">
      <h1 className="text-center signintext">Sign In</h1>
      <Form onSubmit={handleSignIn} className="Modal_width">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={emailOrUserName}
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button
          className="SignInButton"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Spin /> : "SIGN IN"}
        </Button>
        <div className="text-center mt-1">
          <hr />
          <div className="d-flex justify-content-center gap-2">
          <p>Dont have an account?</p>
          <Link className="text-primary text-decoration-underline" to={'#'} onClick={onSignUpClick}>Register</Link>
          </div>
          
          
        </div>
      </Form>
    </div>
  );
}
