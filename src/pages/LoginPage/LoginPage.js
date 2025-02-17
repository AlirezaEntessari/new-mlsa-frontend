import React, { useState, useEffect } from "react";
import "./LoginPage.scss";
import Header from "../../components/Header/Header";
import HideIcon from "../../assets/icons/ph_eye-light (1).svg";
import CheckboxEmptyIcon from "../../assets/icons/CheckBoxEmpty.svg";
import reCAPTCHAIcon from "../../assets/icons/reCAPTCHA.svg";
import ModalForgotYourPassword from "../../components/ModalForgotYourPassword/ModalForgotYourPassword";
import ModalCheckYourEmail from "../../components/ModalCheckYourEmail/ModalCheckYourEmail";
import ModalResetYourPassword from "../../components/ModalResetYourPassword/ModalResetYourPassword";
import ModalPasswordConfirmation from "../../components/ModalPasswordConfirmation/ModalPasswordConfirmation";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useUser, SignInButton, SignIn, useClerk } from "@clerk/clerk-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisible] =
    useState(false);
  const [isCheckYourEmailModalVisible, setCheckYourEmailModalVisible] =
    useState(false);
  const [isResetYourPasswordModalVisible, setResetYourPasswordModalVisible] =
    useState(false);
  const [
    isPasswordConfirmationModalVisible,
    setPasswordConfirmationModalVisible,
  ] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        navigate("/dashboard"); // Navigate to the desired page on successful login
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Email and password do not match");
      } else {
        alert("An error occurred during login. Please try again.");
      }
    }
  };

  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    console.log("useEffect triggered: Checking if user is signed in...");
    console.log("isSignedIn:", isSignedIn);
    console.log("user:", user);

    if (!isSignedIn || !user) {
      console.log("User not signed in yet. Retrying in 2 seconds...");
      setTimeout(() => {
        console.log("Retrying sign-in check...");
      }, 2000);
      return; // Exit until user is signed in
    }

    console.log(
      "User is signed in. Redirecting to agency information page..."
    );

    // Redirect the user immediately since Clerk webhook handles DB insertion
    navigate("/agency-information-page");
  }, [isSignedIn, user, navigate]); // Runs when user logs in

  const handleForgotPasswordClick = () => {
    setForgotPasswordModalVisible(true);
  };

  const closeForgotPasswordModal = () => {
    setForgotPasswordModalVisible(false);
  };

  const handleContinueFromForgotPassword = () => {
    setForgotPasswordModalVisible(false);
    setCheckYourEmailModalVisible(true);
  };

  const closeCheckYourEmailModal = () => {
    setCheckYourEmailModalVisible(false);
  };

  const handleContinueFromCheckYourEmail = () => {
    setCheckYourEmailModalVisible(false);
    setResetYourPasswordModalVisible(true);
  };

  const closeResetYourPasswordModal = () => {
    setResetYourPasswordModalVisible(false);
  };

  const handleResetPassword = () => {
    setResetYourPasswordModalVisible(false);
    setPasswordConfirmationModalVisible(true);
  };

  const closePasswordConfirmationModal = () => {
    setPasswordConfirmationModalVisible(false);
  };

  return (
    <div className="login">
      <Header />
      <p className="login__header">Welcome {user?.firstName} to MLSA</p>
      <p className="login__enter-text">Log in to enter</p>
      {/* <label className="login__email-label" htmlFor="email">
        Email
      </label>
      <input
        className="login__email-input"
        type="text"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <img className="login__hide-icon" src={HideIcon} alt="Don't Show" />
      <label className="login__password-label" htmlFor="password">
        Password
      </label>
      <input
        className="login__password-input"
        type="password"
        id="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      /> */}
      <div className="login__clerk-login-button-container">
        {/* <SignInButton
          mode="modal"
          forceRedirectUrl="/membership-plan-page" // Redirect here after sign in
          style={{
            backgroundColor: "white",
            padding: "1rem",
            border: "1px solid #dddddd",
            borderRadius: "4px",
            marginLeft: "16px",
            fontFamily: "Roboto",
          }}
        /> */}
        <SignIn
          path="/login-page"
          routing="path"
          forceRedirectUrl="/agency-information-page"
        />
      </div>
      <p className="login__keep-me-signed-in">
        <img
          className="login__checkbox-empty-icon"
          src={CheckboxEmptyIcon}
          alt="Check Box"
        />
        <span className="login__keep-me-signed-in-text">Keep me signed in</span>
        <span
          className="login__forgot-your-password-text"
          onClick={handleForgotPasswordClick}
        >
          Forgot your password?
        </span>
      </p>
      <img
        className="login__reCAPTCHA-icon"
        src={reCAPTCHAIcon}
        alt="reCAPTCHA Icon"
      />
      <button className="login__enter-button" onClick={handleLogin}>
        Enter
      </button>
      <p className="login__dont-have-an-account">
        Don't have an account?{" "}
        <Link to="/sign-up-page" className="login__sign-up-link">
          <span className="login__sign-up-text">Sign Up</span>
        </Link>
      </p>
      {isForgotPasswordModalVisible && (
        <ModalForgotYourPassword
          closeModal={closeForgotPasswordModal}
          handleContinue={handleContinueFromForgotPassword}
        />
      )}
      {isCheckYourEmailModalVisible && (
        <ModalCheckYourEmail
          closeModal={closeCheckYourEmailModal}
          handleContinue={handleContinueFromCheckYourEmail}
        />
      )}
      {isResetYourPasswordModalVisible && (
        <ModalResetYourPassword
          closeModal={closeResetYourPasswordModal}
          handleResetPassword={handleResetPassword}
        />
      )}
      {isPasswordConfirmationModalVisible && (
        <ModalPasswordConfirmation
          closeModal={closePasswordConfirmationModal}
        />
      )}
    </div>
  );
}
