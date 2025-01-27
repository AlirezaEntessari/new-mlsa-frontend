import React, { useState } from "react";
import "./SignUpClerkPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import RightArrowIcon from "../../assets/icons/right arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function SignUpClerkPage() {
  //   const [email, setEmail] = useState("");
  //   const navigate = useNavigate();

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     localStorage.setItem("email", email);
  //     navigate("/membership-plan-page");
  //   };

  return (
    <div className="sign-up-clerk">
      <img
        className="sign-up-clerk__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <p className="sign-up-clerk__header-first-line">Signing up is Easy!</p>
      <p className="sign-up-clerk__header-second-line">
        In Only a Few Minutes You'll be on Your Way to a Higher Level of Success
      </p>
      <p className="sign-up-clerk__enter-email-address">
        Enter your email address to get started!
      </p>
      {/* <form onSubmit={handleSubmit}>
        <label className="sign-up-clerk__email-label" htmlFor="email">
          Email
        </label>
        <input
          className="sign-up-clerk__email-input"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" className="sign-up__next-button">
          Next{" "}
          <img
            className="sign-up-clerk__right-arrow-icon"
            src={RightArrowIcon}
            alt="Right Arrow"
          />
        </button>
      </form> */}
      <div className="sign-up-clerk__clerk-button-container">
        <SignedOut>
          <Link
            className="sign-up-clerk__link"
            to="/membership-plan-clerk-page"
          >
            <SignUpButton
              mode="modal"
              forceRedirectUrl="/membership-plan-clerk-page"
              style={{
                backgroundColor: "white",
                padding: "1rem",
                border: "1px solid #dddddd",
                borderRadius: "4px",
                fontFamily: "Roboto",
              }}
            />
          </Link>
          <Link
            className="sign-up-clerk__link"
            to="/membership-plan-clerk-page"
          >
            <SignInButton
              mode="modal"
              forceRedirectUrl="/membership-plan-clerk-page" // Redirect here after signin
              style={{
                backgroundColor: "white",
                padding: "1rem",
                border: "1px solid #dddddd",
                borderRadius: "4px",
                marginLeft: "16px",
                fontFamily: "Roboto",
              }}
            />
          </Link>
        </SignedOut>
        <SignedIn>
          <Navigate to="/login-page" />
        </SignedIn>
      </div>
      <p className="sign-up-clerk__already-have-account">
        Already have an account?{" "}
        <Link to="/login-page" className="sign-up__log-in-link">
          <span className="sign-up-clerk__log-in">Log In</span>
        </Link>
      </p>
    </div>
  );
}
