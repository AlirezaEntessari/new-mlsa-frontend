import React, { useRef, useEffect } from "react";
import "./ModalAcknowledgeAndAgree.scss";
import ClosePopUpWindowIcon from "../../assets/icons/XsmWindow.svg";

export default function ModalAcknowledgeAndAgree({ closeModal }) {
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
    <div className="modal-acknowledge-and-agree">
      <div className="modal-acknowledge-and-agree__overlay">
        <div className="modal-acknowledge-and-agree__content" ref={modalRef}>
          <button
            className="modal-acknowledge-and-agree__close-button"
            onClick={closeModal}
          >
            <img
              className="modal-acknowledge-and-agree__close-pop-up-window-icon"
              src={ClosePopUpWindowIcon}
              alt="Close Pop Up Window Icon"
            />
          </button>
          <p className="modal-acknowledge-and-agree__text">
            You have acknowledged and agreed to the Partnership agreement. You
            must click the "Sign" button to complete the partnership.
          </p>
          <div className="modal-acknowledge-and-agree__button-container">
            <button
              className="modal-acknowledge-and-agree__ok-button"
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
