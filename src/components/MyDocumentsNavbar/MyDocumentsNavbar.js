import React from "react";
import "./MyDocumentsNavbar.scss";

export default function MyDocumentsNavbar() {
  return (
    <div className="my-documents-navbar">
      <p className="my-documents-navbar__container">
        <span className="my-documents-navbar__agreements">Agreements</span>
        <span className="my-documents-navbar__reports">Reports</span>
        <span className="my-documents-navbar__archive">Archive</span>
      </p>
    </div>
  );
}
