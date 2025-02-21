import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./PaymentConfirmationPage.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import { Link } from "react-router-dom";

export default function PaymentConfirmationPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    if (sessionId) {
      axios
        .post("http://localhost:5001/api/payment-success", {
          session_id: sessionId,
        })
        .then((response) => {
          setPaymentDetails(response.data.data);
        })
        .catch((error) => {
          console.error("Error retrieving payment details:", error);
        });
    }
  }, [sessionId]);

  return (
    <div className="payment-confirmation">
      <Header />
      <div className="payment-confirmation__container">
        <div className="payment-confirmation__header-container">
          <p className="payment-confirmation__header">Congratulations!</p>
          <img
            className="payment-confirmation__header-logo"
            src={MLSALogo}
            alt="MLSA Logo"
          />
        </div>
        <p className="payment-confirmation__payment-confirmation-header">
          Payment Confirmation
        </p>
        <p className="payment-confirmation__payment-was-received">
          Your Payment was received
        </p>
        <p className="payment-confirmation__mlsa-membership">
          <span className="payment-confirmation__mlsa-membership-1-year">
            MLSA Membership - 1 Year
          </span>
          <span className="payment-confirmation__mlsa-membership-price">
            $3,499.00
          </span>
        </p>
        <p className="payment-confirmation__auto-renews">
          Auto-Renews Yearly on 8/30
        </p>
        <p className="payment-confirmation__amount-paid">
          <span className="payment-confirmation__amount-paid-text">
            Amount Paid
          </span>{" "}
          <span className="payment-confirmation__amount-paid-price">
            $3,499.00
          </span>
        </p>
        <p className="payment-confirmation__amount-paid-date">
          August 30, 2024
        </p>
        <p className="payment-confirmation__credit-card">Method: Visa 6243</p>
        <p className="payment-confirmation__balance-due">
          <span className="payment-confirmation__balance-due-text">
            Balance Due
          </span>
          <span className="payment-confirmation__balance-due-number">
            00.00
          </span>
        </p>
        <p className="payment-confirmation__next-payment-due">
          Next Payment Due
        </p>
        <p className="payment-confirmation__next-payment-due-date">
          August 30, 2025
        </p>
        <p className="payment-confirmation__reminder-text">
          You will receive a reminder email when your next payment is coming up.
        </p>
        <p className="payment-confirmation__cancellation-policy">
          Cancellation Policy
        </p>
        <Link to="/login-page">
          <button className="payment-confirmation__log-in-button">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}
