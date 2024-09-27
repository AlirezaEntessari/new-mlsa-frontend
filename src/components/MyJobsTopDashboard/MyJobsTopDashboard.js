import React from "react";
import "./MyJobsTopDashboard.scss";
import PlusWhiteIcon from "../../assets/icons/PlusWhite.svg";

export default function MyJobsTopDashboard() {
  return (
    <div className="my-jobs-top-dashboard">
      <div className="my-jobs-top-dashboard__mobile-container">
        <div className="my-jobs-top-dashboard__top-container">
          <p className="my-jobs-top-dashboard__active-dashboard">
            <span className="my-jobs-top-dashboard__active-dashboard-text">
              Active
            </span>
            <span className="my-jobs-top-dashboard__active-dashboard-number">
              22
            </span>
          </p>
          <p className="my-jobs-top-dashboard__placements-dashboard">
            <span className="my-jobs-top-dashboard__placements-text">
              Placements
            </span>
            <span className="my-jobs-top-dashboard__placements-number">12</span>
          </p>
          <p className="my-jobs-top-dashboard__expiring-soon-dashboard">
            <span className="my-jobs-top-dashboard__expiring-soon-text">
              Expiring Soon
            </span>
            <span className="my-jobs-top-dashboard__expiring-soon-number">
              6
            </span>
          </p>
        </div>
        <div className="my-jobs-top-dashboard__middle-button-container">
          <button className="my-jobs-top-dashboard__view-drafts-button">
            View Drafts
          </button>
          <button className="my-jobs-top-dashboard__archived-button">
            Archived
          </button>
          <button className="my-jobs-top-dashboard__generate-report-button">
            Generate Report
          </button>
        </div>
        <div className="my-jobs-top-dashboard__bottom-button-container">
          <button className="my-jobs-top-dashboard__post-job-button">
            <img
              className="my-jobs-top-dashboard__plus-white-icon"
              src={PlusWhiteIcon}
              alt="Plus White Icon"
            />
            Post Job
          </button>
          <button className="my-jobs-top-dashboard__batch-upload-button">
            Batch Upload
          </button>
        </div>
      </div>
      <div className="my-jobs-top-dashboard__tablet-container">
        <div className="my-jobs-top-dashboard__tablet-left-button-container">
          <button className="my-jobs-top-dashboard__tablet-post-job-button">
            <img
              className="my-jobs-top-dashboard__plus-white-icon"
              src={PlusWhiteIcon}
              alt="Plus White Icon"
            />
            <span className="my-jobs-top-dashboard__post-job-button-text">
              Post Job
            </span>
          </button>
          <button className="my-jobs-top-dashboard__tablet-batch-upload-button">
            Batch Upload
          </button>
        </div>
        <div className="my-jobs-top-dashboard__tablet-dashboard-container">
          <div className="my-jobs-top-dashboard__tablet-top-dashboard-container">
            <p className="my-jobs-top-dashboard__tablet-active-dashboard">
              <span className="my-jobs-top-dashboard__tablet-active-text">
                Active
              </span>
              <span className="my-jobs-top-dashboard__tablet-active-number">
                22
              </span>
            </p>
            <p className="my-jobs-top-dashboard__tablet-placements-dashboard">
              <span className="my-jobs-top-dashboard__tablet-placements-text">
                Placements
              </span>
              <span className="my-jobs-top-dashboard__tablet-placements-number">
                12
              </span>
            </p>
            <p className="my-jobs-top-dashboard__tablet-expiring-soon-dashboard">
              <span className="my-jobs-top-dashboard__tablet-expiring-soon-text">
                Expiring Soon
              </span>
              <span className="my-jobs-top-dashboard__tablet-expiring-soon-number">
                6
              </span>
            </p>
          </div>
          <div className="my-jobs-top-dashboard__tablet-bottom-dashboard-container">
            <button className="my-jobs-top-dashboard__tablet-view-drafts-button">
              View Drafts
            </button>
            <button className="my-jobs-top-dashboard__tablet-archived-button">
              Archived
            </button>
            <button className="my-jobs-top-dashboard__tablet-generate-report-button">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
