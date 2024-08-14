import React, { useState } from "react";
import "./SignUpPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import RightArrowIcon from "../../assets/icons/right arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    navigate("/membership-plan-page");
  };
  
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
      <form onSubmit={handleSubmit}>
        <label className="sign-up__email-label" htmlFor="email">
          Email
        </label>
        <input
          className="sign-up__email-input"
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
            className="sign-up__right-arrow-icon"
            src={RightArrowIcon}
            alt="Right Arrow"
          />
        </button>
      </form>
      <p className="sign-up__already-have-account">
        Already have an account?{" "}
        <Link to="/login-page" className="sign-up__log-in-link">
          <span className="sign-up__log-in">Log In</span>
        </Link>
      </p>
    </div>
  );
}
