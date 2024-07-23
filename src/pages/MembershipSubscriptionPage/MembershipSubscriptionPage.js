import React from "react";
import "./MembershipSubscriptionPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import CheckInCircle from "../../assets/icons/CheckinCircle.svg";
import ExitCircleIcon from "../../assets/icons/XoutCircleIcon.svg";

export default function MembershipSubscriptionPage() {
  return (
    <div className="membership-subscription">
      <img
        className="membership-subscription__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <p className="membership-subscription__header">
        Your MLSA Membership Subscription
      </p>
      <p className="membership-subscription__payment-details">
        Payment Details
      </p>
      <div className="membership-subscription__bill-yearly-container">
        <p className="membership-subscription__bill-yearly-header">
          <img
            className="membership-subscription__check-in-circle-icon"
            src={CheckInCircle}
            alt="Check"
          />
          <span className="membership-subscription__bill-yearly-text">
            Bill Yearly
          </span>
          <p className="membership-subscription__bill-yearly-description">
            $2,499.00 each year on 8/30
          </p>
        </p>
      </div>
      <div className="membership-subscription__bill-monthly-container">
        <p className="membership-subscription__bill-monthly-header">
          <img
            className="membership-subscription__exit-icon"
            src={ExitCircleIcon}
            alt="Exit"
          />
          <span className="membership-subscription__bill-monthly-text">Bill Monthly</span>
        </p>
        <p className="membership-subscription__bill-monthly-description">$249.00 each month on 30th</p>
      </div>
    </div>
  );
}
