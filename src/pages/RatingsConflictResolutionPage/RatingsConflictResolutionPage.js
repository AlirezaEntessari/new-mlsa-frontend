import React from "react";
import "./RatingsConflictResolutionPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function RatingsConflictResolutionPage() {
  return (
    <div className="ratings-conflict-resolution-page">
      <HeaderWithProfilePic />
      <div className="ratings-conflict-resolution-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-conflict-resolution-page__right-container">
          <div className="ratings-conflict-resolution-page__mobile-container">
            <div className="ratings-conflict-resolution-page__mobile-header-container">
              <p className="ratings-conflict-resolution-page__mobile-header">
                Conflict Resolution
              </p>
              <img
                className="ratings-conflict-resolution-page__mobile-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
            </div>
            <p className="ratings-conflict-resolution-page__mobile-resolution-process-explained-header">
              The Resolution Process Explained
            </p>
            <p className="ratings-conflict-resolution-page__mobile-resolution-process-explained-description">
              Negative feedback or a rating under 3 is never easy to give or
              receive, and on our platform we consider
              <span className="ratings-conflict-resolution-page__mobile-bolded-text">
                anything below 3 stars a low rating.
              </span>
              When faced with the challenge of leaving or receiving less than
              ideal feedback, there are two paths for conflict resolution. One
              path is for
              <span className="ratings-conflict-resolution-page__mobile-bolded-text">
                those who feel compelled to give a low rating or negative
                feedback,
              </span>
              and the other is for
              <span className="ratings-conflict-resolution-page__mobile-bolded-text">
                those on the receiving end.
              </span>
              While it's crucial to provide accurate and honest ratings, it's
              also important to remember that many conflicts can be resolved
              through clear communication and mutual understanding before
              submitting a final review. Our goal is to ensure that all feedback
              is both fair and constructive.
            </p>
            <div className="ratings-conflict-resolution-page__mobile-steps-container">
              <div className="ratings-conflict-resolution-page__mobile-steps-inner-container">
                <p className="ratings-conflict-resolution-page__mobile-step-1">
                  <span className="ratings-conflict-resolution-page__mobile-step-1-text">
                    Step 1:
                  </span>
                  <span className="ratings-conflict-resolution-page__mobile-step-1-description">
                    Identify what type of conflict you are experiencing
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__mobile-step-2">
                  <span className="ratings-conflict-resolution-page__mobile-step-2-text">
                    Step 2:
                  </span>
                  <span className="ratings-conflict-resolution-page__mobile-step-2-description">
                    Contact the Agency and attempt resolution
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__mobile-step-3">
                  <span className="ratings-conflict-resolution-page__mobile-step-3-text">
                    Step 3:
                  </span>
                  <span className="ratings-conflict-resolution-page__mobile-step-3-description">
                    Communicate & Resolve
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__mobile-step-4">
                  <span className="ratings-conflict-resolution-page__mobile-step-4-text">
                    Step 4:
                  </span>
                  <span className="ratings-conflict-resolution-page__mobile-step-4-description">
                    Rating Adjustment or Feedback Response
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__mobile-step-5">
                  <span className="ratings-conflict-resolution-page__mobile-step-5-text">
                    Step 5:
                  </span>
                  <span className="ratings-conflict-resolution-page__mobile-step-5-description">
                    End Dispute
                  </span>
                </p>
              </div>
            </div>
            <p className="ratings-conflict-resolution-page__mobile-key-to-resolving-conflicts-description">
              The key to resolving conflicts is to
              <span className="ratings-conflict-resolution-page__mobile-bolded-text">
                follow each step carefully and patiently.
              </span>
              Throughout the process, we will provide helpful suggestions to
              improve communication and work toward resolving the issue. In many
              cases,
              <span className="ratings-conflict-resolution-page__mobile-bolded-text">
                disputes can be resolved quickly and amicably.
              </span>
              However, if the other party is uncooperative, a negative rating
              may be appropriate to inform others of your experience. Our goal
              is to support fair, transparent feedback while encouraging
              resolution whenever possible.
            </p>
            <div className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-container">
              <p className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-header">
                Reasons to give a Negative Rating and Feedback
              </p>
              <ol className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list">
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-first-step">
                  Lack of communication and/or no response.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-second-step">
                  Lack of follow through
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-third-step">
                  Misinformation
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-fourth-step">
                  Candidates not accepting an offer or not responding to an
                  inteview request.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-fifth-step">
                  Delayed or No Payment
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-sixth-step">
                  Lack of courtesy, respect, and competence shown throughout the
                  interaction.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-seventh-step">
                  Low Quality Candidates and/or Job Roles
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-eighth-step">
                  Lack of Transparency
                </li>
                <li className="ratings-conflict-resolution-page__mobile-reasons-to-give-a-negative-rating-and-feedback-list-ninth-step">
                  Lack of effort to communicate any problematic issues that may
                  arise during the hiring process.
                </li>
              </ol>
            </div>
            <div className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-container">
              <p className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-header">
                Guidelines for Rating Agencies and Writing Feedback
              </p>
              <p className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-description">
                When submitting a rating or feedback, it's important to ensure
                that your review is fair, accurate, and constructive. Below are
                guidelines to help you provide meaningful and effective ratings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
