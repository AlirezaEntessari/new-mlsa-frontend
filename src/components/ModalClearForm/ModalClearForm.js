import React, { useRef, useEffect } from "react";
import "./ModalClearForm.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalClearForm({ closeModal }) {
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
    <div className="modal-clear-form">
      <div className="modal-clear-form__overlay">
        <div className="modal-clear-form__content" ref={modalRef}>
          <button
            className="modal-clear-form__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-clear-form__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-clear-form__text">
            Are you sure you want to clear this job posting? This form will be
            cleared when you click OK.
          </p>
          <div className="modal-clear-form__button-container">
            <button
              className="modal-clear-form__ok-button"
              onClick={closeModal}
            >
              OK
            </button>
            <button
              className="modal-clear-form__undo-button"
              onClick={closeModal}
            >
              Undo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
