import React from "react";
import "./MembershipPlanPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import CheckIcon from "../../assets/icons/CheckinCircle.svg";

export default function MembershipPlanPage() {
  return (
    <div className="membership-plan-page">
      <img
        className="membership-plan-page__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <div className="membership-plan-page__header">
        Select Your Membership Plan
      </div>
      <div className="membership-plan-page__card--yearly-membership">
        <p className="membership-plan-page__yearly-membership-header">
          Yearly Membership
        </p>
        <p className="membership-plan-page__yearly-membership-description">
          Committed to long-term growth and maximizing savings. Select our
          annual membership, save more money, and leverage all MLSA has to
          offer!
        </p>
        <p className="membership-plan-page__yearly-membership-price">
          <span className="membership-plan-page__yearly-membership-price-number">
            $2499
          </span>{" "}
          <span className="membership-plan-page__yearly-membership-yearly-text">
            /Yearly
          </span>
        </p>
        <p className="membership-plan-page__yearly-membership-first-line">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__yearly-membership-first-line-text">
            2 Months FREE
          </span>
        </p>
        <p className="membership-plan-page__yearly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__yearly-membership-text">
            Seamlessly import and export data
          </span>
        </p>
        <p className="membership-plan-page__yearly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__yearly-membership-text">
            Unlimited job postings
          </span>
        </p>
        <p className="membership-plan-page__yearly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__yearly-membership-text">
            Unlimited Candidate uploads
          </span>
        </p>
        <p className="membership-plan-page__yearly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__yearly-membership-text">
            Unlimited agency to agency messaging
          </span>
        </p>
        <p className="membership-plan-page__yearly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__yearly-membership-text">
            Add up to 5 additional users per Admin account
          </span>
        </p>
        <button className="membership-plan-page__select-plan-button">
          Select Plan
        </button>
      </div>
      <div className="membership-plan-page__card--monthly-membership">
        <p className="membership-plan-page__monthly-membership-header">
          Monthly Membership
        </p>
        <p className="membership-plan-page__monthly-membership-description">
          The Monthly Membership is perfect for agencies looking for flexibility
          and the ability to scale their usage based on current needs. This plan
          provides full access to all MLSA features without a long-term
          commitment.
        </p>
        <p className="membership-plan-page__monthly-membership-price">
          <span className="membership-plan-page__monthly-membership-price-number">
            $249
          </span>
          <span className="membership-plan-page__monthly-membership-monthly-text">
            /Monthly
          </span>
        </p>
        <p className="membership-plan-page__monthly-membership-first-line">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__monthly-membership-first-line-text">
            Seamlessly import and export data
          </span>
        </p>
        <p className="membership-plan-page__monthly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__monthly-membership-text">
            Unlimited job postings
          </span>
        </p>
        <p className="membership-plan-page__monthly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__monthly-membership-text">
            Unlimited Candidate uploads
          </span>
        </p>
        <p className="membership-plan-page__monthly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__monthly-membership-text">
            Unlimited agency to agency messaging
          </span>
        </p>
        <p className="membership-plan-page__monthly-membership-lines">
          <img
            className="membership-plan-page__check-icon"
            src={CheckIcon}
            alt="Check"
          />
          <span className="membership-plan-page__monthly-membership-text">
            Add up to 5 additional users per Admin account
          </span>
        </p>
        <button className="membership-plan-page__select-plan-button">
          Select Plan
        </button>
      </div>
    </div>
  );
}
