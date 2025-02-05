import React from "react";
import "./RatingsReceivingNegativeFeedbackEndDisputePage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import { Link } from "react-router-dom";

export default function RatingsReceivingNegativeFeedbackEndDisputePage() {
  return (
    <div className="ratings-receiving-negative-feedback-end-dispute-page">
      <HeaderWithProfilePic />
      <div className="ratings-receiving-negative-feedback-end-dispute-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-receiving-negative-feedback-end-dispute-page__right-container">
          <div className="ratings-receiving-negative-feedback-end-dispute-page__container">
            <div className="ratings-receiving-negative-feedback-end-dispute-page__header-container">
              <p className="ratings-receiving-negative-feedback-end-dispute-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-receiving-negative-feedback-end-dispute-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-receiving-negative-feedback-end-dispute-page__receiving-negative-feedback-rating-text">
              Receiving Negative Feedback/Rating
            </p>
            <div className="ratings-receiving-negative-feedback-end-dispute-page__congratulations-on-resolving-your-dispute-container">
              <p className="ratings-receiving-negative-feedback-end-dispute-page__congratulations-on-resolving-your-dispute-text">
                Congratulations on Resolving your Dispute
              </p>
            </div>
            <p className="ratings-receiving-negative-feedback-end-dispute-page__congratulations-on-successfully-navigating">
              Congratulations on successfully navigating the challenging process
              of conflict resolution and bringing it to a positive close. Your
              ability to remain patient, maintain open communication, and stay
              solution-focused throughout the journey speaks volumes about your
              professionalism and dedication. Resolving conflicts is never easy,
              but your commitment to understanding all perspectives and finding
              common ground is commendable. Finalizing this process not only
              reflects your strength in handling difficult situations but also
              ensures stronger relationships moving forward. Your approach to
              resolving this issue will undoubtedly serve as a model for future
              interactions. Well done!
            </p>
            <div className="ratings-receiving-negative-feedback-end-dispute-page__bottom-button-container">
              <Link
                className="ratings-receiving-negative-feedback-end-dispute-page__link"
                to="/ratings/home"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="ratings-receiving-negative-feedback-end-dispute-page__go-to-ratings-home-page-button">
                  Go to Ratings Home Page
                </button>
              </Link>
              <button className="ratings-receiving-negative-feedback-end-dispute-page__back-button">
                Back
              </button>
              <button className="ratings-receiving-negative-feedback-end-dispute-page__go-to-dashboard-messages-button">
                Go to Dashboard Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
