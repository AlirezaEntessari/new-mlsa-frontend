import React from "react";
import "./MyCandidatesHeader.scss";
import PlusWhiteIcon from "../../assets/icons/PlusWhite.svg";
import SearchIcon from "../../assets/icons/Search (2).svg";
import { Link } from "react-router-dom";

export default function MyCandidatesHeader() {
  return (
    <div className="my-candidates-header">
      <div className="my-candidates-header__mobile-container">
        <p className="my-candidates-header__mobile-header-text">
          My Candidates
        </p>
        <div className="my-candidates-header__mobile-active-placements-expiring-soon-container">
          <div className="my-candidates-header__mobile-active-container">
            <p className="my-candidates-header__mobile-active-text">Active</p>
            <p className="my-candidates-header__mobile-active-number">22</p>
          </div>
          <div className="my-candidates-header__mobile-placements-container">
            <p className="my-candidates-header__mobile-placements-text">
              Placements
            </p>
            <p className="my-candidates-header__mobile-placements-number">12</p>
          </div>
          <div className="my-candidates-header__mobile-expiring-soon-container">
            <p className="my-candidates-header__mobile-expiring-soon-text">
              Expiring Soon
            </p>
            <p className="my-candidates-header__mobile-expiring-soon-number">
              6
            </p>
          </div>
        </div>
        <div className="my-candidates-header__mobile-view-drafts-archived-generate-report-container">
          <button className="my-candidates-header__mobile-view-drafts-button">
            View Drafts
          </button>
          <button className="my-candidates-header__mobile-archived-button">
            Archived
          </button>
          <button className="my-candidates-header__mobile-generate-report-button">
            Generate Report
          </button>
        </div>
        <div className="my-candidates-header__mobile-post-candidate-batch-upload-container">
          <button className="my-candidates-header__mobile-post-candidate-button">
            <img
              className="my-candidates-header__mobile-plus-white-icon"
              src={PlusWhiteIcon}
              alt="Plus White Icon"
            />
            Post Candidate
          </button>
          <Link
            className="my-candidates-header__link"
            to="/my-candidates-batch-upload-page"
          >
            <button className="my-candidates-header__mobile-batch-upload-button">
              Batch Upload
            </button>
          </Link>
        </div>
        <div className="my-candidates-header__mobile-search-my-candidates-container">
          <p className="my-candidates-header__mobile-search-my-candidates-text">
            Search My Candidates
          </p>
          <img
            className="my-candidates-header__mobile-search-icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input
            className="my-candidates-header__mobile-search-my-candidates-input"
            type="text"
          />
        </div>
      </div>
      <div className="my-candidates-header__tablet-container">
        <p className="my-candidates-header__tablet-header-text">
          My Candidates
        </p>
        <div className="my-candidates-header__tablet-top-dashboard-container">
          <div className="my-candidates-header__tablet-top-dashboard-left-container">
            <button className="my-candidates-header__tablet-post-candidate-button">
              <img
                className="my-candidates-header__tablet-plus-white-icon"
                src={PlusWhiteIcon}
                alt="Plus White Icon"
              />{" "}
              Post Candidate
            </button>
            <Link
              className="my-candidates-header__link"
              to="/my-candidates-batch-upload-page"
            >
              <button className="my-candidates-header__tablet-batch-upload-button">
                Batch Upload
              </button>
            </Link>
          </div>
          <div className="my-candidates-header__tablet-top-dashboard-right-container">
            <div className="my-candidates-header__tablet-top-dashboard-active-placements-expiring-soon-container">
              <div className="my-candidates-header__tablet-top-dashboard-active-container">
                <p className="my-candidates-header__tablet-top-dashboard-active-text">
                  Active
                </p>
                <p className="my-candidates-header__tablet-top-dashboard-active-number">
                  22
                </p>
              </div>
              <div className="my-candidates-header__tablet-top-dashboard-placements-container">
                <p className="my-candidates-header__tablet-top-dashboard-placements-text">
                  Placements
                </p>
                <p className="my-candidates-header__tablet-top-dashboard-placements-number">
                  12
                </p>
              </div>
              <div className="my-candidates-header__tablet-top-dashboard-expiring-soon-container">
                <p className="my-candidates-header__tablet-top-dashboard-expiring-soon-text">
                  Expiring Soon
                </p>
                <p className="my-candidates-header__tablet-top-dashboard-expiring-soon-number">
                  6
                </p>
              </div>
            </div>
            <div className="my-candidates-header__tablet-view-drafts-archived-generate-report-container">
              <button className="my-candidates-header__tablet-view-drafts-button">
                View Drafts
              </button>
              <button className="my-candidates-header__tablet-archived-button">
                Archived
              </button>
              <button className="my-candidates-header__tablet-generate-report-button">
                Generate Report
              </button>
            </div>
          </div>
        </div>
        <div className="my-candidates-header__tablet-search-my-candidates-container">
          <label
            className="my-candidates-header__tablet-search-my-candidates-label"
            htmlFor="tablet-search-my-candidates"
          >
            Search My Candidates
          </label>
          <img
            className="my-candidates-header__tablet-search-icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input
            className="my-candidates-header__tablet-search-my-candidates-input"
            type="text"
          />
        </div>
      </div>
      <div className="my-candidates-header__desktop-container">
        <div className="my-candidates-header__desktop-header-container">
          <p className="my-candidates-header__desktop-header-text">
            My Candidates
          </p>
          <div className="my-candidates-header__desktop-active-placements-expiring-soon-container">
            <div className="my-candidates-header__desktop-active-container">
              <p className="my-candidates-header__desktop-active-text">
                Active
              </p>
              <p className="my-candidates-header__desktop-active-number">22</p>
            </div>
            <div className="my-candidates-header__desktop-placements-container">
              <p className="my-candidates-header__desktop-placements-text">
                Placements
              </p>
              <p className="my-candidates-header__desktop-placements-number">
                12
              </p>
            </div>
            <div className="my-candidates-header__desktop-expiring-soon-container">
              <p className="my-candidates-header__desktop-expiring-soon-text">
                Expiring Soon
              </p>
              <p className="my-candidates-header__desktop-expiring-soon-number">
                7
              </p>
            </div>
          </div>
        </div>
        <div className="my-candidates-header__desktop-top-dashboard-button-container">
          <button className="my-candidates-header__desktop-post-candidate-button">
            <img
              className="my-candidates-header__desktop-plus-white-icon"
              src={PlusWhiteIcon}
              alt="Plus White Icon"
            />
            Post Candidate
          </button>
          <Link
            className="my-candidates-header__link"
            to="/my-candidates-batch-upload-page"
          >
            <button className="my-candidates-header__desktop-batch-upload-button">
              Batch Upload
            </button>
          </Link>
          <button className="my-candidates-header__desktop-view-drafts-button">
            View Drafts
          </button>
          <button className="my-candidates-header__desktop-archived-button">
            Archived
          </button>
          <button className="my-candidates-header__desktop-generate-report-button">
            Generate Report
          </button>
        </div>
        <div className="my-candidates-header__desktop-search-my-candidates-container">
          <label
            className="my-candidates-header__desktop-search-my-candidates-label"
            htmlFor="desktop-search-my-candidates"
          >
            Search My Candidates
          </label>
          <img
            className="my-candidates-header__desktop-search-icon"
            src={SearchIcon}
            alt="Search Icon"
          />
          <input
            className="my-candidates-header__desktop-search-my-candidates-input"
            type="text"
            id="desktop-search-my-candidates"
          />
        </div>
      </div>
    </div>
  );
}
