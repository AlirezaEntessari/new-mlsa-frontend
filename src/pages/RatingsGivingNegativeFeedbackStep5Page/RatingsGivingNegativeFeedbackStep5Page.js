import React from "react";
import "./RatingsGivingNegativeFeedbackStep5Page.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function RatingsGivingNegativeFeedbackStep5Page() {
  return (
    <div className="ratings-giving-negative-feedback-step-5-page">
      <HeaderWithProfilePic />
      <div className="ratings-giving-negative-feedback-step-5-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-giving-negative-feedback-step-5-page__right-container">
          <div className="ratings-giving-negative-feedback-step-5-page__container">
            <div className="ratings-giving-negative-feedback-step-5-page__header-container">
              <p className="ratings-giving-negative-feedback-step-5-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-giving-negative-feedback-step-5-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-giving-negative-feedback-step-5-page__giving-negative-feedback-rating-text">
              Giving Negative Feedback/Rating
            </p>
            <div className="ratings-giving-negative-feedback-step-5-page__step-5-container">
              <p className="ratings-giving-negative-feedback-step-5-page__step-5-text">
                <span className="ratings-giving-negative-feedback-step-5-page__step-5-bolded-text">
                  Step 5:
                </span>{" "}
                <span className="ratings-giving-negative-feedback-step-5-page__end-dispute-text">
                  End Dispute
                </span>
              </p>
            </div>
            <p className="ratings-giving-negative-feedback-step-5-page__after-communicating">
              After communicating, considering adjustments, and deciding on any
              feedback updates, it's important to conclude the process properly
              and professionally. Ending a dispute on a positive, respectful
              note is key to maintaining a constructive relationship and leaving
              the door open for future collaboration. Here's how to effectively
              end the dispute:
            </p>
            <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-container">
              <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-inner-container">
                <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-first-step-container">
                  <p className="ratings-giving-negative-feedback-step-5-page__reevaluate-the-feedback">
                    1.{" "}
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      Reevaluate Your Feedback Based on the Discussion
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__reevaluate-the-feedback-do">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Reflect on the conversation you had with the agency.
                    Consider whether their explanation and actions warrant an
                    update to your rating or feedback.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__reevaluate-the-feedback-dont">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Stick to your original ratingout of stubbornness if the
                    situation has improved or been resolved. Flexibility can
                    demonstrate fairness.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__reevaluate-the-feedback-example">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Given the actions taken to address the communication
                    delays, I've updated my review to reflect the resolution of
                    the issue."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-second-step-container">
                  <p className="ratings-giving-negative-feedback-step-5-page__acknowledge-the-resolution">
                    2.{" "}
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      Acknowledge Resolution (if Achieved)
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__acknowledge-the-resolution-do">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the issue has been resolved to your satisfaction,
                    acknowledge it clearly. This shows gratitude for the other
                    party's efforts and helps close the matter with mutual
                    understanding.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__acknowledge-the-resolution-dont">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    End the dispute without acknowledging the resolution.
                    Failing to do so can leave the issue open-ended, making it
                    harder to fully move on.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__acknowledge-the-resolution-example">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you for resolving the communication delays. I'm
                    satisfied with how we've addressed the issue, and I
                    appreciate your willingness to make things right."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-third-step-container">
                  <p className="ratings-giving-negative-feedback-step-5-page__be-professional-no-resolution-reached">
                    3.{" "}
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      Be Professional Even If No Full Resolution Was Reached
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__be-professional-no-resolution-reached-do">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the issue couldn't be fully resolved, still close the
                    discussion professionally. Indicate that you understand
                    their efforts and respect their position, even if no further
                    action will be taken.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__be-professional-no-resolution-reached-dont">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Leave the conversation on a negative note or reopen the
                    issue after the dispute has been addressed. This can cause
                    unnecessary tension and prolong the conflict.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__be-professional-no-resolution-reached-example">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      Example:
                    </span>{" "}
                    "Although we couldn't come to a complete resolution, I
                    appreciate the time you took to address the issue. I hope we
                    can avoid similar problems in the future."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-fourth-step-container">
                  <p className="ratings-giving-negative-feedback-step-5-page__ensure-clarity-final-communication">
                    4.{" "}
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      Ensure Clarity in the Final Communication
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__ensure-clarity-final-communication-do">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Be clear that the dispute is now closed from your side.
                    Whether or not you adjusted your rating, make it known that
                    the conversation has reached its conclusion and no further
                    action is needed.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__ensure-clarity-final-communication-dont">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Leave ambiguity about whether the issue is fully resolved. A
                    lack of clarity can lead to further unnecessary
                    communication or confusion.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__ensure-clarity-final-communication-example">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I believe we've addressed the concerns thoroughly, and I
                    consider the matter closed. Thank you again for your
                    efforts."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-fifth-step-container">
                  <p className="ratings-giving-negative-feedback-step-5-page__thank-the-other-party">
                    5.{" "}
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      Thank the Other Party for Their Time and Effort
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__thank-the-other-party-do">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Always express gratitude for the time and effort the other
                    party took to address your feedback. This leaves a positive
                    impression, even if the outcome wasn't ideal.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__thank-the-other-party-dont">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    End the dispute abruptly without any appreciation. Even if
                    you were dissatisfied, acknowledging the other party's
                    engagement shows maturity and professionalism.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__thank-the-other-party-example">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you for taking the time to discuss the issue and work
                    toward a resolution. I value your willingness to engage with
                    me on this."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-step-5-page__end-the-dispute-sixth-step-container">
                  <p className="ratings-giving-negative-feedback-step-5-page__focus-on-moving-forward">
                    6.{" "}
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      Focus on Moving Forward
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__focus-on-moving-forward-do">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Highlight a positive outlook moving forward, especially if
                    there's potential for future collaboration. Keeping a
                    forward-focused mindset encourages future cooperation.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__focus-on-moving-forward-dont">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Dwell on past grievances or leave the dispute in a way that
                    discourages future business. Ending positively leaves the
                    door open for continued professional relationships.
                  </p>
                  <p className="ratings-giving-negative-feedback-step-5-page__focus-on-moving-forward-example">
                    <span className="ratings-giving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I'm hopeful that our future projects will go smoothly and
                    that we can continue to work together in a constructive
                    way."
                  </p>
                </div>
                <p className="ratings-giving-negative-feedback-step-5-page__ending-a-dispute-effectively">
                  Ending a dispute effectively is crucial for maintaining
                  professionalism and ensuring that the resolution process has
                  been fruitful. Whether the issue was fully resolved or not,
                  closing the conversation with respect, clarity, and
                  appreciation sets a positive tone for the future. By
                  acknowledging the resolution or the efforts made, you leave
                  the door open for continued collaboration and help maintain a
                  constructive working relationship.
                </p>
              </div>
            </div>
            <div className="ratings-giving-negative-feedback-step-5-page__communicating-resolving-feedback-issue-container">
              <div className="ratings-giving-negative-feedback-step-5-page__communicating-resolving-feedback-issue-inner-container">
                <p className="ratings-giving-negative-feedback-step-5-page__communicating-resolving-feedback-issue-text">
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
            <p className="ratings-giving-negative-feedback-step-5-page__when-you-have-completed-step-5">
              When you have completed Step 5 you may end the dispute
            </p>
            <div className="ratings-giving-negative-feedback-step-5-page__bottom-button-container">
              <button className="ratings-giving-negative-feedback-step-5-page__end-dispute-button">
                End Dispute
              </button>
              <button className="ratings-giving-negative-feedback-step-5-page__back-button">
                Back
              </button>
              <button className="ratings-giving-negative-feedback-step-5-page__go-to-dashboard-messages-button">
                Go to Dashboard Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
