import React from "react";
import "./MembershipSubscriptionPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import CheckInCircle from "../../assets/icons/CheckinCircle.svg";
import ExitCircleIcon from "../../assets/icons/XoutCircleIcon.svg";
import CircleButtonOnOrangeIcon from "../../assets/icons/CircleButtonOnOrange.svg";
import CircleButtonOffIcon from "../../assets/icons/CircleButtonOff.svg";
import PayPalLogo from "../../assets/logos/PPPaypalLogo.svg";
import GooglePayLogo from "../../assets/logos/GooglePay.png";
import ApplePayLogo from "../../assets/logos/ApplePay.png";

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
          <span className="membership-subscription__bill-monthly-text">
            Bill Monthly
          </span>
        </p>
        <p className="membership-subscription__bill-monthly-description">
          $249.00 each month on 30th
        </p>
      </div>
      <p className="membership-subscription__payment-method">Payment Method</p>
      <p className="membership-subscription__payment-method-description">
        Select how you would like to pay for your MLSA Membership
      </p>
      <p className="membership-subscription__credit-or-debit">
        <img
          className="membership-subscription__circle-button-on-icon"
          src={CircleButtonOnOrangeIcon}
          alt="Circle Button On"
        />
        <span className="membership-subscription__credit-or-debit-card-text">
          Credit or debit card
        </span>
      </p>
      <div className="membership-subscription__payment-logos-container">
        <div className="membership-subscription__pay-pal">
          <img
            className="membership-subscription__circle-button-off-icon"
            src={CircleButtonOffIcon}
            alt="Circle Button Off"
          />
          <img
            className="membership-subscription__paypal-logo"
            src={PayPalLogo}
            alt="PayPal Logo"
          />
        </div>
        <div className="membership-subscription__google-pay">
          <img
            className="membership-subscription__circle-button-off-icon"
            src={CircleButtonOffIcon}
            alt="Circle Button Off"
          />
          <img
            className="membership-subscription__google-pay-logo"
            src={GooglePayLogo}
            alt="Google Pay"
          />
        </div>
        <div className="membership-subscription__apple-pay">
          <img
            className="membership-subscription__circle-button-off-icon"
            src={CircleButtonOffIcon}
            alt="Circle Button Off"
          />
          <img
            className="membership-subscription__apple-pay-logo"
            src={ApplePayLogo}
            alt="Apple Pay"
          />
        </div>
      </div>
      <div className="membership-subscription__credit-card-details-container">
        <p className="membership-subscription__credit-card-details-header">
          Credit Card Details
        </p>
        <label
          className="membership-subscription__first-name-label"
          htmlFor="first-name"
        >
          First name
        </label>
        <input
          className="membership-subscription__first-name-input"
          type="text"
        />
        <label htmlFor="last-name"></label>
      </div>
    </div>
  );
}
