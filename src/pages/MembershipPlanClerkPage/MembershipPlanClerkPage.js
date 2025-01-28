import React from "react";
import "./MembershipPlanClerkPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import CheckIcon from "../../assets/icons/CheckinCircle.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MembershipPlanClerkPage() {
  //   const navigate = useNavigate();

  //   const handleSelectPlan = async (plan) => {
  //     localStorage.setItem("membershipPlan", plan);
  //     navigate("/agency-information-page");
  //   };

  return (
    <div className="membership-plan-clerk-page">
      <img
        className="membership-plan-clerk-page__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <div className="membership-plan-clerk-page__header">
        Select Your Membership Plan
      </div>
      <div className="membership-plan-clerk-page__card-container">
        <div className="membership-plan-clerk-page__card--yearly-membership">
          <p className="membership-plan-clerk-page__yearly-membership-header">
            <span className="membership-plan-clerk-page__header-yearly-text">
              Yearly
            </span>{" "}
            <span className="membership-plan-clerk-page__header-yearly-membership-text">
              Membership
            </span>
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-description">
            Committed to long-term growth and maximizing savings. Select our
            annual membership, save more money, and leverage all MLSA has to
            offer!
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-price">
            <span className="membership-plan-clerk-page__yearly-membership-price-number">
              $2499
            </span>{" "}
            <span className="membership-plan-clerk-page__yearly-membership-yearly-text">
              /Yearly
            </span>
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-first-line">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__yearly-membership-first-line-text">
              2 Months FREE
            </span>
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__yearly-membership-text">
              Seamlessly import and export data
            </span>
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__yearly-membership-text">
              Unlimited job postings
            </span>
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__yearly-membership-text">
              Unlimited Candidate uploads
            </span>
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__yearly-membership-text">
              Unlimited agency to agency messaging
            </span>
          </p>
          <p className="membership-plan-clerk-page__yearly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__yearly-membership-text">
              Add up to 5 additional users per Admin account
            </span>
          </p>
          <Link
            className="membership-plan-clerk-page__link"
            to="/agency-information-clerk-page"
          >
            <button
              className="membership-plan-clerk-page__yearly-select-plan-button"
              // onClick={() => handleSelectPlan("Yearly")}
            >
              Select Plan
            </button>
          </Link>
        </div>
        <div className="membership-plan-clerk-page__card--monthly-membership">
          <p className="membership-plan-clerk-page__monthly-membership-header">
            <span className="membership-plan-clerk-page__header-monthly-text">
              Monthly
            </span>{" "}
            <span className="membership-plan-clerk-page__header-monthly-membership-text">
              Membership
            </span>
          </p>
          <p className="membership-plan-clerk-page__monthly-membership-description">
            The Monthly Membership is perfect for agencies looking for
            flexibility and the ability to scale their usage based on current
            needs. This plan provides full access to all MLSA features without a
            long-term commitment.
          </p>
          <p className="membership-plan-clerk-page__monthly-membership-price">
            <span className="membership-plan-clerk-page__monthly-membership-price-number">
              $249
            </span>{" "}
            <span className="membership-plan-clerk-page__monthly-membership-monthly-text">
              /Monthly
            </span>
          </p>
          <p className="membership-plan-clerk-page__monthly-membership-first-line">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__monthly-membership-first-line-text">
              Seamlessly import and export data
            </span>
          </p>
          <p className="membership-plan-clerk-page__monthly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__monthly-membership-text">
              Unlimited job postings
            </span>
          </p>
          <p className="membership-plan-clerk-page__monthly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__monthly-membership-text">
              Unlimited Candidate uploads
            </span>
          </p>
          <p className="membership-plan-clerk-page__monthly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__monthly-membership-text">
              Unlimited agency to agency messaging
            </span>
          </p>
          <p className="membership-plan-clerk-page__monthly-membership-lines">
            <img
              className="membership-plan-clerk-page__check-icon"
              src={CheckIcon}
              alt="Check"
            />
            <span className="membership-plan-clerk-page__monthly-membership-text">
              Add up to 5 additional users per Admin account
            </span>
          </p>
          <Link
            className="membership-plan-clerk-page__link"
            to="/agency-information-clerk-page"
          >
            <button
              className="membership-plan-clerk-page__monthly-select-plan-button"
              // onClick={() => handleSelectPlan("Monthly")}
            >
              Select Plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
