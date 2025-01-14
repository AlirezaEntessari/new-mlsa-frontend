import React from "react";
import "./RatingsGivingNegativeFeedbackPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function RatingsGivingNegativeFeedbackPage() {
  return (
    <div className="ratings-giving-negative-feedback-page">
      <HeaderWithProfilePic />
      <div className="ratings-giving-negative-feedback-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-giving-negative-feedback-page__right-container">
          <div className="ratings-giving-negative-feedback-page__container">
            <div className="ratings-giving-negative-feedback-page__header-container">
              <p className="ratings-giving-negative-feedback-page__header">
                Ratings & Feedback
              </p>
              <img
                className="ratings-giving-negative-feedback-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-giving-negative-feedback-page__giving-negative-feedback-rating-text">
              Giving Negative Feedback/Rating
            </p>
            <p className="ratings-giving-negative-feedback-page__when-preparing-to-give-bad-rating">
              When you're preparing to give a bad rating or negative feedback,
              it's important to approach the situation thoughtfully to ensure
              your concerns are communicated effectively and fairly. Negative
              feedback can be valuable when it's constructive, helping the
              person or company improve their service. However, it's also
              crucial to provide it in a way that encourages growth, rather than
              fostering defensiveness or negativity. Here's a step-by-step
              approach to giving feedback in a way that promotes understanding
              and resolution:
            </p>
            <div className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-container">
              <p className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-header">
                Steps for Giving Negative Feedback:
              </p>
              <div className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-inner-container">
                <div className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-first-step-container">
                  <p className="ratings-giving-negative-feedback-page__evaluate-the-situation-objectively">
                    1.{" "}
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      Evaluate the Situation Objectively
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-page__evaluate-the-situation-objectively-do">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Take a step back and assess the issue calmly. Consider
                    whether your frustration stems from a temporary problem or
                    if it reflects a larger, ongoing issue.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__evaluate-the-situation-objectively-dont">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    React immediately in the heat of the moment. Emotional
                    reactions can lead to overly harsh or less constructive
                    feedback.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__evaluate-the-situation-objectively-tip">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Tip:
                    </span>{" "}
                    Before leaving a negative review for an Agency due to slow
                    payment, take a moment to determine if it was an isolated
                    incident or a recurring issue.
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-second-step-container">
                  <p className="ratings-giving-negative-feedback-page__be-specific-and-clear">
                    2.{" "}
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      Be Specific and Clear
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-page__be-specific-and-clear-do">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Focus on specific problems you encountered and explain why
                    they affected your experience.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__be-specific-and-clear-dont">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Leave vague or general complaints like "bad transaction" or
                    "terrible experience."
                  </p>
                  <p className="ratings-giving-negative-feedback-page__be-specific-and-clear-example">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "The project was delayed by two weeks, which caused me to
                    miss an important deadline for my client."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-third-step-container">
                  <p className="ratings-giving-negative-feedback-page__offer-constructive-suggestions">
                    3.{" "}
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      Offer Constructive Suggestions
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-page__offer-constructive-suggestions-do">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Provide actionable suggestions for improvement. Consider how
                    the situation could have been handled differently.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__offer-constructive-suggestions-dont">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Just complain without offering advice for improvement.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__offer-constructive-suggestions-example">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "To improve, I would suggest providing more frequent updates
                    on project progress."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-fourth-step-container">
                  <p className="ratings-giving-negative-feedback-page__remain-professional-and-respectful">
                    4.{" "}
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      Remain Professional and Respectful
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-page__remain-professional-and-respectful-do">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Keep your tone calm, respectful, and professional. Focus on
                    the issue, not personal attacks or emotional language.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__remain-professional-and-respectful-dont">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Use insults, sarcasm, or offensive language.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__remain-professional-and-respectful-example">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I was disappointed with the delay, but I appreciate your
                    effort to resolve the issue."
                  </p>
                </div>
                <div className="ratings-giving-negative-feedback-page__steps-for-giving-negative-feedback-fifth-step-container">
                  <p className="ratings-giving-negative-feedback-page__consider-private-communication-first">
                    5.{" "}
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      Consider Private Communication First
                    </span>
                  </p>
                  <p className="ratings-giving-negative-feedback-page__consider-private-communication-first-do">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If possible, reach out privately before leaving public
                    negative feedback to resolve the issue directly.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__consider-private-communication-first-dont">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Go straight to a public forum if the issue could be resolved
                    through direct communication.
                  </p>
                  <p className="ratings-giving-negative-feedback-page__consider-private-communication-first-example">
                    <span className="ratings-giving-negative-feedback-page__bolded-text">
                      -Example:
                    </span>{" "}
                    Contact the Agency directly to address the concern before
                    leaving a review: "I experienced some delays, and I'd like
                    to discuss how we can avoid this in the future."
                  </p>
                </div>
              </div>
            </div>
            <div className="ratings-giving-negative-feedback-page__more-about-step-1-container">
              <div className="ratings-giving-negative-feedback-page__more-about-step-1-inner-container">
                <p className="ratings-giving-negative-feedback-page__more-about-step-1-header">
                  More about Step 1:
                </p>
                <p className="ratings-giving-negative-feedback-page__more-about-step-1-description">
                  Giving negative feedback or a bad rating is sometimes
                  necessary, but the way you present it can make a big
                  difference in how it's received. By being clear, specific, and
                  respectful, you're not only expressing your dissatisfaction
                  but also offering valuable insights that can lead to
                  improvement. Constructive feedback encourages positive changes
                  and helps build better experiences in the future for both you
                  and others.
                </p>
              </div>
            </div>
            <p className="ratings-giving-negative-feedback-page__if-you-have-been-contacted-by-another-agency">
              If you have been contacted by another Agency about the negative
              rating or feedback you left:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
