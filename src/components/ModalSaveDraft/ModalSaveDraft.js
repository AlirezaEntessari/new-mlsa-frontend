import React, { useRef, useEffect } from "react";
import "./ModalSaveDraft.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalSaveDraft({ closeModal }) {
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
    <div className="modal-save-draft">
      <div className="modal-save-draft__overlay">
        <div className="modal-save-draft__content" ref={modalRef}>
          <button
            className="modal-save-draft__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-save-draft__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-save-draft__text">
            This Job has been successfully saved as a draft
          </p>
          <div className="modal-save-draft__button-container">
            <button
              className="modal-save-draft__ok-button"
              onClick={closeModal}
            >
              OK
            </button>
            <button
              className="modal-save-draft__undo-button"
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
