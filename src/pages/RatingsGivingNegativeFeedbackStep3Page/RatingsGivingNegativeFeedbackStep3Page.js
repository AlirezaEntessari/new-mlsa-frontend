import React from "react";
import "./RatingsGivingNegativeFeedbackStep3Page.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function RatingsGivingNegativeFeedbackStep3Page() {
  return (
    <div className="ratings-giving-negative-feedback-step-3-page">
      <HeaderWithProfilePic />
      <div className="ratings-giving-negative-feedback-step-3-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-giving-negative-feedback-step-3-page__right-container">
          <div className="ratings-giving-negative-feedback-step-3-page__container">
            <div className="ratings-giving-negative-feedback-step-3-page__header-container">
              <p className="ratings-giving-negative-feedback-step-3-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-giving-negative-feedback-step-3-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-giving-negative-feedback-step-3-page__giving-negative-feedback-rating-text">
              Giving Negative Feedback/Rating
            </p>
            <div className="ratings-giving-negative-feedback-step-3-page__step-3-container">
              <p className="ratings-giving-negative-feedback-step-3-page__step-3-text">
                <span className="ratings-giving-negative-feedback-step-3-page__step-3-bolded-text">
                  Step 3:
                </span>
                <span className="ratings-giving-negative-feedback-step-3-page__communicate-and-resolve-text">
                  Communicate and Resolve
                </span>
              </p>
            </div>
            <p className="ratings-giving-negative-feedback-step-3-page__when-given-negative-feedback">
              When you've given negative feedback and the Agency contacts you to
              discuss or request an adjustment, it's important to handle the
              conversation professionally and thoughtfully. Here's how to
              approach the process of communication and resolution:
            </p>
            <div className="ratings-giving-negative-feedback-step-3-page__process-container">
              <div className="ratings-giving-negative-feedback-step-3-page__process-inner-container">
                <div className="ratings-giving-negative-feedback-step-3-page__process-first-step-container">
                  <p className="ratings-giving-negative-feedback-step-3-page__listen-to-their-perspective">
                    1.{" "}
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      Listen to Their Perspective
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__listen-to-their-perspective-do">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Give the Agency the opportunity to explain their side.
                    Listen carefully to any explanations or clarifications they
                    provide before responding.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__listen-to-their-perspective-dont">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Interrupt or immediately dismiss their points without
                    hearing the full story. Even if you feel strongly about your
                    feedback, showing you're willing to listen fosters a
                    respectful exchange.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__listen-to-their-perspective-example">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I appreciate you reaching out. Could you explain the
                    circumstances that led to the delay in the project?"
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-3-page__process-second-step-container">
                  <p className="ratings-giving-negative-feedback-step-3-page__acknowledge-their-efforts-to-resolve">
                    2.{" "}
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      Acknowledge Their Efforts to Resolve
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__acknowledge-their-efforts-to-resolve-do">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Recognize and appreciate their effort to address the issue.
                    Acknowledging their initiative shows respect and encourages
                    a positive dialogue.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__acknowledge-their-efforts-to-resolve-dont">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Ignore their attempt to resolve the issue or respond
                    defensively. Engaging calmly shows your willingness to reach
                    a resolution.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__acknowledge-their-efforts-to-resolve-example">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I can see you've put effort into addressing the delay, and
                    I appreciate your willingness to make improvements."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-3-page__process-third-step-container">
                  <p className="ratings-giving-negative-feedback-step-3-page__restate-your-original-feedback">
                    3.{" "}
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      Restate Your Original Feedback
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__restate-your-original-feedback-do">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Politely restate the reasons for your original feedback. Be
                    clear and specific about why you gave the rating and how the
                    issue affected your experience.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__restate-your-original-feedback-dont">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Backtrack on your feedback just to avoid conflict. Stand by
                    your feedback if you believe it was justified, but express
                    it in a professional manner.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__restate-your-original-feedback-example">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "The delayed communication caused significant disruption to
                    my schedule, which is why I left the initial review."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-3-page__process-fourth-step-container">
                  <p className="ratings-giving-negative-feedback-step-3-page__discuss-possible-adjustments">
                    4.{" "}
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      Discuss Possible Adjustments
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__discuss-possible-adjustments-do">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Be open to considering changes to your feedback if the
                    agency has taken concrete steps to resolve the issue. Ask
                    about what actions have been taken to fix the problem and
                    decide if it warrants an update to your review.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__discuss-possible-adjustments-dont">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Refuse to consider adjusting your rating if they've made
                    valid efforts to improve. Resolving conflict means being
                    flexible when necessary.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-3-page__discuss-possible-adjustments-example">
                    <span className="ratings-giving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Now that I understand there were unforeseen challenges and
                    you've taken steps to prevent this in the future, I'm
                    willing to reconsider the rating."
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
