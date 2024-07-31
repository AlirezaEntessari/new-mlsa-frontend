import React from "react";
import "./ModalForgotYourPassword.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalForgotYourPassword({ closeModal, handleContinue }) {
  return (
    <div className="modal-forgot-your-password">
      <div className="modal-forgot-your-password__overlay" onClick={closeModal}>
        <div
          className="modal-forgot-your-password__content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-forgot-your-password__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-forgot-your-password__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window"
            />
          </button>
          <p className="modal-forgot-your-password__header">
            Forgot Your Password?
          </p>
          <p className="modal-forgot-your-password__instructions">
            Enter your email address and we will send you instructions to reset
            your password
          </p>
          <label
            className="modal-forgot-your-password__email-label"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="modal-forgot-your-password__email-input"
            type="text"
            placeholder="Enter your email"
          />
          <button
            className="modal-forgot-your-password__continue-button"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
