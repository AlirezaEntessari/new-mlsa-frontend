import React from "react";
import "./ModalForgotYourPassword.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalForgotYourPassword() {
  return (
    <div className="modal-forgot-your-password">
      <div className="modal-forgot-your-password__overlay">
        <div className="modal-forgot-your-password__content">
          <button className="modal-forgot-your-password__close-button">
            <img
              className="modal-forgot-your-password__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
