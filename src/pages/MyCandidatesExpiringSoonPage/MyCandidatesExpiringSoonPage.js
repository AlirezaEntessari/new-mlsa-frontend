import React from "react";
import "./MyCandidatesExpiringSoonPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import MyCandidatesNavbar from "../../components/MyCandidatesNavbar/MyCandidatesNavbar";

export default function MyCandidatesExpiringSoonPage() {
  return (
    <div className="my-candidates-expiring-soon-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-expiring-soon-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-expiring-soon-page__right-container">
          <div className="my-candidates-expiring-soon-page__mobile-container">
            <p className="my-candidates-expiring-soon-page__mobile-header">
              My Candidates
            </p>
            <MyCandidatesNavbar />
            <div className="my-candidates-expiring-soon-page__mobile-search-expiring-soon-container">
              <label
                className="my-candidates-expiring-soon-page__mobile-search-expiring-soon-label"
                htmlFor="mobile-search-expiring-soon"
              >
                Search Expiring Soon
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
