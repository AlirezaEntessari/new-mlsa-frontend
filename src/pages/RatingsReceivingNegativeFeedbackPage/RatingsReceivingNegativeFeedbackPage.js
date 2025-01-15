import React from "react";
import "./RatingsReceivingNegativeFeedbackPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function RatingsReceivingNegativeFeedbackPage() {
  return (
    <div className="ratings-receiving-negative-feedback-page">
      <HeaderWithProfilePic />
      <div className="ratings-receiving-negative-feedback-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-receiving-negative-feedback-page__right-container">
          <div className="ratings-receiving-negative-feedback-page__container">
            <div className="ratings-receiving-negative-feedback-page__header-container">
              <p className="ratings-receiving-negative-feedback-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-receiving-negative-feedback-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-receiving-negative-feedback-page__receiving-negative-feedback-rating-text">
              Receiving Negative Feedback/Rating
            </p>
            <div className="ratings-receiving-negative-feedback-page__step-2-container">
              <p className="ratings-receiving-negative-feedback-page__step-2-description">
                <span className="ratings-receiving-negative-feedback-page__step-2-bolded-text">
                  Step 2:
                </span>
                <span className="ratings-receiving-negative-feedback-page__contact-the-agency-resolution-text">
                  Contact the Agency and attempt resolution
                </span>
              </p>
            </div>
            <p className="ratings-receiving-negative-feedback-page__when-reaching-out-to-someone">
              When reaching out to someone who gave you a bad rating or poor
              feedback, your goal is to resolve the issue in a way that leaves
              both parties feeling respected and satisfied. Here's a
              step-by-step guide for contacting them and turning the situation
              into a positive, win-win experience.
            </p>
            <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-container">
              <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-inner-container">
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-first-step-container">
                  <p className="ratings-receiving-negative-feedback-page__stay-calm-and-professional">
                    1.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Stay Calm and Professional
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__stay-calm-and-professional-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Take time to process the feedback without reacting
                    emotionally. Approach the situation professionally.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__stay-calm-and-professional-dont">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Don't:
                    </span>{" "}
                    Get defensive or blame the other person.
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-second-step-container">
                  <p className="ratings-receiving-negative-feedback-page__acknowledge-the-feedback">
                    2.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Acknowledge the Feedback
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__acknowledge-the-feedback-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Start the conversation by thanking the person for their
                    feedback, even if it was negative. This shows that you value
                    their opinion and are willing to improve.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__acknowledge-the-feedback-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you for sharing your thoughts about the recent
                    experience. I appreciate the time you took to provide your
                    feedback."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-third-step-container">
                  <p className="ratings-receiving-negative-feedback-page__clarify-the-issue">
                    3.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Clarify the Issue
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__clarify-the-issue-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Politely ask for more details or clarification if the
                    feedback isn't specific. Understanding the root cause of
                    their dissatisfaction will help you address it properly.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__clarify-the-issue-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I would love to understand more about what went wrong.
                    Could you please share a bit more detail so I can work on
                    finding a solution?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-fourth-step-container">
                  <p className="ratings-receiving-negative-feedback-page__take-responsibility">
                    4.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Take Responsibility
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__take-responsibility-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the issue was within your control, take ownership of the
                    mistake. Accept responsibility where appropriate and avoid
                    excuses.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__take-responsibility-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I see where we may have fallen short, and I apologize for
                    that. Let's working on fixing this together."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-fifth-step-container">
                  <p className="ratings-receiving-negative-feedback-page__refer-to-the-agreement">
                    5.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Refer to the Agreement
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__refer-to-the-agreement-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Consult the agreements that were made regarding the
                    commission split.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__refer-to-the-agreement-dont">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Rely on verbal agreements alone. Having written terms
                    minimizes disputes.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__refer-to-the-agreement-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Let's take a look at the agreement we signed to clarify how
                    the commission was to be split."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
