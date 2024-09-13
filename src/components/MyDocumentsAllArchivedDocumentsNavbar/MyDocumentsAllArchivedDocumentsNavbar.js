import React from "react";
import "./MyDocumentsAllReportsNavbar.scss";

export default function MyDocumentsAllArchivedDocumentsNavbar() {
  return (
    <div className="my-documents-all-archived-documents-navbar">
      <p className="my-documents-all-archived-documents-navbar__container">
        <span className="my-documents-all-archived-documents-navbar__all-archived-documents">All Reports</span>
        <button className="my-documents-all-archived-documents-navbar__view-button">View</button>
        <button className="my-documents-all-archived-documents-navbar__download-button">
          Download
        </button>
      </p>
    </div>
  );
}
