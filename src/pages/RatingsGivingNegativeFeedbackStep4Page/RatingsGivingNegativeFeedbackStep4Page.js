import React from "react";
import "./RatingsGivingNegativeFeedbackStep4Page.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import { Link } from "react-router-dom";

export default function RatingsGivingNegativeFeedbackStep4Page() {
  return (
    <div className="ratings-giving-negative-feedback-step-4-page">
      <HeaderWithProfilePic />
      <div className="ratings-giving-negative-feedback-step-4-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-giving-negative-feedback-step-4-page__right-container">
          <div className="ratings-giving-negative-feedback-step-4-page__container">
            <div className="ratings-giving-negative-feedback-step-4-page__header-container">
              <p className="ratings-giving-negative-feedback-step-4-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-giving-negative-feedback-step-4-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-giving-negative-feedback-step-4-page__giving-negative-feedback-rating-text">
              Giving Negative Feedback/Rating
            </p>
            <div className="ratings-giving-negative-feedback-step-4-page__step-4-container">
              <p className="ratings-giving-negative-feedback-step-4-page__step-4-text">
                <span className="ratings-giving-negative-feedback-step-4-page__step-4-bolded-text">
                  Step 4:
                </span>{" "}
                Rating Adjustment or Feedback Response
              </p>
            </div>
            <p className="ratings-giving-negative-feedback-step-4-page__after-discussing-the-issue">
              After discussing the issue and hearing the other party's
              perspective, you may choose to adjust your rating or leave a
              feedback response. This step requires you to decide whether to
              change your original feedback or explain why you are standing by
              your rating. Here's how to navigate this step effectively.
            </p>
            <div className="ratings-giving-negative-feedback-step-4-page__navigate-step-container">
              <div className="ratings-giving-negative-feedback-step-4-page__navigate-step-inner-container">
                <div className="ratings-giving-negative-feedback-step-4-page__navigate-step-first-step-container">
                  <p className="ratings-giving-negative-feedback-step-4-page__reevaluate-your-feedback-based-on-the-discussion">
                    1.{" "}
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      Reevaluate Your Feedback Based on the Discussion
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__reevaluate-your-feedback-based-on-the-discussion-do">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Reflect on the conversation you had with the agency.
                    Consider whether their explanation and actions warrant an
                    update to your rating or feedback.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__reevaluate-your-feedback-based-on-the-discussion-dont">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Stick to your original rating out of stubbornness if the
                    situation has improved or been resolved. Flexibility can
                    demonstrate fairness.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__reevaluate-your-feedback-based-on-the-discussion-example">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Given the actions taken to address the communication
                    delays, I've updated my review to reflect the resolution of
                    the issue."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-4-page__navigate-step-second-step-container">
                  <p className="ratings-giving-negative-feedback-step-4-page__adjust-your-rating-if-appropriate">
                    2.{" "}
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      Adjust Your Rating (If Appropriate)
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__adjust-your-rating-if-appropriate-do">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the agency has taken steps to correct the issue or
                    provided a reasonable explanation, update your rating to
                    reflect their efforts. Show that you value improvement and
                    resolution.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__adjust-your-rating-if-appropriate-dont">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Overcorrect or change your rating completely if the issue
                    wasn't fully resolved or if you feel your original feedback
                    was justified. A slight adjustment may be enough.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__adjust-your-rating-if-appropriate-example">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I've changed my rating from 2 stars to 4 stars, as the
                    agency quickly addressed the delay and improved
                    communication moving forward."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-4-page__navigate-step-third-step-container">
                  <p className="ratings-giving-negative-feedback-step-4-page__leave-a-feedback-response">
                    3.{" "}
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      Leave a Feedback Response (If Not Adjusting the Rating)
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__leave-a-feedback-response-do">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If you decide not to adjust your rating, you can leave a
                    feedback response that acknowledges the attempt to resolve
                    the issue, even if the resolution didn't meet your
                    expectations. This shows you appreciated their effort.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__leave-a-feedback-response-dont">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Refuse to acknowledge their effort if they genuinely tried
                    to resolve the situation. Even if the outcome wasn't
                    perfect, a response can help maintain professionalism.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__leave-a-feedback-response-example">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "While I appreciate the explanation and effort to address
                    the issue, the original problem had a significant impact on
                    my project, so I'm keeping my review unchanged."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-4-page__navigate-step-fourth-step-container">
                  <p className="ratings-giving-negative-feedback-step-4-page__be-transparent-in-your-update-or-response">
                    4.{" "}
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      Be Transparent in Your Update or Response
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__be-transparent-in-your-update-or-response-do">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Clearly explain why you adjusted your rating or left a
                    feedback response. Transparency shows that you are
                    thoughtful in your decision-making and not easily swayed.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__be-transparent-in-your-update-or-response-dont">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Leave vague updates like "Issue resolved." Be specific so
                    future readers understand the full picture and why your
                    feedback evolved.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__be-transparent-in-your-update-or-response-example">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "After discussing the issue with the agency, they resolved
                    the communication delays, and I'm happy to acknowledge the
                    improvement."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-4-page__navigate-step-fifth-step-container">
                  <p className="ratings-giving-negative-feedback-step-4-page__maintain-a-positive-tone">
                    5.{" "}
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      Maintain a Positive Tone Regardless of Outcome
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__maintain-a-positive-tone-do">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Whether or not you change your rating, keep the tone of your
                    updated feedback or response constructive and professional.
                    Focus on the resolution or attempt to resolve the problem.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__maintain-a-positive-tone-dont">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Use your feedback as an opportunity to vent frustrations or
                    restate grievances in an aggressive tone. Keep the focus on
                    progress or the next steps.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-4-page__maintain-a-positive-tone-example">
                    <span className="ratings-giving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Although the issue initially caused delays, I appreciate
                    the effort made to resolve it, and I hope this leads to
                    smoother projects in the future."
                  </p>
                </div>
              </div>
            </div>
            <div className="ratings-giving-negative-feedback-step-4-page__communicating-and-resolving-feedback-container">
              <div className="ratings-giving-negative-feedback-step-4-page__communicating-and-resolving-feedback-inner-container">
                <p className="ratings-giving-negative-feedback-step-4-page__communicating-and-resolving-feedback-text">
                  Communicating and resolving a feedback issue requires careful
                  listening, mutual respect, and clear dialogue. By hearing the
                  other party's perspective, restating your concerns, and
                  considering possible solutions, you help create an atmosphere
                  where both sides can feel heard and understood. Even if you
                  choose not to adjust your feedback, handling the discussion
                  with professionalism can lead to a more positive outcome.
                </p>
              </div>
            </div>
            <p className="ratings-giving-negative-feedback-step-4-page__when-you-have-completed-step-4">
              When you have completed Step 4 move on to Step 5
            </p>
            <div className="ratings-giving-negative-feedback-step-4-page__bottom-button-container">
              <Link
                className="ratings-giving-negative-feedback-step-4-page__link"
                to="/ratings/giving-negative-feedback-step-5"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="ratings-giving-negative-feedback-step-4-page__go-to-step-5-button">
                  Go to Step 5
                </button>
              </Link>
              <button className="ratings-giving-negative-feedback-step-4-page__back-button">
                Back
              </button>
              <button className="ratings-giving-negative-feedback-step-4-page__go-to-dashboard-messages-button">
                Go to Dashboard Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
