import React from "react";
import "./RatingsReceivingNegativeFeedbackStep5Page.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import RatingsSidePanel from "../../components/RatingsSidePanel/RatingsSidePanel";
import MLSAValueAssuranceIcon from "../../assets/icons/ValueAssurance.svg";

export default function RatingsReceivingNegativeFeedbackStep5Page() {
  return (
    <div className="ratings-receiving-negative-feedback-step-5-page">
      <HeaderWithProfilePic />
      <div className="ratings-receiving-negative-feedback-step-5-page__main-container">
        <RatingsSidePanel />
        <div className="ratings-receiving-negative-feedback-step-5-page__right-container">
          <div className="ratings-receiving-negative-feedback-step-5-page__container">
            <div className="ratings-receiving-negative-feedback-step-5-page__header-container">
              <p className="ratings-receiving-negative-feedback-step-5-page__header">
                Conflict Resolution
              </p>
              <img
                className="ratings-receiving-negative-feedback-step-5-page__mlsa-value-assurance-icon"
                src={MLSAValueAssuranceIcon}
                alt="MLSA Value Assurance Icon"
              />
            </div>
            <p className="ratings-receiving-negative-feedback-step-5-page__receiving-negative-feedback-rating-text">
              Receiving Negative Feedback/Rating
            </p>
            <div className="ratings-receiving-negative-feedback-step-5-page__step-5-container">
              <p className="ratings-receiving-negative-feedback-step-5-page__step-5-text">
                <span className="ratings-receiving-negative-feedback-step-5-page__step-5-bolded-text">
                  Step 5:
                </span>
                <span className="ratings-receiving-negative-feedback-step-5-page__end-dispute-text">
                  End Dispute
                </span>
              </p>
            </div>
            <p className="ratings-receiving-negative-feedback-step-5-page__end-dispute-stage">
              The "End Dispute" stage is the final phase of resolving a
              conflict, where the focus is on closing the matter professionally
              and leaving both parties with a sense of closure and, ideally,
              satisfaction. At this stage, your goal is to ensure that the
              conflict is fully resolved, the relationship is preserved (if
              possible), and future disputes are miniized. Here's a structured
              approach to successfully ending a dispute:
            </p>
            <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-container">
              <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-inner-container">
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-first-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__confirm-the-resolution-is-final">
                    1.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Confirm the Resolution is Final
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__confirm-the-resolution-is-final-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Once the issue has been addressed, confirm with the other
                    party that they are satisfied with the resolution. This
                    ensures that no loose ends are left unresolved.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__confirm-the-resolution-is-final-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Assume the problem is fully resolved without getting
                    explicit confirmation from the other party.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__confirm-the-resolution-is-final-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I'm glad we could resolve this issue. Just to confirm, is
                    everything now settled to your satisfaction?"
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-second-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__acknowledge-the-other-partys-concerns">
                    2.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Acknowledge the Other Party's Concerns
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__acknowledge-the-other-partys-concerns-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Even as you close the dispute, acknowledge the other
                    person's concerns and thank them for their patience and
                    feedback. This shows respect and consideration, helping to
                    preserve a positive relationship.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__acknowledge-the-other-partys-concerns-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Downplay or dismiss their concerns, even after the matter
                    has been resolved.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__acknowledge-the-other-partys-concerns-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you again for your understanding and for bringing
                    this to our attention. Your feedback has been really
                    helpful."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-third-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__provide-final-documentation-or-follow-up">
                    3.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Provide Final Documentation or Follow-Up
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__provide-final-documentation-or-follow-up-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    If applicable, provide final documentation or written
                    confirmation that the dispute has been resolved. This can
                    include receipts, confirmation messages, or any other
                    relevant paperwork.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__provide-final-documentation-or-follow-up-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Leave any agreements or actions undocumented, especially if
                    financial arrangements or corrections were involved.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__provide-final-documentation-or-follow-up-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Here's the final invoice showing the payment we've
                    processed. Please keep this for your records."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-fourth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__maintain-a-professional-tone">
                    4.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Maintain a Professional Tone
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__maintain-a-professional-tone-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    End the dispute with a polite, professional, and
                    solution-oriented tone. Even if the interaction was
                    challenging, this last impression is important for
                    maintaining your reputation.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__maintain-a-professional-tone-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Let frustration or negativity show in your final
                    interactions, even if the process was difficult.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__maintain-a-professional-tone-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I'm glad we were able to come to an agreement. If you ever
                    need anything in the future, don't hesitate to reach out."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-fifth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__offer-ongoing-support">
                    5.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Offer Ongoing Support
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__offer-ongoing-support-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Let the person know that you are available for further
                    assistance if needed. Offering future support can help
                    prevent lingering negative feelings and shows that you're
                    committed to long-term customer service.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__offer-ongoing-support-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Cut off communication once the dispute is resolved. Even
                    though the issue is closed, maintaining an open line can
                    help if there are follow-up concerns.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__offer-ongoing-support-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Please don't hesitate to contact me if you have any other
                    questions or if there's anything else I can help with moving
                    forward."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-sixth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__reflect-on-the-dispute">
                    6.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Reflect on the Dispute for Future Improvement
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__reflect-on-the-dispute-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Use this opportunity to reflect on how the dispute was
                    handled and whether any internal processes need to be
                    improved. Document lessons learned and apply them to prevent
                    future disputes.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__reflect-on-the-dispute-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Forget to learn from the situation. If the same type of
                    conflict arises frequently, consider revising your approach
                    or business practices.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__reflect-on-the-dispute-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "After this experience, we'll be implementing new procedures
                    to ensure faster communication so this kind of issue can be
                    avoided in the future."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-seventh-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__document-the-resolution-internally">
                    7.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Document the Resolution Internally
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__document-the-resolution-internally-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Internally document the resolution of the dispute. Keeping
                    records of what happened, how it was resolved, and any
                    agreed-upon terms can help prevent misunderstandings down
                    the line, especially if similar issues arise in the future.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__document-the-resolution-internally-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Rely on memory or informal communication for dispute
                    details. Detailed records are important for accountability.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__document-the-resolution-internally-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      Example:
                    </span>{" "}
                    "We've noted the agreed resolution in our system, so if you
                    need any further assistance, we'll have the full history
                    available."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-eighth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__follow-up-for-customer-satisfaction">
                    8.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Follow Up for Customer Satisfaction
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__follow-up-for-customer-satisfaction-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Consider following up with the person a few days or weeks
                    after the dispute is resolved to ensure they remain
                    satisfied. This can prevent lingering dissatisfaction and
                    demonstrates excellent customer care.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__follow-up-for-customer-satisfaction-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Overwhelm them with follow-ups. A single, simple check-in is
                    sufficient.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__follow-up-for-customer-satisfaction-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Just checking in to make sure everything is going smoothly
                    since we resolved the issue. Let me know if there's anything
                    else we can assist with."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-ninth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__express-gratitude-for-their-patience">
                    9.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Express Gratitude for Their Patience
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__express-gratitude-for-their-patience-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Show appreciation for their patience and willingness to
                    resolve the issue. Even in a challenging situation, a simple
                    "thank you" can help leave a positive final impression.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__express-gratitude-for-their-patience-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    End the dispute without expressing gratitude, especially if
                    they were cooperative during the process.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__express-gratitude-for-their-patience-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "Thank you for your patience while we worked through this. I
                    appreciate your understanding, and we look forward to
                    serving you better in the future."
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__structured-approach-tenth-step-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__leave-the-door-open">
                    10.{" "}
                    <span className="ratings-receiving-negative-feedback-step-5-page__dark-navy-bolded-text">
                      Leave the Door Open for Future Interactions
                    </span>
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__leave-the-door-open-do">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Do:
                    </span>{" "}
                    Even if the dispute was difficult, end on a positive note by
                    encouraging future business or interactions. This can help
                    repair any damage to the relationship and shows that you're
                    open to continuing the partnership.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__leave-the-door-open-dont">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Don't:
                    </span>{" "}
                    Close the door on the relationship unless the conflict was
                    irreparable. Most conflicts can be resolved in a way that
                    leaves room for future engagement.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__leave-the-door-open-example">
                    <span className="ratings-receiving-negative-feedback-step-5-page__bolded-text">
                      -Example:
                    </span>{" "}
                    "I hope we'll have the opportunity to work together again in
                    the future, and we'll do everything we can to ensure a
                    smoother experience."
                  </p>
                </div>
              </div>
            </div>
            <div className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-container">
              <p className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-header">
                Tips for Ending a Dispute Effectively:
              </p>
              <div className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-inner-container">
                <div className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-top-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__ensure-complete-closure">
                    <span className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-bolded-text">
                      Ensure Complete Closure:
                    </span>{" "}
                    Make sure both parties feel that the matter is fully
                    resolved, with no lingering doubts or questions.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__be-gracious">
                    <span className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-bolded-text">
                      Be Gracious:
                    </span>{" "}
                    Ending on a positive and professional note reinforces good
                    customer service and can help mitigate any lingering
                    negative feelings.
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__look-for-opportunities-to-improve">
                    <span className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-bolded-text">
                      Look for Opportunities to Improve:
                    </span>{" "}
                    Use every dispute as a learning opportunity to refine
                    processes and prevent future conflicts.
                  </p>
                </div>
                <div className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-bottom-container">
                  <p className="ratings-receiving-negative-feedback-step-5-page__tips-for-ending-a-dispute-effectively-final-thought">
                    Final Thought
                  </p>
                  <p className="ratings-receiving-negative-feedback-step-5-page__end-dispute-stage-crucial">
                    The "End Dispute" stage is crucial for putting the issue
                    behind you while also laying the foundation for a better
                    future relationship. How you close out the resolution can
                    impact not only the person you dealt with but also your
                    broader reputation. By ensuring complete closure,
                    maintaining professionalism, and reflecting on how to
                    improve, you set yourself up for stronger future
                    interactions and fewer conflicts going forward.
                  </p>
                </div>
              </div>
            </div>
            <p className="ratings-receiving-negative-feedback-step-5-page__when-you-have-completed-step-5">
              When you have completed Step 5 you may end the dispute
            </p>
            <div className="ratings-receiving-negative-feedback-step-5-page__bottom-button-container">
              <button className="ratings-receiving-negative-feedback-step-5-page__end-dispute-button">
                End Dispute
              </button>
              <button className="ratings-receiving-negative-feedback-step-5-page__back-button">
                Back
              </button>
              <button className="ratings-receiving-negative-feedback-step-5-page__go-to-dashboard-messages-button">
                Go to Dashboard Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
