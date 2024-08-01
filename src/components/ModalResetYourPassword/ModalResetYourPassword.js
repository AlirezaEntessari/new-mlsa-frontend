import React from "react";
import "./ModalResetYourPassword.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalResetYourPassword({ closeModal, handleResetPassword }) {
  return (
    <div className="modal-reset-your-password">
      <div className="modal-reset-your-password__overlay" onClick={closeModal}>
        <div
          className="modal-reset-your-password__content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-reset-your-password__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-reset-your-password__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-reset-your-password__header">Reset Your Password</p>
          <p className="modal-reset-your-password__instructions">Enter a new Password below</p>
          <label
            className="modal-reset-your-password__new-password-label"
            htmlFor="new-password"
          >
            New Password
          </label>
          <input
            className="modal-reset-your-password__new-password-input"
            type="text"
            placeholder="Enter a new Password here"
          />
          <label
            className="modal-reset-your-password__confirm-password-label"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="modal-reset-your-password__confirm-password-input"
            type="text"
            placeholder="Re-enter the new Password"
          />
          <button
            className="modal-reset-your-password__reset-button"
            onClick={handleResetPassword}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
