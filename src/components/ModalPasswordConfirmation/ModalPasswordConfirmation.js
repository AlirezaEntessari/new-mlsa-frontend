import React from "react";
import "./ModalPasswordConfirmation.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalPasswordConfirmation({ closeModal }) {
  return (
    <div className="modal-password-confirmation">
      <div className="modal-password-confirmation__overlay" onClick={closeModal}>
        <div
          className="modal-password-confirmation__content"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-password-confirmation__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-password-confirmation__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-password-confirmation__header">Password Confirmation</p>
          <p className="modal-password-confirmation__instructions">
            Your password was Reset.  You can now return to the Log in page.
          </p>
          <button className="modal-password-confirmation__continue-button">Continue</button>
        </div>
      </div>
    </div>
  );
}
