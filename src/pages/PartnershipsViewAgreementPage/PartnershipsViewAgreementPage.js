import React from "react";
import "./PartnershipsViewAgreementPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";
import PartnershipsNavbar from "../../components/PartnershipsNavbar/PartnershipsNavbar";
import XYZStaffingIcon from "../../assets/icons/xyzstaffing.svg";
import RatingStarIcon from "../../assets/icons/RatingStar.svg";
import ABCStaffingLogo from "../../assets/icons/abcstaffinglogo.svg";

export default function PartnershipsViewAgreementPage() {
  return (
    <div className="partnerships-view-agreement-page">
      <HeaderWithProfilePic />
      <div className="partnerships-view-agreement-page__main-container">
        <PartnershipsSidePanel />
        <div className="partnerships-view-agreement-page__right-container">
          <div className="partnerships-view-agreement-page__mobile-container">
            <p className="partnerships-view-agreement-page__mobile-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-view-agreement-page__mobile-view-agreement">
              View Agreement
            </p>
            <div className="partnerships-view-agreement-page__mobile-first-row">
              <img
                className="partnerships-view-agreement-page__mobile-xyz-staffing-icon"
                src={XYZStaffingIcon}
                alt="XYZ Staffing Icon"
              />
              <div className="partnerships-view-agreement-page__mobile-first-row-agency-information-container">
                <p className="partnerships-view-agreement-page__mobile-first-row-agency-name">
                  XYZ Staffing Inc.
                </p>
                <div className="partnerships-view-agreement-page__mobile-first-row-reviews-container">
                  <div className="partnerships-view-agreement-page__mobile-first-row-star-container">
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon-1"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                    <img
                      className="partnerships-view-agreement-page__mobile-first-row-rating-star-icon"
                      src={RatingStarIcon}
                      alt="Rating Star Icon"
                    />
                  </div>
                  <p className="partnerships-view-agreement-page__mobile-first-row-reviews-text">
                    5
                  </p>
                </div>
              </div>
              <div className="partnerships-view-agreement-page__mobile-first-row-active-jobs-active-candidates-container">
                <div className="partnerships-view-agreement-page__mobile-first-row-active-jobs-container">
                  <p className="partnerships-view-agreement-page__mobile-first-row-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-view-agreement-page__mobile-first-row-active-jobs-number">
                    <span className="partnerships-view-agreement-page__mobile-first-row-active-jobs-first-number">
                      2
                    </span>
                    <span className="partnerships-view-agreement-page__mobile-first-row-active-jobs-second-number">
                      /17
                    </span>
                  </p>
                </div>
                <div className="partnerships-view-agreement-page__mobile-first-row-active-candidates-container">
                  <p className="partnerships-view-agreement-page__mobile-first-row-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-view-agreement-page__mobile-first-row-active-candidates-number">
                    <span className="partnerships-view-agreement-page__mobile-first-row-active-candidates-first-number">
                      1
                    </span>
                    <span className="partnerships-view-agreement-page__mobile-first-row-active-candidates-second-number">
                      /4
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="partnerships-view-agreement-page__mobile-content-container">
              <p className="partnerships-view-agreement-page__mobile-instructions-for-signing-the-partnership-agreement-header">
                Instructions for Signing the Partnership Agreement
              </p>
              <p className="partnerships-view-agreement-page__mobile-before-you-proceed">
                Before you proceed with signing the Partnership Agreement,
                please take the following steps to ensure everything is
                completed correctly.
              </p>
              <p className="partnerships-view-agreement-page__mobile-read-carefully">
                1.
                <span className="partnerships-view-agreement-page__mobile-bolded-text">
                  **Read Carefully.**
                </span>{" "}
                Review the entire Agreement and Terms and Conditions thoroughly.
                Make sure you fully understand each section, including the
                responsibilities, profit-sharing terms, confidentiality
                requirements, and termination conditions.
              </p>
              <p className="partnerships-view-agreement-page__mobile-seek-clarification">
                2.{" "}
                <span className="partnerships-view-agreement-page__mobile-bolded-text">
                  **Seek Clarification.**
                </span>{" "}
                If there is any part of the Agreement that is unclear or if you
                have any questions, please consult with your legal advisor or
                contact the other Party to discuss and clarify any points before
                signing.
              </p>
              <p className="partnerships-view-agreement-page__mobile-verify-details">
                3.{" "}
                <span className="partnerships-view-agreement-page__mobile-bolded-text">
                  **Verify Details.**
                </span>{" "}
                Double check that all the information, such as your name, title,
                and the date, is accurate and correctly filled out in the
                designated sections.
              </p>
              <p className="partnerships-view-agreement-page__mobile-signature">
                4.
                <span className="partnerships-view-agreement-page__mobile-bolded-text">
                  **Signature.**
                </span>{" "}
                When you are ready to sign, please do so in the space provided
                below your name and title. Your signature should be clear and
                legible.
              </p>
              <p className="partnerships-view-agreement-page__mobile-date">
                5.
                <span className="partnerships-view-agreement-page__mobile-bolded-text">
                  **Date.**
                </span>{" "}
                Ensure you include the date of signing next to your signature.
                This date should match the day you actually sign the document.
              </p>
              <p className="partnerships-view-agreement-page__mobile-by-following-these-instructions">
                By following these instructions, you help ensure the Agreement
                is executed properly, making it a valid and binding document for
                all Parties involved.
              </p>
              <p className="partnerships-view-agreement-page__mobile-partnership-agreement-header">
                PARTNERSHIP AGREEMENT
              </p>
              <p className="partnerships-view-agreement-page__mobile-partnership-agreement-description">
                This Partnership Agreement ("Agreement") is made and entered
                into as of [Date], by and between [Agency 1 Name], a
                [State][Type of Business Entity] with its principal office
                located at [Agency 1 Address], and [Agency 2 Name], a
                [State][Type of Business Entity] with its principal office
                located at [Agency 2 Address] (collectively referred to as the
                "Parties" and individually as a "Party").
              </p>
              <div className="partnerships-view-agreement-page__mobile-purpose-container">
                <p className="partnerships-view-agreement-page__mobile-purpose-header">
                  1.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Purpose
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-purpose-description">
                  The purpose of this Agreement is to establish a partnership
                  between the Parties for the mutual benefit of both agencies.
                  The Parties agree to collaborate and share resources,
                  expertise, and information to enhance their service offerings
                  and achieve common business objectives.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-responsibilities-of-the-parties-container">
                <p className="partnerships-view-agreement-page__mobile-responsibilities-of-the-parties-header">
                  2.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Responsibilities of the Parties
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-responsibilities-of-the-parties-description-agency-1">
                  -**[Agency 1 Name].** [Agency 1 Name] agrees to provide
                  [specific services, resources, or contributions] as part of
                  this partnership.
                </p>
                <p className="partnerships-view-agreement-page__mobile-responsibilities-of-the-parties-description-agency-2">
                  -**[Agency 2 Name].** [Agency 2 Name] agrees to provide
                  [specific services, resources, or contributions] as part of
                  this partnership.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-term-container">
                <p className="partnerships-view-agreement-page__mobile-term-header">
                  3.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Term
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-term-description">
                  This Agreement shall commence on the date of execution and
                  shall continue in effect until terminated by either Party in
                  accordance with the terms of this Agreement.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-confidentiality-container">
                <p className="partnerships-view-agreement-page__mobile-confidentiality-header">
                  4.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Confidentiality
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-confidentiality-description">
                  The Parties agree to maintain the confidentiality of any
                  proprietary or confidential information disclosed during the
                  course of this partnership. Neither party shall use or
                  disclose such information for any purpose other than as
                  necessary to fulfill the obligations under this Agreement.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-profit-sharing-container">
                <p className="partnerships-view-agreement-page__mobile-profit-sharing-header">
                  5.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Profit Sharing
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-profit-sharing-description">
                  The Parties agree to share any profits or revenue generated as
                  a result of this partnership in the following manner: [Specify
                  profit-sharing ratio or terms]. Payments shall be made on a
                  [monthly/quarterly] basis, with detailed accounting provided
                  to each Party.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-termination-container">
                <p className="partnerships-view-agreement-page__mobile-termination-header">
                  6.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Termination
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-termination-description">
                  Either Party may terminate this Agreement at any time by
                  providing [number] days' written notice to the other Party.
                  Upon termination, the Parties shall cease all joint activities
                  and settle any outstanding financial obligations.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-governing-law-container">
                <p className="partnerships-view-agreement-page__mobile-governing-law-header">
                  7.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Governing Law
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-governing-law-description">
                  This Agreement shall be governed by and construed in
                  accordance with the laws of the State of [State], without
                  regard to its conflict of laws principles.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-entire-agreement-container">
                <p className="partnerships-view-agreement-page__mobile-entire-agreement-header">
                  8.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Entire Agreement
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-entire-agreement-description">
                  This Agreement constitutes the entire understanding between
                  the Parties with respect to the subject matter hereof and
                  supersedes all prior discussions, agreements, or
                  understandings of any kind.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-amendments-container">
                <p className="partnerships-view-agreement-page__mobile-amendments-header">
                  9.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Amendments
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-amendments-description">
                  This Agreement may be amended or modified only in writing,
                  signed by both Parties.
                </p>
              </div>
              <div className="partnerships-view-agreement-page__mobile-miscellaneous-container">
                <p className="partnerships-view-agreement-page__mobile-miscellaneous-header">
                  10.{" "}
                  <span className="partnerships-view-agreement-page__mobile-extra-space">
                    Miscellaneous
                  </span>
                </p>
                <p className="partnerships-view-agreement-page__mobile-miscellaneous-description-line-1">
                  -**Dispute Resolution.** Any disputes arising out of or in
                  connection with this Agreement shall be resolved through
                  [mediation/arbitration] in [Location].
                </p>
                <p className="partnerships-view-agreement-page__mobile-miscellaneous-description-line-2">
                  -**Severability.** If any provision of this Agreement is found
                  to be invalid or unenforceable, the remainder of the Agreement
                  shall continue in full force and effect.
                </p>
              </div>
              <p className="partnerships-view-agreement-page__mobile-terms-and-conditions-for-accepting-to-partner-with-header">
                Terms and Conditions for Accepting to Partner with Staffing
                Agency
              </p>
              <p className="partnerships-view-agreement-page__mobile-terms-and-conditions-for-accepting-to-partner-with-description">
                Please carefully read and understand these terms and conditions
                before requesting client details. By clicking on the
                "Acknowledge & Agree" button, you acknowledge and agree to the
                following terms and conditions:
              </p>
              <p className="partnerships-view-agreement-page__mobile-non-disclosure-agreement-header">
                Non-disclosure agreement:
              </p>
              <p className="partnerships-view-agreement-page__mobile-agree-not-to-contact">
                I agree to not contact the client directly or indirectly, unless
                explicitly authorized with written consent by the MLSA platform.
              </p>
              <p className="partnerships-view-agreement-page__mobile-maintain-the-confidentiality">
                I shall maintain the confidentiality of client information
                retrieved through this platform and use it solely for the
                purpose of submitting candidates for the posted job.
              </p>
              <p className="partnerships-view-agreement-page__mobile-agree-not-to-share-the-client-details">
                I agree not to share the client details with any third party
                within or outside the platform.
              </p>
              <p className="partnerships-view-agreement-page__mobile-understand-that-any-disclosure-of-client-information">
                I understand that any disclosure of client information to a
                third party will lead to legal action and a penalty of up to
                $1,000,000 USD impacting personal assets.
              </p>
              <p className="partnerships-view-agreement-page__mobile-agree-to-avoid-disclosing">
                I agree to avoid disclosing the name of the client to candidates
                to avoid the possibility of the candidate reaching out to the
                client directly.
              </p>
              <p className="partnerships-view-agreement-page__mobile-agree-not-to-post-positions">
                I agree not to post positions listed on MLSA on any third-party
                job posting sites or other company websites.
              </p>
              <p className="partnerships-view-agreement-page__mobile-you-are-bound-by-the-terms-and-conditions">
                You are bound by the Terms and Conditions, Privacy Policy, Terms
                of Service, EULA & Rules and Regulations and Partnership
                agreements. Failure to comply may result in severe consequences,
                including legal action up to $1,000,000 and the termination of
                your account on the MLSA platform.
              </p>
              <div className="partnerships-view-agreement-page__mobile-card-container">
                <div className="partnerships-view-agreement-page__mobile-agency-1-card">
                  <div className="partnerships-view-agreement-page__mobile-agency-1-card-inner-container">
                    <p className="partnerships-view-agreement-page__mobile-agency-1-card-header">
                      Agency 1
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-1-card-agency-name">
                      Agency Name: HumanRe
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-1-card-signee">
                      Signee: John Smith
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-1-card-title">
                      Title: Administrator
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-1-card-date">
                      Date: 8/23/24
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-1-card-this-agreement-will-be-sent-to-the-agency">
                      This agreement will be sent to the agency named above when
                      signed by Agency 1
                    </p>
                  </div>
                </div>
                <div className="partnerships-view-agreement-page__mobile-agency-2-card">
                  <div className="partnerships-view-agreement-page__mobile-agency-2-card-inner-container">
                    <p className="partnerships-view-agreement-page__mobile-agency-2-card-header">
                      Agency 2
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-2-card-agency-name">
                      Agency Name: LMN Staffing Inc.
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-2-card-signee">
                      Signee: Jennifer Matthews
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-2-card-title">
                      Title: Administrator
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-2-card-date">
                      Date: 8/23/24
                    </p>
                    <p className="partnerships-view-agreement-page__mobile-agency-2-card-this-agreement-will-be-sent-to-the-agency">
                      This agreement will be sent to the agency named above when
                      signed by Agency 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="partnerships-view-agreement-page__tablet-container">
            <p className="partnerships-view-agreement-page__tablet-header">
              Partnerships
            </p>
            <PartnershipsNavbar />
            <p className="partnerships-view-agreement-page__tablet-view-agreement">
              View Agreement
            </p>
            <div className="partnerships-view-agreement-page__tablet-first-row">
              <img
                className="partnerships-view-agreement-page__tablet-abc-staffing-logo"
                src={ABCStaffingLogo}
                alt="ABC Staffing Logo"
              />
              <p className="partnerships-view-agreement-page__tablet-first-row-agency-name">
                ABC Staffing Inc.
              </p>
              <div className="partnerships-view-agreement-page__tablet-first-row-reviews-container">
                <div className="partnerships-view-agreement-page__tablet-first-row-star-container">
                  <img
                    className="partnerships-view-agreement-page__tablet-first-row-rating-star-icon-1"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-view-agreement-page__tablet-first-row-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-view-agreement-page__tablet-first-row-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-view-agreement-page__tablet-first-row-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                  <img
                    className="partnerships-view-agreement-page__tablet-first-row-rating-star-icon"
                    src={RatingStarIcon}
                    alt="Rating Star Icon"
                  />
                </div>
                <p className="partnerships-view-agreement-page__tablet-first-row-reviews-text">
                  5
                </p>
              </div>
              <div className="partnerships-view-agreement-page__tablet-first-row-active-jobs-active-candidates-container">
                <div className="partnerships-view-agreement-page__tablet-first-row-active-jobs-container">
                  <p className="partnerships-view-agreement-page__tablet-first-row-active-jobs-text">
                    Active Jobs
                  </p>
                  <p className="partnerships-view-agreement-page__tablet-first-row-active-jobs-number">
                    <span className="partnerships-view-agreement-page__tablet-first-row-active-jobs-first-number">
                      0
                    </span>
                    <span className="partnerships-view-agreement-page__tablet-first-row-active-jobs-second-number">
                      /28
                    </span>
                  </p>
                </div>
                <div className="partnerships-view-agreement-page__tablet-first-row-active-candidates-container">
                  <p className="partnerships-view-agreement-page__tablet-first-row-active-candidates-text">
                    Active Candidates
                  </p>
                  <p className="partnerships-view-agreement-page__tablet-first-row-active-candidates-number">
                    <span className="partnerships-view-agreement-page__tablet-first-row-active-candidates-first-number">
                      8
                    </span>
                    <span className="partnerships-view-agreement-page__tablet-first-row-active-candidates-second-number">
                      /11
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="partnerships-view-agreement-page__tablet-content-container">
              <p className="partnerships-view-agreement-page__tablet-instructions-for-signing-the-partnership-agreement-header">
                Instructions for Signing the Partnership Agreement
              </p>
              <p className="partnerships-view-agreement-page__tablet-before-you-proceed-with-signing">
                Before you proceed with signing the Partnership Agreement,
                please take the following steps to ensure everything is
                completed correctly.
              </p>
              <p className="partnerships-view-agreement-page__tablet-read-carefully">
                1.{" "}
                <span className="partnerships-view-agreement-page__tablet-bolded-text">
                  **Read Carefully.**
                </span>{" "}
                <span className="partnerships-view-agreement-page__tablet-extra-space">
                  Review the entire Agreement and Terms and Conditions
                  thoroughly. Make sure you fully understand each section,
                  including the responsibilities, profit-sharing terms,
                  confidentiality requirements, and termination conditions.
                </span>
              </p>
              <p className="partnerships-view-agreement-page__tablet-seek-clarification">
                2.{" "}
                <span className="partnerships-view-agreement-page__tablet-bolded-text">
                  **Seek Clarification.**
                </span>
                <span className="partnerships-view-agreement-page__tablet-extra-space">
                  If there is any part of the Agreement that is unclear or if
                  you have any questions, please consult with your legal advisor
                  or contact the other Party to discuss and clarify any points
                  before signing.
                </span>
              </p>
              <p className="partnerships-view-agreement-page__tablet-verify-details">
                3.{" "}
                <span className="partnerships-view-agreement-page__tablet-bolded-text">
                  **Verify Details.**
                </span>
                <span className="partnerships-view-agreement-page__tablet-extra-space">
                  Double-check that all the information, such as your name,
                  title, and the date, is accurate and correctly filled out in
                  the designated sections.
                </span>
              </p>
              <p className="partnerships-view-agreement-page__tablet-signature">
                4.{" "}
                <span className="partnerships-view-agreement-page__tablet-bolded-text">
                  **Signature.**
                </span>
                <span className="partnerships-view-agreement-page__tablet-extra-space">
                  When you are ready to sign, please do so in the space provided
                  below your name and title. Your signature should be clear and
                  legible.
                </span>
              </p>
              <p className="partnerships-view-agreement-page__tablet-date">
                5.{" "}
                <span className="partnerships-view-agreement-page__tablet-bolded-text">
                  **Date.**
                </span>
                <span className="partnerships-view-agreement-page__tablet-extra-space">
                  Ensure you include the date of signing next to your signature.
                  This date should match the day you actually sign the document.
                </span>
              </p>
              <p className="partnerships-view-agreement-page__tablet-following-these-instructions">
                By following these instructions, you help ensure the Agreement
                is executed properly, making it a valid and binding document for
                all Parties involved.
              </p>
              <p className="partnerships-view-agreement-page__tablet-partnership-agreement-header">
                PARTNERSHIP AGREEMENT
              </p>
              <p className="partnerships-view-agreement-page__tablet-partnership-agreement-description">
                This Partnership Agreement ("Agreement") is made and entered
                into as of [Date], by and between [Agency 1 Name], a [State]
                [Type of Business Entity] with its principal office located at
                [Agency 1 Address], and [Agency 2 Name], a [State] [Type of
                Business Entity] with its principal office located at [Agency 2
                Address] (collectively referred to as the "Parties" and
                individually as a "Party").
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
