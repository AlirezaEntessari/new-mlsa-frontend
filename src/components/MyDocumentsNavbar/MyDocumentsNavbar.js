import React from "react";
import "./MyDocumentsNavbar.scss";
import { Link } from "react-router-dom";

export default function MyDocumentsNavbar() {
  return (
    <div className="my-documents-navbar">
      <p className="my-documents-navbar__container">
        <Link
          className="my-documents-navbar__agreements-link"
          to="/my-documents-agreements-page"
        >
          <span className="my-documents-navbar__agreements">Agreements</span>
        </Link>
        <Link
          className="my-documents-navbar__reports-link"
          to="/my-documents-reports-page"
        >
          <span className="my-documents-navbar__reports">Reports</span>
        </Link>
        <Link
          className="my-documents-navbar__archive-link"
          to="/my-documents-archive-page"
        >
          <span className="my-documents-navbar__archive">Archive</span>
        </Link>
      </p>
    </div>
  );
}
