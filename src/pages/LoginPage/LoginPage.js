import React, { useState } from "react";
import "./LoginPage.scss";
import Header from "../../components/Header/Header";
import HideIcon from "../../assets/icons/ph_eye-light (1).svg";
import CheckboxEmptyIcon from "../../assets/icons/CheckBoxEmpty.svg";
import reCAPTCHAIcon from "../../assets/icons/reCAPTCHA.svg";
import ModalForgotYourPassword from "../../components/ModalForgotYourPassword/ModalForgotYourPassword";

export default function LoginPage() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleForgotPasswordClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="login">
      <Header />
      <p className="login__header">Welcome to MLSA</p>
      <p className="login__enter-text">Log in to enter</p>
      <label className="login__email-label" htmlFor="email">
        Email
      </label>
      <input
        className="login__email-input"
        type="text"
        id="email"
        placeholder="Enter your email"
      />
      <img className="login__hide-icon" src={HideIcon} alt="Don't Show" />
      <label className="login__password-label" htmlFor="password">
        Password
      </label>
      <input
        className="login__password-input"
        type="text"
        id="password"
        placeholder="Enter your password"
      />
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
      <button className="login__enter-button">Enter</button>
      <p className="login__dont-have-an-account">
        Don't have an account?{" "}
        <span className="login__sign-up-text">Sign Up</span>
      </p>
      {isModalVisible && <ModalForgotYourPassword closeModal={closeModal} />}
    </div>
  );
}
