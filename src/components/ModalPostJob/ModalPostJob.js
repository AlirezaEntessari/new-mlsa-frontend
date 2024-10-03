import React, { useRef, useEffect } from "react";
import "./ModalPostJob.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalPostJob({ closeModal }) {
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
    <div className="modal-post-job">
      <div className="modal-post-job__overlay">
        <div className="modal-post-job__content" ref={modalRef}>
          <button className="modal-post-job__close-button" onClick={closeModal}>
            <img
              className="modal-post-job__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-post-job__text">
            Job #6373652 has been successfully posted
          </p>
          <div className="modal-post-job__button-container">
            <button className="modal-post-job__ok-button" onClick={closeModal}>
              OK
            </button>
            <button
              className="modal-post-job__undo-button"
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
