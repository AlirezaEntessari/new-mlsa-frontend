import React, { useRef, useEffect } from "react";
import "./ModalPartnershipAgreement.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalPartnershipAgreement({ closeModal }) {
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
    <div className="modal-partnership-agreement">
      <div className="modal-partnership-agreement__overlay">
        <div className="modal-partnership-agreement__content" ref={modalRef}>
          <button
            className="modal-partnership-agreement__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-partnership-agreement__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <div className="modal-partnership-agreement__text-container">
            <p className="modal-partnership-agreement__congratulations">
              Congratulations!
            </p>
            <p className="modal-partnership-agreement__text">
              Your Partnership Agreement has started with LMN Staffing Inc. You
              can now view Job and Candidate details from this agency.
            </p>
          </div>
          <div className="modal-partnership-agreement__button-container">
            <button
              className="modal-partnership-agreement__ok-button"
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
