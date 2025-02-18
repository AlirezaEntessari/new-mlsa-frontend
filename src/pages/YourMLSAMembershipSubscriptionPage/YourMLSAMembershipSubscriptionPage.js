import React, { useState } from "react";
import "./YourMLSAMembershipSubscriptionPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import CheckInCircle from "../../assets/icons/CheckinCircle.svg";
import ExitCircleIcon from "../../assets/icons/XoutCircleIcon.svg";
import CircleButtonOnOrangeIcon from "../../assets/icons/CircleButtonOnOrange.svg";
import CircleButtonOffIcon from "../../assets/icons/CircleButtonOff.svg";
import PayPalLogo from "../../assets/logos/PPPaypalLogo.svg";
import GooglePayLogo from "../../assets/logos/GooglePay.png";
import ApplePayLogo from "../../assets/logos/ApplePay.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function YourMLSAMembershipSubscriptionPage() {
  const [billingDuration, setBillingDuration] = useState("");
  return (
    <div className="your-mlsa-membership-subscription-page">
      <img
        className="your-mlsa-membership-subscription-page__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <div className="your-mlsa-membership-subscription-page__container">
        <p className="your-mlsa-membership-subscription-page__header">
          Your MLSA Membership Subscription
        </p>
        <p className="your-mlsa-membership-subscription-page__payment-details">
          Payment Details
        </p>
        <div className="your-mlsa-membership-subscription-page__bill-container">
          <div
            className={`your-mlsa-membership-subscription-page__bill-yearly-container ${
              billingDuration === "Yearly" ? "selected" : ""
            }`}
            // onClick={handleYearlyClick}
          >
            <p className="your-mlsa-membership-subscription-page__bill-yearly-header">
              <img
                className="your-mlsa-membership-subscription-page__check-in-circle-icon"
                src={CheckInCircle}
                alt="Check"
              />
              <span className="your-mlsa-membership-subscription-page__bill-yearly-text">
                Bill Yearly
              </span>
              <p className="your-mlsa-membership-subscription-page__bill-yearly-description">
                $3,499.00 each year on 8/30
              </p>
            </p>
          </div>
          <div
            className={`your-mlsa-membership-subscription-page__bill-monthly-container ${
              billingDuration === "Monthly" ? "selected" : ""
            }`}
            // onClick={handleMonthlyClick}
          >
            <p className="your-mlsa-membership-subscription-page__bill-monthly-header">
              <img
                className="your-mlsa-membership-subscription-page__exit-icon"
                src={ExitCircleIcon}
                alt="Exit"
              />
              <span className="your-mlsa-membership-subscription-page__bill-monthly-text">
                Bill Monthly
              </span>
            </p>
            <p className="your-mlsa-membership-subscription-page__bill-monthly-description">
              $349.00 each month on 30th
            </p>
          </div>
        </div>
        <div className="your-mlsa-membership-subscription-page__payment-summary-container">
          <p className="your-mlsa-membership-subscription-page__payment-summary-header">
            Payment Summary
          </p>
          <div className="your-mlsa-membership-subscription-page__mlsa-membership-amount-due-container">
            <div className="your-mlsa-membership-subscription-page__mlsa-membership-container">
              <div className="your-mlsa-membership-subscription-page__mlsa-membership-name-container">
                <p className="your-mlsa-membership-subscription-page__mlsa-membership-name-text">
                  MLSA Membership
                </p>
                <p className="your-mlsa-membership-subscription-page__mlsa-membership-auto-renews">
                  Auto-Renews Yearly on 8/30
                </p>
              </div>
              <div className="your-mlsa-membership-subscription-page__mlsa-membership-price-container">
                <p className="your-mlsa-membership-subscription-page__mlsa-membership-price-text">
                  $3,499
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
