import React from "react";
import "./SignUpPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import RightArrowIcon from "../../assets/icons/right arrow.svg";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="sign-up">
      <img className="sign-up__mlsa-logo" src={MLSALogo} alt="MLSA Logo" />
      <p className="sign-up__header-first-line">Signing up is Easy!</p>
      <p className="sign-up__header-second-line">
        In Only a Few Minutes You'll be on Your Way to a Higher Level of Success
      </p>
      <p className="sign-up__enter-email-address">
        Enter your email address to get started!
      </p>
      <label className="sign-up__email-label" htmlFor="email">
        Email
      </label>
      <input
        className="sign-up__email-input"
        type="text"
        id="email"
        placeholder="Enter your email"
      />
      <Link to="/membership-plan-page">
        <button className="sign-up__next-button">
          Next{" "}
          <img
            className="sign-up__right-arrow-icon"
            src={RightArrowIcon}
            alt="Right Arrow"
          />
        </button>
      </Link>
      <p className="sign-up__already-have-account">
        Already have an account? <span className="sign-up__log-in">Log In</span>
      </p>
    </div>
  );
}
