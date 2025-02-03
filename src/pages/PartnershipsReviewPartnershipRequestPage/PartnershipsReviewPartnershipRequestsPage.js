import React from "react";
import "./PartnershipsReviewPartnershipRequestsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import LMNStaffingIncLogo from "../../assets/icons/lmnstaffinginc.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";

export default function PartnershipsReviewPartnershipRequestsPage() {
  return (
    <div className="partnerships-review-partnership-requests-page">
      <HeaderWithProfilePic />
      <div className="partnerships-review-partnership-requests-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-review-partnership-requests-page__right-container">
          <div className="partnerships-review-partnership-requests-page__mobile-container">
            <p className="partnerships-review-partnership-requests-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-review-partnership-requests-page__mobile-review-partnership-request">
              Review Partnership Request
            </p>
            <div className="partnerships-review-partnership-requests-page__mobile-lmn-staffing-inc-container">
              <img
                className="partnerships-review-partnership-requests-page__mobile-lmn-staffing-inc-logo"
                src={LMNStaffingIncLogo}
                alt="LMN Staffing Inc Logo"
              />
              <div className="partnerships-review-partnership-requests-page__mobile-lmn-staffing-icon-reviews-container">
                <p className="partnerships-review-partnership-requests-page__mobile-lmn-staffing-inc-text">
                  LMN Staffing Inc.
                </p>
                <div className="partnerships-review-partnership-requests-page__mobile-lmn-staffing-inc-star-container">
                  <div className="partnerships-review-partnership-requests-page__mobile-lmn-staffing-inc-star-icons-container">
                    <img
                      className="partnerships-review-partnership-requests-page__mobile-rating-star-icon-1"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-review-partnership-requests-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-review-partnership-requests-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-review-partnership-requests-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-review-partnership-requests-page__mobile-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <p className="partnerships-review-partnership-requests-page__mobile-lmn-staffing-inc-star-icons-text">
                    5
                  </p>
                </div>
              </div>
              <div className="partnerships-review-partnership-requests-page__mobile-active-jobs-active-candidates-container">
                <div className="partnerships-review-partnership-requests-page__mobile-active-jobs-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-active-jobs-number">
                    17
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-active-candidates-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-active-candidates-number">
                    4
                  </p>
                </div>
              </div>
            </div>
            <div className="partnerships-review-partnership-requests-page__mobile-instructions-for-signing-the-partnership-agreement-container">
              <p className="partnerships-review-partnership-requests-page__mobile-instructions-for-signing-the-partnership-agreement-header">
                Instructions for Signing the Partnership Agreement
              </p>
              <div className="partnerships-review-partnership-requests-page__mobile-instructions-for-signing-the-partnership-agreement-inner-container">
                <p className="partnerships-review-partnership-requests-page__mobile-before-you-proceed-with-signing">
                  Before you proceed with signing the Partnership Agreement,
                  please take the following steps to ensure everything is
                  completed correctly.
                </p>
                <p className="partnerships-review-partnership-requests-page__mobile-read-carefully">
                  1.{" "}
                  <span className="partnerships-review-partnership-requests-page__mobile-bolded-text">
                    **Read Carefully.**
                  </span>{" "}
                  Review the entire Agreement and Terms and Conditions
                  thoroughly. Make sure you fully understand each section,
                  including the responsibilities, profit-sharing terms,
                  confidentiality requirements, and termination conditions.
                </p>
                <p className="partnerships-review-partnership-requests-page__mobile-seek-clarification">
                  2.{" "}
                  <span className="partnerships-review-partnership-requests-page__mobile-bolded-text">
                    **Seek Clarification.**
                  </span>{" "}
                  If there is any part of the Agreement that is unclear or if
                  you have any questions, please consult with your legal advisor
                  or contact the other Party to discuss and clarify any points
                  before signing.
                </p>
                <p className="partnerships-review-partnership-requests-page__mobile-verify-details">
                  3.{" "}
                  <span className="partnerships-review-partnership-requests-page__mobile-bolded-text">
                    **Verify Details.**
                  </span>{" "}
                  Double-check that all the information, such as your name,
                  title, and the date, is accurate and correctly filled out in
                  the designated sections.
                </p>
                <p className="partnerships-review-partnership-requests-page__mobile-signature">
                  4.{" "}
                  <span className="partnerships-review-partnership-requests-page__mobile-bolded-text">
                    **Signature.**
                  </span>{" "}
                  When you are ready to sign, please do so in the space provided
                  below your name and title. Your signature should be clear and
                  legible.
                </p>
                <p className="partnerships-review-partnership-requests-page__mobile-date">
                  5.{" "}
                  <span className="partnerships-review-partnership-requests-page__mobile-bolded-text">
                    **Date.**
                  </span>{" "}
                  Ensure you include the date of signing next to your signature.
                  This date should match the day you actually sign the document.
                </p>
                <p className="partnerships-review-partnership-requests-page__mobile-instructions-bottom-text">
                  By following these instructions, you help ensure the Agreement
                  is executed properly, making it a valid and binding document
                  for all Parties involved.
                </p>
              </div>
            </div>
            <div className="partnerships-review-partnership-requests-page__mobile-partnership-agreement-container">
              <p className="partnerships-review-partnership-requests-page__mobile-partnership-agreement-header">
                PARTNERSHIP AGREEMENT
              </p>
              <div className="partnerships-review-partnership-requests-page__mobile-partnership-agreement-inner-container">
                <p className="partnerships-review-partnership-requests-page__mobile-partnership-agreement-first-paragaph">
                  This Partnership Agreement ("Agreement") is made and entered
                  into as of [Date], by and between [Agency 1 Name], a [State]
                  [Type of Business Entity] with its principal office located at
                  [Agency 1 Address], and [Agency 2 Name], a [State] [Type of
                  Business Entity] with its principal office located at [Agency
                  2 Address] (collectively referred to as the "Parties" and
                  individually as a "Party").
                </p>
                <div className="partnerships-review-partnership-requests-page__mobile-partnership-agreement-purpose-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-purpose-header">
                    1. Purpose
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-purpose-description">
                    The purpose of this Agreement is to establish a partnership
                    between the Parties for the mutual benefit of both agencies.
                    The Parties agree to collaborate and share resources,
                    expertise, and information to enhance their service
                    offerings and achieve common business objectives.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-partnership-agreement-responsibilities-of-the-parties-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-responsibilities-of-the-parties-header">
                    2. Responsibilities of the Parties
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-responsibilities-of-the-parties-agency-1">
                    -**[Agency 1 Name]:**[Agency 1 Name] agrees to provide
                    [specific services, resources, or contributions] as part of
                    this partnership.
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-responsibilities-of-the-parties-agency-2">
                    -**[Agency 2 Name]**[Agency 2 Name] agrees to provide
                    [specific services, resources, or contributions] as part of
                    this partnership.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-term-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-term-header">
                    3. Term
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-term-description">
                    This Agreement shall commence on the date of execution and
                    shall continue in effect until terminated by either Party in
                    accordance with the terms of this Agreement.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-confidentiality-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-confidentiality-header">
                    4. Confidentiality
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-confidentiality-description">
                    The Parties agree to maintain the confidentiality of any
                    proprietary or confidential information disclosed during the
                    course of this partnership. Neither Party shall use or
                    disclose such information for any purpose other than as
                    necessary to fulfill the obligations under this Agreement.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-profit-sharing-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-profit-sharing-header">
                    5. Profit Sharing
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-profit-sharing-description">
                    The Parties agree to maintain the confidentiality of any
                    proprietary or confidential information disclosed during the
                    course of this partnership. Neither Party shall use or
                    disclose such information for any purpose other than as
                    necessary to fulfill the obligations under this Agreement.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-termination-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-termination-header">
                    6. Termination
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-termination-description">
                    Either Party may terminate this Agreement at any time by
                    providing [number] days' written notice to the other Party.
                    Upon termination, the Parties shall cease all joint
                    activities and settle any outstanding financial obligations.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-governing-law-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-governing-law-header">
                    7. Governing Law
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-governing-law-description">
                    This Agreement shall be governed by and construed in
                    accordance with the laws of the State of [State], without
                    regard to its conflict of laws principles.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-entire-agreement-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-entire-agreement-header">
                    8. Entire Agreement
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-entire-agreement-description">
                    This Agreement constitutes the entire understanding between
                    the Parties with respect to the subject matter hereof and
                    supercedes all prior discussions, agreements, or
                    understandings of any kind.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-amendments-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-amendments-header">
                    9. Amendments
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-amendments-description">
                    This Agreement may be amended or modified only in writing,
                    signed by both Parties.
                  </p>
                </div>
                <div className="partnerships-review-partnership-requests-page__mobile-miscellaneous-container">
                  <p className="partnerships-review-partnership-requests-page__mobile-miscellaneous-header">
                    Miscellaneous
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-misellaneous-dispute-resolution">
                    -**Dispute Resolution.** Any disputes arising out of or in
                    connection with this Agreement shall be resolved through
                    [mediation/arbitration] in [Location].
                  </p>
                  <p className="partnerships-review-partnership-requests-page__mobile-miscellaneous-severability">
                    -**Severability.** If any provision of this Agreement is
                    found to be invalid or unenforceable, the remainder of the
                    Agreement shall continue in full force and effect.
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
