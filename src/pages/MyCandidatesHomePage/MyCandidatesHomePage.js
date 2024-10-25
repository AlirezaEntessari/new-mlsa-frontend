import React from "react";
import "./MyCandidatesHomePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import PlusWhiteIcon from "../../assets/icons/PlusWhite.svg";
import SearchIcon from "../../assets/icons/Search (2).svg";
import PendingDotIcon from "../../assets/icons/CPendingDot.svg";
import ReviewsDotIcon from "../../assets/icons/CReviewsDot.png";
import AllCandidatesDotIcon from "../../assets/icons/AllCandidatesDot.svg";

export default function MyCandidatesHomePage() {
  return (
    <div className="my-candidates-home-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-home-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-home-page__right-container">
          <div className="my-candidates-home-page__mobile-container">
            <p className="my-candidates-home-page__mobile-header-text">
              My Candidates
            </p>
            <div className="my-candidates-home-page__mobile-active-placements-expiring-soon-container">
              <div className="my-candidates-home-page__mobile-active-container">
                <p className="my-candidates-home-page__mobile-active-text">
                  Active
                </p>
                <p className="my-candidates-home-page__mobile-active-number">
                  22
                </p>
              </div>
              <div className="my-candidates-home-page__mobile-placements-container">
                <p className="my-candidates-home-page__mobile-placements-text">
                  Placements
                </p>
                <p className="my-candidates-home-page__mobile-placements-number">
                  12
                </p>
              </div>
              <div className="my-candidates-home-page__mobile-expiring-soon-container">
                <p className="my-candidates-home-page__mobile-expiring-soon-text">
                  Expiring Soon
                </p>
                <p className="my-candidates-home-page__mobile-expiring-soon-number">
                  6
                </p>
              </div>
            </div>
            <div className="my-candidates-home-page__mobile-view-drafts-archived-generate-report-container">
              <button className="my-candidates-home-page__mobile-view-drafts-button">
                View Drafts
              </button>
              <button className="my-candidates-home-page__mobile-archived-button">
                Archived
              </button>
              <button className="my-candidates-home-page__mobile-generate-report-button">
                Generate Report
              </button>
            </div>
            <div className="my-candidates-home-page__mobile-post-candidate-batch-upload-container">
              <button className="my-candidates-home-page__mobile-post-candidate-button">
                <img
                  className="my-candidates-home-page__mobile-plus-white-icon"
                  src={PlusWhiteIcon}
                  alt="Plus White Icon"
                />
                Post Candidate
              </button>
              <button className="my-candidates-home-page__mobile-batch-upload-button">
                Batch Upload
              </button>
            </div>
            <div className="my-candidates-home-page__mobile-search-my-candidates-container">
              <p className="my-candidates-home-page__mobile-search-my-candidates-text">
                Search My Candidates
              </p>
              <img
                className="my-candidates-home-page__mobile-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                className="my-candidates-home-page__mobile-search-my-candidates-input"
                type="text"
              />
            </div>
            <div className="my-candidates-home-page__mobile-central-container">
              <p className="my-candidates-home-page__mobile-all-candidates-header">
                <img
                  className="my-candidates-home-page__mobile-all-candidates-dot-icon"
                  src={AllCandidatesDotIcon}
                  alt="All Candidates Dot Icon"
                />
                All Candidates
              </p>
              <div className="my-candidates-home-page__mobile-dashboard-container">
                <div className="my-candidates-home-page__mobile-dashboard-top-container">
                  <div className="my-candidates-home-page__mobile-pending-container">
                    <img
                      className="my-candidates-home-page__mobile-pending-dot-icon"
                      src={PendingDotIcon}
                      alt="Pending Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-pending-text">
                      Pending
                    </p>
                  </div>
                  <div className="my-candidates-home-page__mobile-reviews-container">
                    <img
                      className="my-candidates-home-page__mobile-reviews-dot-icon"
                      src={PendingDotIcon}
                      alt="Reviews Dot Icon"
                    />
                    <p className="my-candidates-home-page__mobile-reviews-text">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
