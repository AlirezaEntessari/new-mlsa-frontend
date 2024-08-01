import React from "react";
import "./ModalCheckYourEmail.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalCheckYourEmail({ closeModal, handleContinue }) {
  return (
    <div className="modal-check-your-email">
      <div className="modal-check-your-email__overlay" onClick={closeModal}>
        <div
          className="modal-check-your-email__content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-check-your-email__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-check-your-email__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-check-your-email__header">Check Your Email</p>
          <p className="modal-check-your-email__instructions">
            Check your email for your Password Reset instructions. Enter the
            validation code here. It will be valid for 10 minutes.
          </p>
          <label
            className="modal-check-your-email__validation-code-label"
            htmlFor="validation-code"
          >
            Validation Code
          </label>
          <input
            className="modal-check-your-email__validation-code-input"
            type="text"
            id="validation-code"
            placeholder="Enter the validation code from the email"
          />
          <button
            className="modal-check-your-email__continue-button"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
