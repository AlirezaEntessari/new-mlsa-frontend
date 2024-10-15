import React, { useRef, useEffect } from "react";
import "./ModalSearchJobs.scss";

export default function ModalSearchJobs({ closeModal }) {
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
    <div className="modal-search-jobs">
      <div className="modal-search-jobs__overlay">
        <div className="modal-search-jobs__content" ref={modalRef}>
          <p className="modal-search-jobs__submit-candidate">
            Submit Candidate
          </p>
          <p className="modal-search-jobs__send-message">Send Message</p>
          <p className="modal-search-jobs__save-to-favorites">
            Save to Favorites
          </p>
        </div>
      </div>
    </div>
  );
}
