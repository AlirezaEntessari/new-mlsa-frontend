import React from "react";
import "./RatingsReceivingNegativeFeedbackStep4Page.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import { Link } from "react-router-dom";

export default function RatingsReceivingNegativeFeedbackStep4Page() {
  return (
    <div className="ratings-receiving-negative-feedback-step-4-page">
      <HeaderWithProfilePic />
      <div className="ratings-receiving-negative-feedback-step-4-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-receiving-negative-feedback-step-4-page__right-container">
          <div className="ratings-receiving-negative-feedback-step-4-page__container">
            <div className="ratings-receiving-negative-feedback-step-4-page__header-container">
              <p className="ratings-receiving-negative-feedback-step-4-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-receiving-negative-feedback-step-4-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-receiving-negative-feedback-step-4-page__receiving-negative-feedback-rating-text">
              Receiving Negative Feedback/Rating
            </p>
            <div className="ratings-receiving-negative-feedback-step-4-page__step-4-container">
              <p className="ratings-receiving-negative-feedback-step-4-page__step-4-text">
                <span className="ratings-receiving-negative-feedback-step-4-page__step-4-bolded-text">
                  Step 4:
                </span>{" "}
                <span className="ratings-receiving-negative-feedback-step-4-page__rating-adjustment-or-feedback-response-text">
                  Rating Adjustment or Feedback Response
                </span>
              </p>
            </div>
            <p className="ratings-receiving-negative-feedback-step-4-page__when-the-conflict-has-been-addressed">
              When the conflict has been addressed, and it's time to move on to
              the "rating adjustment or feedback response" stage, the focus
              shifts to managing the public perception of the resolution and
              improving your reputation. Whether the rating or feedback gets
              adjusted or not, how you handle this stage can leave a lasting
              impression. Here's how to approach it professionally and
              effectively.
            </p>
            <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-container">
              <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-inner-container">
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-first-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__politely-request-a-rating-adjustment">
                    1.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Politely Request a Rating Adjustment
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__politely-request-a-rating-adjustment-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the issue has been resolved to the person's satisfaction,
                    you can politely ask if they would be willing to update the
                    rating or feedback to reflect the resolution. Frame it as a
                    request, not an expectation.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__politely-request-a-rating-adjustment-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Pressure or guilt-trip the person into changing their
                    feedback. Respect their decision if they choose not to.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__politely-request-a-rating-adjustment-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I'm glad we were able to resolve the issue. If you feel
                    that the solution we reached addressed your concerns, would
                    you be open to updating your rating to reflect that? Your
                    feedback means a lot to us."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-second-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__make-it-easy-for-them-to-update">
                    2.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Make It Easy for Them to Update
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__make-it-easy-for-them-to-update-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Provide clear instructions on how they can update their
                    feedback or rating on the platform. Sometimes, people are
                    willing but unsure of how to proceed.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__make-it-easy-for-them-to-update-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Assume they know how to update the review. Offering guidance
                    ensures it's easy for them to take action.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__make-it-easy-for-them-to-update-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "If you'd like to update your review, you can do so by going
                    back to your original post, clicking on 'Edit,' and making
                    any changes you feel are appropriate."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-third-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__respond-graciously">
                    3.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Respond Graciously to Unchanged or Negative Feedback
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__respond-graciously-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the person chooses not to update their rating or
                    continues to express dissatisfaction, respond publicly with
                    professionalism and gratitude. Acknowledge their feedback
                    and reiterate your commitment to improving based on their
                    input.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__respond-graciously-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Argue or express frustration in your response. This can
                    further damage your reputation.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__respond-graciously-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you again for your feedback. While I'm sorry we
                    couldn't fully meet your expectations, I appreciate the
                    opportunity to address your concerns and will continue to
                    use your feedback to improve our services."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-fourth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__craft-a-public-response">
                    4.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Craft a Public Response to the Feedback
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__craft-a-public-response-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    In cases where feedback or a rating cannot be changed (or is
                    not changed), responding publicly is crucial. This shows
                    other potential clients that you take the feedback
                    seriously, even if it's negative. Acknowledge the issue,
                    outline the steps you took to resolve it, and express a
                    willingness to continue improving.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__craft-a-public-response-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Be vague in your response. Specifics help build credibility
                    and show that you're addressing real concerns.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__craft-a-public-response-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "We're sorry to hear about your initial experience, but
                    we're glad we could work together to find a resolution. Your
                    satisfaction is our top priority, and we appreciate the
                    chance to improve based on your feedback."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-fifth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__highlight-the-resolution">
                    5.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Highlight the Resolution in Your Response
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__highlight-the-resolution-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the situation was resolved, make sure to highlight that
                    in your response. This helps assure others who read the
                    review that you are proactive in handling issues.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__highlight-the-resolution-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Ignore the original complaint or only focus on the
                    resolution. Acknowledge the issue to show transparency.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__highlight-the-resolution-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "We understand that there was a delay in delivery, and we
                    sincerely apologize for the inconvenience. We're glad we
                    were able to provide you with a replacement, and we've
                    already taken steps to prevent this issue in the future."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-sixth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__remain-professional-and-positive">
                    6.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Remain Professional and Positive
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__remain-professional-and-positive-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Keep the tone of your responses professional, positive, and
                    solution-oriented. Even if the feedback is harsh, other
                    people reading your response will see your professionalism.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__remain-professional-and-positive-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Respond with defensiveness or sarcasm. A negative tone can
                    escalate the situation and reflect poorly on your brand.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__remain-professional-and-positive-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you for taking the time to share your thoughts. We're
                    sorry for the inconvenience, and we'll continue to work on
                    improving our services to provide a better experience for
                    everyone."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-seventh-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__use-feedback-as-a-learning-opportunity">
                    7.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Use Feedback as a Learning Opportunity
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__use-feedback-as-a-learning-opportunity-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Highlight in your response how you're using the feedback to
                    improve. This shows that you're proactive and turning a
                    negative experience into a learning opportunity.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__use-feedback-as-a-learning-opportunity-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Ignore valuable constructive criticism. Addressing it
                    publicly can demonstrate that you're committed to bettering
                    your services.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__use-feedback-as-a-learning-opportunity-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "We've taken your comments seriously and have already made
                    changes to our process to ensure this doesn't happen again.
                    We're grateful for your input, and it's helping us improve."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-eighth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__encourage-future-interaction">
                    8.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Encourage Future Interaction
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__encourage-future-interaction-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Even after resolving the issue, invite the person to reach
                    out again if they have further concerns. This leaves the
                    door open for continued engagement and demonstrates that you
                    value long-term relationships.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__encourage-future-interaction-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't
                    </span>{" "}
                    Assume that one resolution means the relationship is over.
                    Encourage continued dialogue.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__encourage-future-interaction-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Please don't hesitate to reach out in the future if there's
                    anything else we can do for you. We're always here to help!"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-ninth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__handle-positive-feedback-after-conflict">
                    9.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Handle Positive Feedback After Conflict
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__handle-positive-feedback-after-conflict-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If the customer updates their feedback to something
                    positive, thank them for revisiting their experience. This
                    reinforces goodwill and shows appreciation for their time
                    and effort in making the update.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__handle-positive-feedback-after-conflict-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Forget to publicly acknowledge and thank them for changing
                    their review.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__handle-positive-feedback-after-conflict-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you so much for updating your review! We're happy
                    that we could turn things around for you, and we appreciate
                    your willingness to give us a second chance."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-4-page__approach-steps-tenth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-4-page__learn-from-the-process">
                    10.{" "}
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      Learn from the Process
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__learn-from-the-process-do">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Whether the feedback is changed or not, use this experience
                    to improve how you handle similar situations in the future.
                    Reflect on what went well and what could be done better next
                    time.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__learn-from-the-process-dont">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Ignore recurring patterns in negative feedback. If similar
                    issues keep coming up, it's a sign that adjustments need to
                    be made in your service or process.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-4-page__learn-from-the-process-example">
                    <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "We've noticed similar feedback regarding communication
                    delays, so we've implemented new measures to improve our
                    response times and keep clients better informed."
                  </p>
                </div>
              </div>
            </div>
            <div className="ratings-receiving-negative-feedback-step-4-page__tips-for-managing-ratings-container">
              <p className="ratings-receiving-negative-feedback-step-4-page__tips-for-managing-ratings-header">
                Tips for Managing Ratings and Feedback After Conflict:
              </p>
              <div className="ratings-receiving-negative-feedback-step-4-page__tips-for-managing-ratings-inner-container">
                <p className="ratings-receiving-negative-feedback-step-4-page__be-transparent-text">
                  <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                    Be Transparent:
                  </span>{" "}
                  Other potential clients will appreciate seeing your honest,
                  solution-oriented responses. It shows that you take all
                  feedback seriously.
                </p>
                <p className="ratings-receiving-negative-feedback-step-4-page__stay-consistent-text">
                  <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                    Stay Consistent:
                  </span>{" "}
                  Keep your tone and approach consistent across all feedback
                  responses, whether positive or negative. Professionalism
                  should be maintained at all times.
                </p>
                <p className="ratings-receiving-negative-feedback-step-4-page__follow-through-text">
                  <span className="ratings-receiving-negative-feedback-step-4-page__bolded-text">
                    Follow Through:
                  </span>{" "}
                  If you promise changes or improvements in your response,
                  ensure you follow through. Your credibility is built on
                  actions, not just words.
                </p>
                <p className="ratings-receiving-negative-feedback-step-4-page__way-you-handle-feedback">
                  The way you handle feedback, especially negative feedback,
                  plays a significant role in shaping your reputation. Even if
                  the rating or review isn't adjusted, your public response can
                  turn a negative situation into a demonstration of your
                  professionalism and commitment to customer satisfaction.
                </p>
              </div>
            </div>
            <p className="ratings-receiving-negative-feedback-step-4-page__when-you-have-completed-step-4">
              When you have completed Step 4 move on to Step 5
            </p>
            <div className="ratings-receiving-negative-feedback-step-4-page__bottom-button-container">
              <Link
                to="/ratings-receiving-negative-feedback-step-5-page"
                className="ratings-receiving-negative-feedback-step-4-page__link"
                onClick={() => window.scrollTo(0, 0)}
              >
                <button className="ratings-receiving-negative-feedback-step-4-page__go-to-step-5-button">
                  Go to Step 5
                </button>
              </Link>
              <button className="ratings-receiving-negative-feedback-step-4-page__back-button">
                Back
              </button>
              <button className="ratings-receiving-negative-feedback-step-4-page__go-to-dashboard-messages-button">
                Go to Dashboard Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
