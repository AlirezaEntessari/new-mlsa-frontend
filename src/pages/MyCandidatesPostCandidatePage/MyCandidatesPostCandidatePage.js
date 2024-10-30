import React from "react";
import "./MyCandidatesPostCandidatePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function MyCandidatesPostCandidatePage() {
  return (
    <div className="my-candidates-post-candidate-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-post-candidate-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-post-candidate-page__right-container">
          <div className="my-candidates-post-candidate-page__mobile-container">
            <div className="my-candidates-post-candidate-page__mobile-header-container">
              <p className="my-candidates-post-candidate-page__mobile-header-text">
                Post Candidate
              </p>
              <div className="my-candidates-post-candidate-page__mobile-header-right-container">
                <p className="my-candidates-post-candidate-page__mobile-header-owner-text">
                  Owner:
                </p>
                <p className="my-candidates-post-candidate-page__mobile-header-owner-name">
                  John Smith
                </p>
                <p className="my-candidates-post-candidate-page__mobile-header-owner-agency">
                  HumanRe Agency
                </p>
              </div>
            </div>
            <div className="my-candidates-post-candidate-page__mobile-central-container">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
