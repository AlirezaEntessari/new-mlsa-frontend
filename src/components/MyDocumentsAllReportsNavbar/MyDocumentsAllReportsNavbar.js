import React from "react";
import "./MyDocumentsAllReportsNavbar.scss";

export default function MyDocumentsAllReportsNavbar() {
  return (
    <div className="my-documents-all-reports-navbar">
      <p className="my-documents-all-reports-navbar__container">
        <span className="my-documents-all-reports-navbar__all-reports">All Reports</span>
        <button className="my-documents-all-reports-navbar__view-button">View</button>
        <button className="my-documents-all-reports-navbar__download-button">
          Download
        </button>
      </p>
    </div>
  );
}
