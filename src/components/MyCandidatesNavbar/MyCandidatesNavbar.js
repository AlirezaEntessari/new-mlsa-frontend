import React from "react";
import "./MyCandidatesNavbar.scss";

export default function MyCandidatesNavbar() {
  return (
    <div className="my-candidates-navbar">
      <p className="my-candidates-navbar__navbar">
        <span className="my-candidates-navbar__drafts-section">Drafts</span>
        <span className="my-candidates-navbar__archive-section">Archive</span>
        <span className="my-candidates-navbar__expiring-soon-section">
          Expiring Soon
        </span>
      </p>
    </div>
  );
}
