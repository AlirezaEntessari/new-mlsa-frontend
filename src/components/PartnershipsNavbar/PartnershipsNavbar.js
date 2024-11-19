import React from "react";
import "./PartnershipsNavbar.scss";
import { Link } from "react-router-dom";

export default function PartnershipsNavbar() {
  return (
    <div className="partnerships-navbar">
      <div className="partnerships-navbar__mobile-container">
        <p className="partnerships-navbar__navbar">
          <Link
            className="partnerships-navbar__my-partners-link"
            to="/partnerships-home-page"
          >
            <span className="partnerships-navbar__my-partners-section">
              My Partners
            </span>
          </Link>
          <Link
            className="partnerships-navbar__requests-link"
            to="/partnerships-requests-page"
          >
            <span className="partnerships-navbar__requests-section">
              Requests
            </span>
          </Link>
          <Link
            className="partnerships-navbar__manage-section-link"
            to="/partnerships-manage-page"
          >
            <span className="partnerships-navbar__manage-section">Manage</span>
          </Link>
        </p>
      </div>
      <div className="partnerships-navbar__tablet-container">
        <p className="partnerships-navbar__tablet-navbar">
          <Link
            className="partnerships-navbar__tablet-partnerships-home-page-link"
            to="/partnerships-home-page"
          >
            <span className="partnerships-navbar__tablet-my-active-partnerships-section">
              My Active Partnerships
            </span>
          </Link>
          <Link
            className="partnerships-navbar__tablet-partnerships-requests-link"
            to="/partnerships-requests-page"
          >
            <span className="partnerships-navbar__tablet-partnership-requests-section">
              Partnership Requests
            </span>
          </Link>
          <Link
            className="partnerships-navbar__tablet-manage-partnerships-link"
            to="/partnerships-manage-page"
          >
            <span className="partnerships-navbar__tablet-manage-partnerships-section">
              Manage Partnerships
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
