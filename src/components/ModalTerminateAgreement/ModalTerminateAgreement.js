import React, { useRef, useEffect } from "react";
import "./ModalTerminateAgreement.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalTerminateAgreement({ closeModal }) {
  const modalRef = useRef(null);

  // Close the modal if clicked outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    // Add event listener to close the modal when clicking outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-terminate-agreement">
      <div className="modal-terminate-agreement__overlay">
        <div className="modal-terminate-agreement__content" ref={modalRef}>
          <button
            className="modal-terminate-agreement__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-terminate-agreement__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-terminate-agreement__text">
            Your Partnership Agreement with ABC Staffing Inc. has been
            terminated. You are no longer able to view Client and Candidate
            Partnership contact information.
          </p>
          <div className="modal-terminate-agreement__button-container">
            <button
              className="modal-terminate-agreement__ok-button"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
