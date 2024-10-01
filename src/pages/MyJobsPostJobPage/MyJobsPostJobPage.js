import React from "react";
import "./MyJobsPostJobPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import JobsSidePanel from "../../components/JobsSidePanel/JobsSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function MyJobsPostJobPage() {
  return (
    <div className="my-jobs-post-job-page">
      <HeaderWithProfilePic />
      <div className="my-jobs-post-job-page__main-container">
        <JobsSidePanel />
        <div className="my-jobs-post-job-page__right-container">
          <p className="my-jobs-post-job-page__header">Post Job</p>
          <div className="my-jobs-post-job-page__owner-information-container">
            <p className="my-jobs-post-job-page__owner-title">Owner:</p>
            <p className="my-jobs-post-job-page__owner-name">John Smith</p>
            <p className="my-jobs-post-job-page__owner-agency">
              HumanRe Agency
            </p>
          </div>
          <div className="my-jobs-post-job-page__top-central-container">
            <img
              className="my-jobs-post-job-page__value-assurance-icon"
              src={ValueAssuranceIcon}
              alt="Value Assurance Icon"
            />
            <p className="my-jobs-post-job-page__information-is-protected">
              Your information is protected by our top-rated value assurance
              system, ensuring its safety and security at all times.
            </p>
          </div>
          <p className="my-jobs-post-job-page__client-name-will-not-be-shared">
            *Client Name will not be shared without NDA or Partnership Agreement
            being signed by both parties.
          </p>
          <div className="my-jobs-post-job-page__mobile-button-container">
            <div className="my-jobs-post-job-page__mobile-button-first-container">
              <button className="my-jobs-post-job-page__mobile-upload-job-description-button">
                Upload Job Description
              </button>
              <button className="my-jobs-post-job-page__mobile-open-archived-job-button">
                Open Archived Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
