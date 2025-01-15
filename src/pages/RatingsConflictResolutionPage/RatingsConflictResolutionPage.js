import React from "react";
import "./RatingsConflictResolutionPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import ValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RatingsConflictResolutionPage() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    console.log("Button clicked! Navigating to /ratings-home-page...");
    try {
      navigate("/ratings-home-page");
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };

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
                guidelines to help you provide meaningful and effective ratings:
              </p>
              <ol className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-list">
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-list-first-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Be Honest and Transparent
                  </span>
                  - Always provide a truthful account of your experience.
                  Ratings should reflect the actual quality of the service or
                  interaction.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-list-second-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Focus on Specifics
                  </span>
                  - Highlight key details that led to your rating. Provide clear
                  examples to support your feedback, whether positive or
                  negative.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-list-third-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Be Respectful and Professional
                  </span>
                  - Use courteous language, even when discussing areas of
                  improvement. Avoid personal attacks or emotional outbursts.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-list-fourth-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Consider Resolution First
                  </span>
                  - Before submitting a negative rating (anything below 4
                  stars), consider resolving the issue directly with the other
                  party through clear communication.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-list-fifth-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Use Constructive Criticism
                  </span>
                  - If you provide lower ratings, offer suggestions for
                  improvement. This can help the other party understand how to
                  improve their performance.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-list-sixth-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Avoid Bias
                  </span>
                  - Focus on the facts of the experience, not personal feelings
                  or external factors unrelated to the service provided.
                </li>
              </ol>
              <p className="ratings-conflict-resolution-page__mobile-guidelines-for-rating-agencies-and-writing-feedback-bottom-description">
                By following these guidelines, you help maintain a balanced and
                professional review system that benefits all users.
              </p>
            </div>
            <div className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-container">
              <p className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-header">
                Guidelines for Receiving Negative Ratings or Feedback
              </p>
              <p className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-description">
                Receiving negative feedback can be challenging, but it's
                important to handle the situation professionally. Below are
                guidelines to help you respond constructively and resolve
                issues:
              </p>
              <ol className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-list">
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-first-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Stay Calm and Professional
                  </span>
                  - Avoid reacting emotionally. Take time to process the
                  feedback before responding to ensure a calm and thoughtful
                  approach. Waiting 24 hours before responding is recommended.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-second-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Review the Feedback Carefully
                  </span>
                  - Understand the specific concerns or issues raised. Focus on
                  the details to identify where improvements can be made. If you
                  find yourself becoming emotional, step away and reread the
                  feedback a second or third time with a fresh look.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-third-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Reach Out for Clarification
                  </span>
                  - if any part of the feedback seems unclear to unfair, contact
                  the other party to discuss it professionally. Open
                  communication can often resolve misunderstandings.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-fourth-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Acknowledge Mistakes
                  </span>
                  - If valid points are raised, acknowledge them and explain how
                  you plan to address the issues in the future. This shows
                  responsibility and a willingness to improve.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-fifth-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Request a Review Update
                  </span>
                  - If you've taken steps to resolve the issue, politely ask the
                  other party if they are willing to update their rating or
                  feedback to reflect the improved situation.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-sixth-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Learn and Grow
                  </span>
                  - Use the feedback as an opportunity to learn and improve.
                  Constructive criticism can help you refine your services or
                  approach.
                </li>
                <li className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-seventh-step">
                  <span className="ratings-conflict-resolution-page__mobile-guidelines-bolded-text">
                    Maintain Professionalism
                  </span>
                  - Even if the feedback feels unfair, responding with
                  professionalism helps maintain your reputation and builds
                  trust with other users.
                </li>
              </ol>
              <p className="ratings-conflict-resolution-page__mobile-guidelines-for-receiving-negative-ratings-or-feedback-bottom-description">
                These guidelines can help you handle negative ratings in a
                constructive and proactive way, turning a difficult situation
                into an opportunity for growth and improvement. Continue to Step
                1 below if you would like to resolve a conflict with ratings or
                feedback.
              </p>
            </div>
            <div className="ratings-conflict-resolution-page__mobile-step-1-container">
              <p className="ratings-conflict-resolution-page__mobile-step-1-container-inner-text">
                <span className="ratings-conflict-resolution-page__mobile-step-1-container-bolded-text">
                  Step 1:
                </span>
                <span className="ratings-conflict-resolution-page__mobile-step-1-container-description">
                  Identify what type of conflict you are experiencing
                </span>
              </p>
            </div>
            <p className="ratings-conflict-resolution-page__mobile-which-path-describes-your-issue-header">
              Which Path Describes Your Issue?
            </p>
            <div className="ratings-conflict-resolution-page__mobile-would-like-to-leave-negative-feedback-container">
              <p className="ratings-conflict-resolution-page__mobile-would-like-to-leave-negative-feedback-header">
                I would like to leave or have left a Negative Rating or Feedback
              </p>
              <p className="ratings-conflict-resolution-page__mobile-would-like-to-leave-negative-feedback-description">
                Before submitting negative feedback, we encourage you to
                carefully reconsider and ensure it is fair and accurate. It's
                important to approach this thoughtfully, focusing on specific
                points that led to your dissatisfaction. Consider first
                addressing any concerns directly with the other party in a
                professional and respectful manner. By doing so, you allow both
                sides the opportunity to resolve the issue and maintain the
                integrity of our review system. Submitting negative feedback can
                have lasting effects, so please be sure it reflects your
                experience accurately and constructively.
              </p>
              <div className="ratings-conflict-resolution-page__mobile-would-like-to-leave-negative-feedback-button-container">
                <Link
                  className="ratings-conflict-resolution-page__link"
                  to="/ratings-giving-negative-feedback-page"
                >
                  <button className="ratings-conflict-resolution-page__mobile-this-describes-my-issue-button">
                    This describes my issue
                  </button>
                </Link>
                <button
                  onClick={handleLearnMoreClick}
                  className="ratings-conflict-resolution-page__mobile-learn-more-about-ratings-button"
                >
                  Learn more about Ratings
                </button>
              </div>
            </div>
            <div className="ratings-conflict-resolution-page__mobile-have-received-negative-rating-or-feedback-container">
              <p className="ratings-conflict-resolution-page__mobile-have-received-negative-rating-or-feedback-header">
                I have received a Negative Rating or Feedback
              </p>
              <p className="ratings-conflict-resolution-page__mobile-have-received-negative-rating-or-feedback-description">
                If you believe a rating or feedback is inaccurate or unfair, we
                encourage you to address it directly with the Agency and using
                professionalism and clarity. Focus on the specific points you
                dispute, staying respectful and factual rather than expressing
                frustration. By providing precise information, you can help
                ensure the situation is resolved fairly. Taking initiative in
                addressing concerns helps maintain the integrity of the review
                system for everyone involved.
              </p>
              <div className="ratings-conflict-resolution-page__mobile-have-received-negative-rating-or-feedback-button-container">
                <button className="ratings-conflict-resolution-page__mobile-this-describes-my-issue-button">
                  This describes my issue
                </button>
                <button className="ratings-conflict-resolution-page__mobile-learn-more-about-ratings-button">
                  Learn more about Ratings
                </button>
              </div>
            </div>
          </div>
          <div className="ratings-conflict-resolution-page__tablet-container">
            <div className="ratings-conflict-resolution-page__tablet-header-container">
              <p className="ratings-conflict-resolution-page__tablet-header-text">
                Conflict Resolution
              </p>
              <img
                className="ratings-conflict-resolution-page__tablet-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
            </div>
            <div className="ratings-conflict-resolution-page__tablet-the-resolution-process-explained-container">
              <p className="ratings-conflict-resolution-page__tablet-the-resolution-process-explained-header">
                The Resolution Process Explained
              </p>
              <p className="ratings-conflict-resolution-page__tablet-the-resolution-process-explained-description">
                Negative feedback or a rating under 3 is never easy to give or
                receive, and on our platform we consider
                <span className="ratings-conflict-resolution-page__tablet-bolded-text">
                  anything below 3 stars a low rating.
                </span>
                When faced with the challenge of leaving or receiving less than
                ideal feedback, there are two paths for conflict resolution. One
                path is for
                <span className="ratings-conflict-resolution-page__tablet-bolded-text">
                  those who feel compelled to give a low rating or negative
                  feedback,
                </span>
                and the other is for
                <span className="ratings-conflict-resolution-page__tablet-bolded-text">
                  those on the receiving end.
                </span>
                While it's crucial to provide accurate and honest ratings, it's
                also important to remember that many conflicts can be resolved
                through clear communication and mutual understanding before
                submitting a final review. Our goal is to ensure that all
                feedback is both fair and constructive.
              </p>
            </div>
            <div className="ratings-conflict-resolution-page__tablet-steps-container">
              <div className="ratings-conflict-resolution-page__tablet-steps-inner-container">
                <p className="ratings-conflict-resolution-page__tablet-step-1">
                  <span className="ratings-conflict-resolution-page__tablet-step-1-text">
                    Step 1:
                  </span>
                  <span className="ratings-conflict-resolution-page__tablet-step-1-description">
                    Identify what type of conflict you are experiencing
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__tablet-step-2">
                  <span className="ratings-conflict-resolution-page__tablet-step-2-text">
                    Step 2:
                  </span>
                  <span className="ratings-conflict-resolution-page__tablet-step-2-description">
                    Contact the Agency and attempt resolution
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__tablet-step-3">
                  <span className="ratings-conflict-resolution-page__tablet-step-3-text">
                    Step 3:
                  </span>
                  <span className="ratings-conflict-resolution-page__tablet-step-3-description">
                    Communicate & Resolve
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__tablet-step-4">
                  <span className="ratings-conflict-resolution-page__tablet-step-4-text">
                    Step 4:
                  </span>
                  <span className="ratings-conflict-resolution-page__tablet-step-4-description">
                    Rating Adjustment or Feedback Response
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__tablet-step-5">
                  <span className="ratings-conflict-resolution-page__tablet-step-5-text">
                    Step 5:
                  </span>
                  <span className="ratings-conflict-resolution-page__tablet-step-5-description">
                    End Dispute
                  </span>
                </p>
              </div>
            </div>
            <p className="ratings-conflict-resolution-page__tablet-key-to-resolving-conflicts-description">
              The key to resolving conflicts is to
              <span className="ratings-conflict-resolution-page__tablet-bolded-text">
                follow each step carefully and patiently.
              </span>
              Throughout the process, we will provide helpful suggestions to
              improve communication and work toward resolving the issue. In many
              cases,
              <span className="ratings-conflict-resolution-page__tablet-bolded-text">
                disputes can be resolved quickly and amicably.
              </span>
              However, if the other party is uncooperative, a negative rating
              may be appropriate to inform others of your experience. Our goal
              is to support fair, transparent feedback while encouraging
              resolution whenever possible.
            </p>
            <div className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-container">
              <p className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-header">
                Reasons to give a Negative Rating and Feedback
              </p>
              <ol className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list">
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-1">
                  Lack of communication and/or no response
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-2">
                  Lack of follow through
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-3">
                  Misinformation
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-4">
                  Candidates not accepting an offer or not responding to an
                  interview request
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-5">
                  Delayed or No Payment
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-6">
                  Lack of courtesy, respect, and competence shown throughout the
                  interaction
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-7">
                  Low Quality Candidates and/or Job Roles
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-8">
                  Lack of Transparency
                </li>
                <li className="ratings-conflict-resolution-page__tablet-reasons-to-give-negative-rating-feedback-list-step-9">
                  Lack of effort to communicate any problematic issues that may
                  arise during the hiring process.
                </li>
              </ol>
            </div>
            <div className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-container">
              <p className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-header">
                Guidelines for Rating Agencies and Writing Feedback
              </p>
              <p className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-description">
                When submitting a rating or feedback, it's important to ensure
                that your review is fair, accurate, and constructive. Below are
                guidelines to help you provide meaningful and effective ratings:
              </p>
              <ol className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-list">
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-list-first-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bolded-text">
                    Be Honest and Transparent
                  </span>
                  - Always provide a truthful account of your experience.
                  Ratings should reflect the actual quality of the service or
                  interaction.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-list-second-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bolded-text">
                    Focus on Specifics
                  </span>
                  - Highlight key details that led to your rating. Provide clear
                  examples to support your feedback, whether positive or
                  negative.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-list-third-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bolded-text">
                    Be Respectful and Professional
                  </span>
                  - Use courteous language, even when discussing areas of
                  improvement. Avoid personal attacks or emotional outbursts.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-list-fourth-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bolded-text">
                    Consider Resolution First
                  </span>
                  - Before submitting a negative rating (anything below 4
                  stars), consider resolving the issue directly with the other
                  party through clear communication.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-list-fifth-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bolded-text">
                    Use Constructive Criticism
                  </span>
                  - If you provide lower ratings, offer suggestions for
                  improvement. This can help the other party understand how to
                  improve their performance.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-list-sixth-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bolded-text">
                    Avoid Bias
                  </span>
                  - Focus on the facts of the experience, not personal feelings
                  or external factors unrelated to the service provided.
                </li>
              </ol>
              <p className="ratings-conflict-resolution-page__tablet-guidelines-for-rating-agencies-and-writing-feedback-bottom-description">
                By following these guidelines, you help maintain a balanced and
                professional review system that benefits all users.
              </p>
            </div>
            <div className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-container">
              <p className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-header">
                Guidelines for Receiving Negative Ratings of Feedback
              </p>
              <p className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-description">
                Receiving negative feedback can be challenging, but it's
                important to handle the situation professionally. Below are
                guidelines to help you respond constructively and resolve
                issues:
              </p>
              <ol className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-list">
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-first-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bold-text">
                    Stay Calm and Professional
                  </span>
                  - Avoid reacting emotionally. Take time to process the
                  feedback before responding to ensure a calm and thoughtful
                  approach. Waiting 24 hours before responding is recommended.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-second-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bold-text">
                    Review the Feedback Carefully
                  </span>
                  - Understand the specific concerns or issues related. Focus on
                  the details to identify where improvements can be made. If you
                  find yourself becoming emotional, step away and reread the
                  feedback a second or third time with a fresh look.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-third-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bold-text">
                    Reach Out for Clarification
                  </span>
                  - If any part of the feedback seems unclear or unfair, contact
                  the other party to discuss it professionally. Open
                  communication can often resolve misunderstandings.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-fourth-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bold-text">
                    Acknowledge Mistakes
                  </span>
                  - If valid points are raised, acknowledge them and explain how
                  you plan to address the issues in the future. This shows
                  responsibility and a willingness to improve.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-fifth-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bold-text">
                    Request a Review Update
                  </span>
                  - If you've takens steps to resolve the issue, politely ask
                  the other party if they are willing to update their rating or
                  feedback to reflect the improved situation.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-sixth-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bold-text">
                    Learn and Grow
                  </span>
                  - Use the feedback as an opportunity to learn and improve.
                  Constructive criticism can help you refine your services or
                  approach.
                </li>
                <li className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-seventh-step">
                  <span className="ratings-conflict-resolution-page__tablet-guidelines-bold-text">
                    Maintain Professionalism
                  </span>
                  - Even if the feedback feels unfair, responding with
                  professionalism helps maintain your reputation and builds
                  trust with other users.
                </li>
              </ol>
              <p className="ratings-conflict-resolution-page__tablet-guidelines-for-receiving-negative-ratings-or-feedback-bottom-description">
                These guidelines can help you handle negative ratings in a
                constructive and proactive way, turning a difficult situation
                into an opportunity for growth and improvement. Continue to Step
                1 below if you would like to resolve a conflict with ratings or
                feedback.
              </p>
            </div>
            <div className="ratings-conflict-resolution-page__tablet-step-1-container">
              <p className="ratings-conflict-resolution-page__tablet-step-1-inner-text">
                <span className="ratings-conflict-resolution-page__tablet-step-1-container-bolded-text">
                  Step 1:
                </span>
                <span className="ratings-conflict-resolution-page__tablet-step-1-container-description">
                  Identify what type of conflict you are experiencing
                </span>
              </p>
            </div>
            <p className="ratings-conflict-resolution-page__tablet-which-path-describes-your-issue">
              Which Path Describes Your Issue?
            </p>
            <div className="ratings-conflict-resolution-page__tablet-like-to-leave-have-received-negative-feedback-container">
              <div className="ratings-conflict-resolution-page__tablet-would-like-to-leave-a-negative-rating-or-feedback-container">
                <p className="ratings-conflict-resolution-page__tablet-would-like-to-leave-a-negative-rating-or-feedback-header">
                  I would like to leave or have left a Negative Rating or
                  Feedback
                </p>
                <p className="ratings-conflict-resolution-page__tablet-would-like-to-leave-a-negative-rating-or-feedback-description">
                  Before submitting negative feedback, we encourage you to
                  carefully reconsider and ensure it is fair and accurate. It's
                  important to approach this thoughtfully, focusing on specific
                  points that led to your dissatisfaction. Consider first
                  addressing any concerns directly with the other party in a
                  professional and respectful manner. By doing so, you allow
                  both sides the opportunity to resolve the issue and maintain
                  the integrity of our review system. Submitting negative
                  feedback can have lasting effects, so please be sure it
                  reflects your experience accurately and constructively.
                </p>
                <div className="ratings-conflict-resolution-page__tablet-would-like-to-leave-a-negative-rating-or-feedback-button-container">
                  <Link
                    className="ratings-conflict-resolution-page__link"
                    to="/ratings-giving-negative-feedback-page"
                  >
                    <button className="ratings-conflict-resolution-page__tablet-this-describes-my-issue-button">
                      This describes my issue
                    </button>
                  </Link>
                  <button className="ratings-conflict-resolution-page__tablet-learn-more-about-ratings-button">
                    Learn more about Ratings
                  </button>
                </div>
              </div>
              <div className="ratings-conflict-resolution-page__tablet-have-received-a-negative-rating-or-feedback-container">
                <p className="ratings-conflict-resolution-page__tablet-have-received-a-negative-rating-or-feedback-header">
                  I have received a Negative Rating or Feedback
                </p>
                <p className="ratings-conflict-resolution-page__tablet-have-received-a-negative-rating-or-feedback-description">
                  If you believe a rating or feedback is inaccurate or unfair,
                  we encourage you to address it directly with the Agency and
                  using professionalism and clarity. Focus on the specific
                  points you dispute, staying respectful and factual rather than
                  expressing frustration. By providing precise information, you
                  can help ensure the situation is resolved fairly. Taking
                  initiative in addressing concerns helps maintain the integrity
                  of the review system for everyone involved.
                </p>
                <div className="ratings-conflict-resolution-page__tablet-have-received-a-negative-rating-or-feedback-button-container">
                  <button className="ratings-conflict-resolution-page__tablet-this-describes-my-issue-button">
                    This describes my issue
                  </button>
                  <button
                    onClick={handleLearnMoreClick}
                    className="ratings-conflict-resolution-page__tablet-learn-more-about-ratings-button"
                  >
                    Learn more about Ratings
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ratings-conflict-resolution-page__desktop-container">
            <p className="ratings-conflict-resolution-page__desktop-header">
              Conflict Resolution
            </p>
            <div className="ratings-conflict-resolution-page__desktop-resolution-process-explained-value-assurance-container">
              <p className="ratings-conflict-resolution-page__desktop-resolution-process-explained-header">
                The Resolution Process Explained
              </p>
              <img
                className="ratings-conflict-resolution-page__desktop-value-assurance-icon"
                src={ValueAssuranceIcon}
                alt="Value Assurance Icon"
              />
            </div>
            <p className="ratings-conflict-resolution-page__desktop-resolution-process-explained-description">
              Negative feedback or a rating under 3 is never easy to give or
              receive, and on our platform we consider
              <span className="ratings-conflict-resolution-page__desktop-bolded-text">
                anything below 3 stars a low rating.
              </span>
              When faced with the challenge of leaving or receiving less than
              ideal feedback, there are two paths for conflict resolution. One
              path is for
              <span className="ratings-conflict-resolution-page__desktop-bolded-text">
                those who feel compelled to give a low rating or negative
                feedback,
              </span>
              and the other is for
              <span className="ratings-conflict-resolution-page__desktop-bolded-text">
                those on the receiving end.
              </span>
              While it's crucial to provide accurate and honest ratings, it's
              also important to remember that many conflicts can be resolved
              through clear communication and mutual understanding before
              submitting a final review. Our goal is to ensure that all feedback
              is both fair and constructive.
            </p>
            <div className="ratings-conflict-resolution-page__desktop-steps-container">
              <div className="ratings-conflict-resolution-page__desktop-steps-inner-container">
                <p className="ratings-conflict-resolution-page__desktop-step-1">
                  <span className="ratings-conflict-resolution-page__desktop-step-1-bolded-text">
                    Step 1:
                  </span>
                  <span className="ratings-conflict-resolution-page__desktop-step-1-description">
                    Identify what type of conflict you are experiencing
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__desktop-step-2">
                  <span className="ratings-conflict-resolution-page__desktop-step-2-bolded-text">
                    Step 2:
                  </span>
                  <span className="ratings-conflict-resolution-page__desktop-step-2-bolded-description">
                    Contact the Agency and attempt resolution
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__desktop-step-3">
                  <span className="ratings-conflict-resolution-page__desktop-step-3-bolded-text">
                    Step 3:
                  </span>
                  <span className="ratings-conflict-resolution-page__desktop-step-3-description">
                    Communicate & Resolve
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__desktop-step-4">
                  <span className="ratings-conflict-resolution-page__desktop-step-4-bolded-text">
                    Step 4:
                  </span>
                  <span className="ratings-conflict-resolution-page__desktop-step-4-description">
                    Rating Adjustment or Feedback Response
                  </span>
                </p>
                <p className="ratings-conflict-resolution-page__desktop-step-5">
                  <span className="ratings-conflict-resolution-page__desktop-step-5-bolded-text">
                    Step 5:
                  </span>
                  <span className="ratings-conflict-resolution-page__desktop-step-5-description">
                    End Dispute
                  </span>
                </p>
              </div>
            </div>
            <p className="ratings-conflict-resolution-page__desktop-resolution-process-explained-bottom-description">
              The key to resolving conflicts is to
              <span className="ratings-conflict-resolution-page__desktop-bolded-text">
                follow each step carefully and patiently.
              </span>
              Throughout the process, we will provide helpful suggestions to
              improve communication and work toward resolving the issue. In many
              cases,
              <span className="ratings-conflict-resolution-page__desktop-bolded-text">
                disputes can be resolved quickly and amicably.
              </span>
              However, if the other party is uncooperative, a negative rating
              may be appropriate to inform others of your experience. Our goal
              is to support fair, transparent feedback while encouraging
              resolution whenever possible.
            </p>
            <div className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-container">
              <p className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-header">
                Reasons to give a Negative Rating and Feedback
              </p>
              <ol className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list">
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-first-step">
                  Lack of communication and/or no response
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-second-step">
                  Lack of follow through
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-third-step">
                  Misinformation
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-fourth-step">
                  Candidates not accepting an offer or not responding to an
                  interview request
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-fifth-step">
                  Delayed or No Payment
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-sixth-step">
                  Lack of courtesy, respect, and competence shown throughout the
                  interaction
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-seventh-step">
                  Low Quality Candidates and/or Job Roles
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-eighth-step">
                  Lack of Transparency
                </li>
                <li className="ratings-conflict-resolution-page__desktop-reasons-to-give-a-negative-rating-and-feedback-list-ninth-step">
                  Lack of effort to communicate any problematic issues that may
                  arise during the hiring process
                </li>
              </ol>
            </div>
            <div className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-container">
              <p className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-header">
                Guidelines for Rating Agencies and Writing Feedback
              </p>
              <p className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-description">
                When submitting a rating or feedback, it's important to ensure
                that your review is fair, accurate, and constructive. Below are
                guidelines to help you provide meaningful and effective ratings:
              </p>
              <ol className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-list">
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-list-first-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Be Honest and Transparent
                  </span>
                  - Always provide a truthful account of your experience.
                  Ratings should reflect the actual quality of the service or
                  interaction.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-list-second-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Focus on Specifics
                  </span>
                  - Highlight key details that led to your rating. Provide clear
                  examples to support your feedback, whether positive or
                  negative.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-list-third-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Be Respectful and Professional
                  </span>
                  - Use courteous language, even when discussing areas of
                  improvement. Avoid personal attacks or emotional outbursts.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-list-fourth-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Consider Resolution First
                  </span>
                  - Before submitting a negative rating (anything below 4
                  stars), consider resolving the issue directly with the other
                  party through clear communication.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-list-fifth-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Use Constructive Criticism
                  </span>
                  - If you provide lower ratings, offer suggestions for
                  improvement. This can help the other party understand how to
                  improve their performance.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-list-sixth-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Avoid Bias
                  </span>
                  - Focus on the facts of the experience, not personal feelings
                  or external factors unrelated to the service provided.
                </li>
              </ol>
              <p className="ratings-conflict-resolution-page__desktop-guidelines-for-rating-agencies-and-writing-feedback-bottom-description">
                By following these guidelines, you help maintain a balanced and
                professional review system that benefits all users.
              </p>
            </div>
            <div className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-container">
              <p className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-header">
                Guidelines for Receiving Negative Ratings or Feedback
              </p>
              <p className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-description">
                Receiving negative feedback can be challenging, but it's
                important to handle the situation professionally. Below are
                guidelines to help you respond constructively and resolve
                issues.
              </p>
              <ol className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list">
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list-first-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Stay Calm and Professional
                  </span>
                  - Avoid reacting emotionally. Take time to process the
                  feedback before responding to ensure a calm and thoughtful
                  approach. Waiting 24 hours before responding is recommended.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list-second-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Review the Feedback Carefully
                  </span>
                  - Understand the specific concerns or issues raised. Focus on
                  the details to identify where improvements can be made. If you
                  find yourself becoming emotional, step away and reread the
                  feedback a second or third time with a fresh look.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list-third-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Reach Out for Clarification
                  </span>
                  - If any part of the feedback seems unclear or unfair, contact
                  the other party to discuss it professionally. Open
                  communication can often resolve misunderstandings.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list-fourth-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Acknowledge Mistakes
                  </span>
                  - If valid points are raised acknowledge them and explain how
                  you plan to address the issues in the future. This shows
                  responsibility and a willingness to improve.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list-fifth-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Request a Review Update
                  </span>
                  - If you've taken steps to resolve the issue, politely ask the
                  other party if they are willing to update their rating or
                  feedback to reflect the improved situation.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list-sixth-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Learn and Grow
                  </span>
                  - Use the feedback as an opportunity to learn and improve.
                  Constructive criticism can help you refine your services or
                  approach.
                </li>
                <li className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-list-seventh-step">
                  <span className="ratings-conflict-resolution-page__desktop-guidelines-bolded-text">
                    Maintain Professionalism
                  </span>
                  - Even if the feedback feels unfair, responding with
                  professionalism helps maintain your reputation and builds
                  trust with other users.
                </li>
              </ol>
              <p className="ratings-conflict-resolution-page__desktop-guidelines-for-receiving-negative-ratings-or-feedback-bottom-description">
                These guidelines can help you handle negative ratings in a
                constructive and proactive way, turning a difficult situation
                into an opportunity for growth and improvement. Continue to Step
                1 below if you would like to resolve a conflict with ratings or
                feedback.
              </p>
            </div>
            <div className="ratings-conflict-resolution-page__desktop-step-1-container">
              <p className="ratings-conflict-resolution-page__desktop-step-1-inner-container-text">
                <span className="ratings-conflict-resolution-page__desktop-step-1-inner-container-bolded-text">
                  Step 1:
                </span>
                <span className="ratings-conflict-resolution-page__desktop-step-1-inner-container-description">
                  Identify what type of conflict you are experiencing
                </span>
              </p>
            </div>
            <p className="ratings-conflict-resolution-page__desktop-which-path-describes-your-issue-text">
              Which Path Describes Your Issue?
            </p>
            <div className="ratings-conflict-resolution-page__desktop-would-like-to-leave-have-received-negative-rating-or-feedback-container">
              <div className="ratings-conflict-resolution-page__desktop-would-like-to-leave-or-have-left-a-negative-rating-or-feedback-container">
                <p className="ratings-conflict-resolution-page__desktop-would-like-to-leave-or-have-left-a-negative-rating-or-feedback-header">
                  I would like to leave or have left a Negative Rating or
                  Feedback
                </p>
                <p className="ratings-conflict-resolution-page__desktop-would-like-to-leave-or-have-left-a-negative-rating-or-feedback-description">
                  Before submitting negative feedback, we encourage you to
                  carefully reconsider and ensure it is fair and accurate. It's
                  important to approach this thoughtfully, focusing on specific
                  points that led to your dissatisfaction. Consider first
                  addressing any concerns directly with the other party in a
                  professional and respectful manner. By doing so, you allow
                  both sides the opportunity to resolve the issue and maintain
                  the integrity of our review system. Submitting negative
                  feedback can have lasting effects, so please be sure it
                  reflects your experience accurately and constructively.
                </p>
                <div className="ratings-conflict-resolution-page__desktop-would-like-to-leave-or-have-left-a-negative-rating-or-feedback-button-container">
                  <Link
                    className="ratings-conflict-resolution-page__link"
                    to="/ratings-giving-negative-feedback-page"
                  >
                    <button className="ratings-conflict-resolution-page__desktop-this-describes-my-issue-button">
                      This describes my issue
                    </button>
                  </Link>
                  <button className="ratings-conflict-resolution-page__desktop-learn-more-about-ratings-button">
                    Learn more about Ratings
                  </button>
                </div>
              </div>
              <div className="ratings-conflict-resolution-page__desktop-have-received-a-negative-rating-or-feedback-container">
                <p className="ratings-conflict-resolution-page__desktop-have-received-a-negative-rating-or-feedback-header">
                  I have received a Negative Rating or Feedback
                </p>
                <p className="ratings-conflict-resolution-page__desktop-have-received-a-negative-rating-or-feedback-description">
                  If you believe a rating or feedback is inaccurate or unfair,
                  we encourage you to address it directly with the Agency and
                  using professionalism and clarity. Focus on the specific
                  points you dispute, staying respectful and factual rather than
                  expressing frustration. By providing precise information, you
                  can help ensure the situation is resolved fairly. Taking
                  initiative in addressing concerns helps maintain the integrity
                  of the review system for everyone involved.
                </p>
                <div className="ratings-conflict-resolution-page__desktop-have-received-a-negative-rating-or-feedback-button-container">
                  <button className="ratings-conflict-resolution-page__desktop-this-describes-my-issue-button">
                    This describes my issue
                  </button>
                  <button
                    onClick={handleLearnMoreClick}
                    className="ratings-conflict-resolution-page__desktop-learn-more-about-ratings-button"
                  >
                    Learn more about Ratings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
