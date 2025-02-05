import React from "react";
import "./RatingsReceivingNegativeFeedbackPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import { Link } from "react-router-dom";

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
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-sixth-step-container">
                  <p className="ratings-receiving-negative-feedback-page__focus-on-long-term-relationships">
                    6.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Focus on Long-Term Relationships
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__focus-on-long-term-relationships-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Members should aim to resolve conflicts in a way that
                    preserves professional relationships. The staffing industry
                    is relationship-driven, and burning bridges over a single
                    transaction can harm future business opportunities.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__focus-on-long-term-relationships-dont">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Sacrifice long-term partnerships for short-term gains.
                    Finding a fair compromise benefits both parties in the long
                    run.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__focus-on-long-term-relationships-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I value our working relationship, and I want to make sure
                    we both feel this resolution is fair. Let's resolve this so
                    we can continue collaborating in the future."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-seventh-step-container">
                  <p className="ratings-receiving-negative-feedback-page__offer-a-solution-or-compromise">
                    7.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Offer a Solution or Compromise
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__offer-a-solution-or-compromise-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Present a concrete solution or offer alternatives to resolve
                    the issue. Be flexible, and ask the person what would help
                    make things right for them.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__offer-a-solution-or-compromise-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I'd like to make it up to you. What could I do to help
                    address the issue?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-eighth-step-container">
                  <p className="ratings-receiving-negative-feedback-page__listen-and-be-empathetic">
                    8.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Listen and Be Empathetic
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__listen-and-be-empathetic-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Show genuine care for their experience. Sometimes, people
                    just want to feel heard. Be empathetic and patient while
                    listening to their concerns.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__listen-and-be-empathetic-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I completely understand how this situation could be
                    frustrating. Let me see what I can do to ensure it doesn't
                    happen again."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-ninth-step-container">
                  <p className="ratings-receiving-negative-feedback-page__provide-assurance">
                    9.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Provide Assurance
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__provide-assurance-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Let the person know what steps you're taking to ensure the
                    issue won't be repeated. This builds trust and shows that
                    you are committed to improvement.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__provide-assurance-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I've already taken steps to address this internally, and
                    we're reviewing our processes to prevent similar
                    situations."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-tenth-step-container">
                  <p className="ratings-receiving-negative-feedback-page__follow-up">
                    10.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Follow Up
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__follow-up-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Once the situation is resolved, follow up to make sure they
                    are satisfied. This should be through a MLSA message to show
                    your commitment to making things right.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__follow-up-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I just wanted to check to see if the resolution was
                    satisfactory and it there's anything else I can do."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-eleventh-step-container">
                  <p className="ratings-receiving-negative-feedback-page__ask-for-revised-feedback">
                    11.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Ask for Revised Feedback
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__ask-for-revised-feedback-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the issue is resolved and the person is satisfied, you
                    can politely ask if they'd be willing to update their review
                    or feedback to reflect the resolution.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__ask-for-revised-feedback-example">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "If you're happy with the outcome, it would mean a lot to us
                    if you could consider updating your review."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__step-by-step-guide-twelfth-step-container">
                  <p className="ratings-receiving-negative-feedback-page__stay-positive-and-gracious">
                    12.{" "}
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Stay Positive and Gracious
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__stay-positive-and-gracious-do">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Even if the person does not change their feedback, thank
                    them again for the opportunity to improve. Handling a
                    difficult situation gracefully leaves a lasting positive
                    impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="ratings-receiving-negative-feedback-page__tips-for-a-win-win-outcome-container">
              <div className="ratings-receiving-negative-feedback-page__tips-for-a-win-win-outcome-inner-container">
                <p className="ratings-receiving-negative-feedback-page__tips-for-a-win-win-outcome-header">
                  Tips for a Win-Win Outcome:
                </p>
                <div className="ratings-receiving-negative-feedback-page__tips-for-a-win-win-outcome-top-container">
                  <p className="ratings-receiving-negative-feedback-page__focus-on-the-future">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Focus on the future:
                    </span>{" "}
                    Start the conversation from what went wrong to how you can
                    improve the experience moving forward.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__personalize-your-approach">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Personalize your approach:
                    </span>{" "}
                    Make the other person feel special by tailoring your
                    responses and solutions to their specific situation.
                  </p>
                  <p className="ratings-receiving-negative-feedback-page__encourage-ongoing-communication">
                    <span className="ratings-receiving-negative-feedback-page__bolded-text">
                      Encourage ongoing communication:
                    </span>{" "}
                    Offer to keep an open line for any future concerns, showing
                    that you value long-term relationships.
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-page__tips-for-a-win-win-outcome-bottom-container">
                  <p className="ratings-receiving-negative-feedback-page__tips-for-a-win-win-outcome-following-these-steps">
                    By following these steps, you're more likely to turn a
                    negative experience into a constructive one, leaving both
                    parties feeling respected and valued.
                  </p>
                </div>
              </div>
            </div>
            <p className="ratings-receiving-negative-feedback-page__when-you-have-completed-step-2">
              When you have completed Step 2 move on to Step 3
            </p>
            <div className="ratings-receiving-negative-feedback-page__bottom-button-container">
              <Link
                className="ratings-receiving-negative-feedback-page__link"
                to="/ratings/receiving-negative-feedback-step-3"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="ratings-receiving-negative-feedback-page__go-to-step-3-button">
                  Go to Step 3
                </button>
              </Link>
              <button className="ratings-receiving-negative-feedback-page__back-button">
                Back
              </button>
              <button className="ratings-receiving-negative-feedback-page__go-to-dashboard-messages-button">
                Go to Dashboard Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
