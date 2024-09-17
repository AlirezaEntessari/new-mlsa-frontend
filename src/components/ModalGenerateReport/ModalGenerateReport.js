import React, { useRef, useEffect } from "react";
import "./ModalGenerateReport.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalGenerateReport({ closeModal }) {
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
    <div className="modal-generate-report">
      <div className="modal-generate-report__overlay">
        <div className="modal-generate-report__content" ref={modalRef}>
          <button className="modal-generate-report__close-button" onClick={closeModal} >
            <img
              className="modal-generate-report__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-generate-report__text">
            Your Report has been successfully generated
          </p>
          <div className="modal-generate-report__button-container">
            <button className="modal-generate-report__ok-button" onClick={closeModal} >OK</button>
            <button className="modal-generate-report__undo-button" onClick={closeModal} >Undo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
