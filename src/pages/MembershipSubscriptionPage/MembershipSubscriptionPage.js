import React, { useState } from "react";
import "./MembershipSubscriptionPage.scss";
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

export default function MembershipSubscriptionPage() {
  const [billingDuration, setBillingDuration] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expires, setExpires] = useState("");
  const [cvv, setCvv] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [zipCode, setZipCode] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleYearlyClick = () => {
    setBillingDuration("Yearly");
  };

  const handleMonthlyClick = () => {
    setBillingDuration("Monthly");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission

  //   const paymentDetails = {
  //     billingDuration,
  //     firstName,
  //     lastName,
  //     cardNumber,
  //     expires,
  //     cvv,
  //     addressLine1,
  //     addressLine2,
  //     city,
  //     state,
  //     countryRegion,
  //     zipCode,
  //   };

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5001/api/payment-details",
  //       paymentDetails
  //     );

  //     if (response.status === 200) {
  //       console.log("Payment details saved successfully");
  //       navigate("/payment-confirmation-page"); // Navigate to the confirmation page on success
  //     } else {
  //       console.error("Failed to save payment details");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    const paymentDetails = {
      billingDuration,
      firstName,
      lastName,
      cardNumber,
      expires,
      cvv,
      addressLine1,
      addressLine2,
      city,
      state,
      countryRegion,
      zipCode,
    };
  
    try {
      const response = await axios.post(
        "http://localhost:5001/api/payment-details",
        paymentDetails
      );
  
      if (response.status === 200 && response.data.url) {
        // Redirect to Stripe payment page
        window.location.href = response.data.url;
      } else {
        console.error("Failed to create payment session");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="membership-subscription">
      <img
        className="membership-subscription__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <form onSubmit={handleSubmit}>
        <div className="membership-subscription__container">
          <p className="membership-subscription__header">
            Your MLSA Membership Subscription
          </p>
          <p className="membership-subscription__payment-details">
            Payment Details
          </p>
          <div className="membership-subscription__bill-container">
            <div
              className={`membership-subscription__bill-yearly-container ${
                billingDuration === "Yearly" ? "selected" : ""
              }`}
              onClick={handleYearlyClick}
            >
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
            <div
              className={`membership-subscription__bill-monthly-container ${
                billingDuration === "Monthly" ? "selected" : ""
              }`}
              onClick={handleMonthlyClick}
            >
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
          </div>
          <p className="membership-subscription__payment-method">
            Payment Method
          </p>
          <p className="membership-subscription__payment-method-description">
            Select how you would like to pay for your MLSA Membership
          </p>
          <div className="membership-subscription__payment-container">
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
          </div>
          <div className="membership-subscription__credit-card-details-container">
            <p className="membership-subscription__credit-card-details-header">
              Credit Card Details
            </p>
            <div className="membership-subscription__name-container">
              <label
                className="membership-subscription__first-name-label"
                htmlFor="first-name"
              >
                First name
              </label>
              <input
                className="membership-subscription__first-name-input"
                type="text"
                id="first-name"
              />
              <label
                className="membership-subscription__last-name-label"
                htmlFor="last-name"
              >
                Last name
              </label>
              <input
                className="membership-subscription__last-name-input"
                type="text"
                id="last-name"
              />
            </div>
            <div className="membership-subscription__tablet-name-labels-container">
              <label
                className="membership-subscription__tablet-first-name-label"
                htmlFor="tablet-first-name"
              >
                First name
              </label>
              <label
                className="membership-subscription__tablet-last-name-label"
                htmlFor="tablet-last-name"
              >
                Last name
              </label>
            </div>
            <div className="membership-subscription__tablet-name-input-container">
              <input
                className="membership-subscription__tablet-first-name-input"
                type="text"
                id="tablet-first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="membership-subscription__tablet-last-name-input"
                type="text"
                id="tablet-last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <label
              className="membership-subscription__card-number-label"
              htmlFor="card-number"
            >
              Card number
            </label>
            <input
              className="membership-subscription__card-number-input"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="membership-subscription__expires-cvv-container">
              <label
                className="membership-subscription__expires-label"
                htmlFor="expires"
              >
                Expires
              </label>
              <input
                className="membership-subscription__expires-input"
                type="text"
              />
              <label
                className="membership-subscription__cvv-label"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                className="membership-subscription__cvv-input"
                type="text"
              />
            </div>
            <div className="membership-subscription__tablet-expires-cvv-labels-container">
              <label
                className="membership-subscription__tablet-expires-label"
                htmlFor="tablet-expires"
              >
                Expires
              </label>
              <label
                className="membership-subscription__tablet-cvv-label"
                htmlFor="tablet-cvv"
              >
                CVV
              </label>
            </div>
            <div className="membership-subscription__tablet-expires-cvv-input-container">
              <input
                className="membership-subscription__tablet-expires-input"
                type="text"
                value={expires}
                onChange={(e) => setExpires(e.target.value)}
              />
              <input
                className="membership-subscription__tablet-cvv-input"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <label
              className="membership-subscription__address-line-1-label"
              htmlFor="address-line-1"
            >
              Address Line 1
            </label>
            <input
              className="membership-subscription__address-line-1-input"
              type="text"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
            <label
              className="membership-subscription__address-line-2-label"
              htmlFor="address-line-2"
            >
              Address Line 2
            </label>
            <input
              className="membership-subscription__address-line-2-input"
              type="text"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
            <div className="membership-subscription__city-state-container">
              <label
                className="membership-subscription__city-label"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="membership-subscription__city-input"
                type="text"
                id="city"
              />
              <label
                className="membership-subscription__state-label"
                htmlFor="state"
                id="state"
              >
                State
              </label>
              <input
                className="membership-subscription__state-input"
                type="text"
              />
            </div>
            <div className="membership-subscription__tablet-city-state-labels-container">
              <label
                className="membership-subscription__tablet-city-label"
                htmlFor="tablet-city"
              >
                City
              </label>
              <label
                className="membership-subscription__tablet-state-label"
                htmlFor="tablet-state"
              >
                State
              </label>
            </div>
            <div className="membership-subscription__tablet-city-state-input-container">
              <input
                className="membership-subscription__tablet-city-input"
                type="text"
                id="tablet-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                className="membership-subscription__tablet-state-input"
                type="text"
                id="tablet-state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="membership-subscription__country-region-zip-code-container">
              <label
                className="membership-subscription__country-region-label"
                htmlFor="country-region"
              >
                Country/region
              </label>
              <input
                className="membership-subscription__country-region-input"
                type="text"
                id="country-region"
              />
              <label
                className="membership-subscription__zip-code-label"
                htmlFor="zip-code"
              >
                Zip Code
              </label>
              <input
                className="membership-subscription__zip-code-input"
                type="text"
                id="zip-code"
              />
            </div>
            <div className="membership-subscription__tablet-country-region-zip-code-labels-container">
              <label
                className="membership-subscription__tablet-country-region-label"
                htmlFor="tablet-country-region"
              >
                Country/region
              </label>
              <label
                className="membership-subscription__tablet-zip-code-label"
                htmlFor="tablet-zip-code"
              >
                Zip code
              </label>
            </div>
            <div className="membership-subscription__tablet-country-region-zip-code-input-container">
              <input
                className="membership-subscription__tablet-country-region-input"
                type="text"
                id="tablet-country-region"
                value={countryRegion}
                onChange={(e) => setCountryRegion(e.target.value)}
              />
              <input
                className="membership-subscription__tablet-zip-code-input"
                type="text"
                id="tablet-zip-code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          <p className="membership-subscription__payment-summary">
            Payment Summary
          </p>
          <p className="membership-subscription__mlsa-membership">
            <span className="membership-subscription__mlsa-membership-text">
              MLSA Membership
            </span>
            <span className="membership-subscription__mlsa-membership-price">
              $2,499.00
            </span>
          </p>
          <p className="membership-subscription__auto-renews">
            Auto-Renews Yearly on 8/30
          </p>
          <p className="membership-subscription__amount-due">
            <span className="membership-subscription__amount-due-text">
              Amount due
            </span>
            <span className="membership-subscription__amount-due-price">
              $2,499.00
            </span>
          </p>
          <p className="membership-subscription__amount-due-date">
            August 30, 2024
          </p>
          <div className="membership-subscription__cancellation-policy-submit-payment-container">
            <p className="membership-subscription__cancellation-policy">
              Cancellation Policy
            </p>
            <button className="membership-subscription__submit-payment-button">
              Submit Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
