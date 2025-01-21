import React from "react";
import "./RatingsReceivingNegativeFeedbackStep3Page.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import { Link } from "react-router-dom";

export default function RatingsReceivingNegativeFeedbackStep3Page() {
  return (
    <div className="ratings-receiving-negative-feedback-step-3-page">
      <HeaderWithProfilePic />
      <div className="ratings-receiving-negative-feedback-step-3-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-receiving-negative-feedback-step-3-page__right-container">
          <div className="ratings-receiving-negative-feedback-step-3-page__container">
            <div className="ratings-receiving-negative-feedback-step-3-page__header-container">
              <p className="ratings-receiving-negative-feedback-step-3-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-receiving-negative-feedback-step-3-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-receiving-negative-feedback-step-3-page__receiving-negative-feedback-rating-text">
              Receiving Negative Feedback/Rating
            </p>
            <div className="ratings-receiving-negative-feedback-step-3-page__step-3-container">
              <p className="ratings-receiving-negative-feedback-step-3-page__step-3-description">
                <span className="ratings-receiving-negative-feedback-step-3-page__step-3-bolded-text">
                  Step 3:
                </span>
                <span className="ratings-receiving-negative-feedback-step-3-page__communicate-and-resolve-text">
                  Communicate & Resolve
                </span>
              </p>
            </div>
            <p className="ratings-receiving-negative-feedback-step-3-page__when-moving-into">
              When moving into the "communicate and resolve" stage of conflict
              resolution after receiving poor feedback or a bad rating, the
              focus shifts from listening to taking action. This is where you
              actively work together with the other person to find a solution.
              Here's a structured approach to effectively communicate and
              resolve the issue:
            </p>
            <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-container">
              <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-inner-container">
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-first-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__initiate-the-dialogue">
                    1.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Initiate the Dialogue
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__initiate-the-dialogue-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Reach out to the person through MLSA messages to the
                    conversation is documented. Ensure the tone is friendly and
                    solution-oriented.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__initiate-the-dialogue-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Push them into a conversation before they're ready. Ask if
                    it's a good time to discuss the issue.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__initiate-the-dialogue-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Hi [Name], I'd love to chat with you and resolve the issue
                    you raised in your feedback. Is now a good time, or would
                    you prefer to schedule a time that works for you?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-second-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__actively-listen-and-confirm-understanding">
                    2.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Actively Listen and Confirm Understanding
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__actively-listen-and-confirm-understanding-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Listen carefully without interrupting. Paraphrase what they
                    say to show you understand their concerns.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__actively-listen-and-confirm-understanding-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Jump to assumptions or solutions without first confirming
                    you fully understand the problem.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__actively-listen-and-confirm-understanding-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Just to make sure I'm understanding correctly, you're
                    saying that the payment was delayed, and that impacted your
                    experience negatively, right?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-third-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__ask-for-their-desired-outcome">
                    3.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Ask for Their Desired Outcome
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__ask-for-their-desired-outcome-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Ask the person what would make them feel satisfied with the
                    resolution. Sometimes, they may want something simple that
                    you hadn't considered.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__ask-for-their-desired-outcome-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Assume you know what will make things right without asking.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__ask-for-their-desired-outcome-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "What would you consider a fair way to resolve this issue? I
                    want to ensure you're happy with the outcome."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-fourth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__offer-practical-solutions">
                    4.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Offer Practical Solutions
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__offer-practical-solutions-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Propose realistic, actionable solutions based on the
                    feedback and the customer's input. Make sure to outline the
                    steps you will take to resolve the problem.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__offer-practical-solutions-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Overpromise or offer solutions you cannot deliver.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__offer-practical-solutions-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I can offer an extra 5%, or if you prefer, I could offer a
                    10% increase in payment on our next transaction. Which
                    option works best for you?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-fifth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__negotiate-a-compromise">
                    5.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Negotiate a Compromise
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__negotiate-a-compromise-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Negotiation can help both parties find a middle ground. This
                    might mean adjusting the percentage split to reflect each
                    party's contribution or agreeing to split the fees
                    differently for future deals.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__negotiate-a-compromise-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Stick to rigid demands without considering a compromise.
                    Flexibility often leads to a faster and more amicable
                    resolution.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__negotiate-a-compromise-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "While I originally thought the split should be 50/50, I
                    understand your point of view. How about we split it 60/40,
                    based on the issue you had to deal with?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-sixth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__remain-calm-and-focused-on-resolution">
                    6.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Remain Calm and Focused on Resolution
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__remain-calm-and-focused-on-resolution-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Stay calm, even if the person is still upset. Focus on
                    problem-solving and keep the conversation respectful.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__remain-calm-and-focused-on-resolution-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Let the conversation become confrontational. If necessary,
                    offer to pause and resume at a later time if emotions are
                    high.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__remain-calm-and-focused-on-resolution-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I understand this has been frustrating, and I'm committed
                    to resolving it with you. Let's work together on a
                    solution."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-seventh-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__confirm-the-agreed-solution">
                    7.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Confirm the Agreed Solution
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__confirm-the-agreed-solution-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Summarize what you and the person have agreed to, and
                    confirm that they're satisfied with the proposed resolution.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__confirm-the-agreed-solution-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Leave the conversation without a clear understanding from
                    both sides.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__confirm-the-agreed-solution-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Great, so we've agreed that I'll change the split fee to
                    50/50 from 60/40. Does that sound correct?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-eighth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__take-immediate-action">
                    8.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Take Immediate Action
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__take-immediate-action-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Follow through on the solution as soon as possible. The
                    faster you act, the better the person will feel about the
                    resolution.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__take-immediate-action-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Delay taking action, as it can reignite frustration.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__take-immediate-action-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I've processed the refund for you, and you should see it in
                    your account within 2-3 business days."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-ninth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__keep-the-person-updated">
                    9.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Keep the Person Updated
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__keep-the-person-updated-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Provide regular updates if the resolution will take some
                    time (e.g., waiting for a service to be completed).
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__keep-the-person-updated-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Leave the person wondering about the status of their
                    resolution.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__keep-the-person-updated-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Just wanted to let you know that the payment is on its way,
                    and it should arrive by Friday. I'll send you the tracking
                    details shortly."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-3-page__structured-approach-tenth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-3-page__follow-up-after-resolution">
                    10.{" "}
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      Follow Up After Resolution
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__follow-up-after-resolution-do">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Check in with the person once the solution has been
                    delivered to ensure they are happy with the outcome. A
                    personal follow-up adds a human touch and shows that you
                    care about their experience.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__follow-up-after-resolution-dont">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Forget to follow up, as it could make the person feel
                    neglected after the issue was resolved.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-3-page__follow-up-after-resolution-example">
                    <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Hi [Name], I just wanted to check in and make sure
                    everything is now resolved to your satisfaction. Is there
                    anything else I can help with?"
                  </p>
                </div>
              </div>
            </div>
            <div className="ratings-receiving-negative-feedback-step-3-page__tips-for-successful-communication-and-resolution-container">
              <div className="ratings-receiving-negative-feedback-step-3-page__tips-for-successful-communication-and-resolution-inner-container">
                <p className="ratings-receiving-negative-feedback-step-3-page__tips-for-successful-communication-and-resolution-header">
                  Tips for Successful Communication and Resolution:
                </p>
                <p className="ratings-receiving-negative-feedback-step-3-page__be-transparent">
                  <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                    Be Transparent:
                  </span>{" "}
                  Honesty about what you can and can't do builds trust. If
                  something isn't feasible, explain why and offer a reasonable
                  alternative.
                </p>
                <p className="ratings-receiving-negative-feedback-step-3-page__maintain-a-positive-attitude">
                  <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                    Maintain a Positive Attitude:{" "}
                  </span>{" "}
                  Keep the conversation positive and constructive, even if the
                  feedback was harsh. A positive tone encourages cooperation.
                </p>
                <p className="ratings-receiving-negative-feedback-step-3-page__focus-on-the-future">
                  <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                    Focus on the Future:
                  </span>{" "}
                  Use the opportunity to learn and improve, both for your
                  business and the relationship with the person.
                </p>
                <p className="ratings-receiving-negative-feedback-step-3-page__leave-room-for-improvement">
                  <span className="ratings-receiving-negative-feedback-step-3-page__bolded-text">
                    Leave Room for Improvement:
                  </span>{" "}
                  Offer ongoing support, letting the person know they can reach
                  out again if any future issues arise.
                </p>
                <p className="ratings-receiving-negative-feedback-step-3-page__by-focusing-on-clear-respectful-communication">
                  By focusing on clear, respectful communication and a swift
                  resolution, you can not only fix the problem but also turn the
                  negative experience into a positive one. This process fosters
                  goodwill and can lead to a stronger, ongoing relationship.
                </p>
              </div>
            </div>
            <p className="ratings-receiving-negative-feedback-step-3-page__when-you-have-completed-step-3">
              When you have completed Step 3 move on to Step 4
            </p>
            <div className="ratings-receiving-negative-feedback-step-3-page__bottom-button-container">
              <Link
                className="ratings-receiving-negative-feedback-step-3-page__link"
                to="/ratings-receiving-negative-feedback-step-4-page"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="ratings-receiving-negative-feedback-step-3-page__go-to-step-4-button">
                  Go to Step 4
                </button>
              </Link>
              <button className="ratings-receiving-negative-feedback-step-3-page__back-button">
                Back
              </button>
              <button className="ratings-receiving-negative-feedback-step-3-page__go-to-dashboard-messages-button">
                Go to Dashboard Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
