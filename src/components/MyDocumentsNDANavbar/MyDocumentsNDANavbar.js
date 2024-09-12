import React from "react";
import "./MyDocumentsNDANavbar.scss";

export default function MyDocumentsNDANavbar() {
  return (
    <div className="my-documents-nda-navbar">
      <p className="my-documents-nda-navbar__container">
        <span className="my-documents-nda-navbar__ndas">NDAs</span>
        <span className="my-documents-nda-navbar__split-fee">Split Fee</span>
        <span className="my-documents-nda-navbar__partnerships">
          Partnerships
        </span>
        <button className="my-documents-nda-navbar__view-button">View</button>
        <button className="my-documents-nda-navbar__download-button">
          Download
        </button>
      </p>
    </div>
  );
}
