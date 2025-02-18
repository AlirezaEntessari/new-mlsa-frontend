import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    if (sessionId) {
      axios
        .get(`http://localhost:5001/api/payment-status?session_id=${sessionId}`)
        .then((res) => setPaymentDetails(res.data))
        .catch((err) => console.error("Error fetching payment details:", err));
    }
  }, [sessionId]);

  return (
    <div>
      <h2>Payment Successful!</h2>
      {paymentDetails ? (
        <div>
          <p>Subscription ID: {paymentDetails.subscription_id}</p>
          <p>Payment Status: {paymentDetails.payment_status}</p>
        </div>
      ) : (
        <p>Loading payment details...</p>
      )}
    </div>
  );
}
