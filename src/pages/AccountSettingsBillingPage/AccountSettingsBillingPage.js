import React from "react";
import "./AccountSettingsBillingPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";

export default function AccountSettingsBillingPage() {
  return (
    <div className="account-settings-billing">
      <AccountSettingsHeader />
      <div className="account-settings-billing__main-container">
        <AccountSettingsSidePanel />
        <div className="account-settings-billing__right-container">
          <p className="account-settings-billing__header">Account Settings</p>
          <p className="account-settings-billing__administrator-text">
            Administrator
          </p>
          <AccountSettingsNavbar />
          <div className="account-settings-billing__subscription-and-billing-container">
            <p className="account-settings-billing__subscription-and-billing-settings">
              Subscription & Billing Settings
            </p>
            <button className="account-settings-billing__cancel-button">
              Cancel
            </button>
            <button className="account-settings-billing__save-changes-button">
              Save Changes
            </button>
          </div>
          <div className="account-settings-billing__subscription-container">
            <p className="account-settings-billing__subscription-text">
              Subscription
            </p>
            <p className="account-settings-billing__monthly-plan">
              Monthly Plan:{" "}
              <span className="account-settings-billing__monthly-plan-amount">
                $249/month billed on the 30th
              </span>
            </p>
            <p className="account-settings-billing__next-payment-due">
              Next Payment Due:{" "}
              <span className="account-settings-billing__next-payment-due-date"></span>{" "}
              08/30/24
            </p>
            <button className="account-settings-billing__upgrade-to-yearly-plan-button">
              Upgrade to Yearly Plan
            </button>
            <p className="account-settings-billing__cancel-subscription">
              Cancel Subscription
            </p>
          </div>
          <div className="account-settings-billing__billing-container">
            <p className="account-settings-billing__billing-text">Billing</p>
            <p className="account-settings-billing__credit-card-on-file">
              Credit Card on File:
              <span className="account-settings-billing__credit-card-number">
                XXXX-XXXX-XXXX-7890
              </span>
            </p>
            <p className="account-settings-billing__last-payment-received">
              Last Payment Received:{" "}
              <span className="account-settings-billing__last-payment-received-date">
                07/30/24
              </span>
            </p>
            <button className="account-settings-billing__change-payment-method-button">
              Change Payment Method
            </button>
            <p className="account-settings-billing__payment-history">
              Payment History
            </p>
          </div>
          <div className="account-settings-billing__referral-credits-container">
            <p className="account-settings-billing__referral-credits-text">
              Referral Credits
            </p>
            <p className="account-settings-billing__agency-referrals">
              Agency Referrals
            </p>
            <p className="account-settings-billing__abc-staffing-inc">
              ABC Staffing Inc.{" "}
              <span className="account-settings-billing__abc-staffing-inc-date">
                07/30/24
              </span>
            </p>
            <p className="account-settings-billing__referral-credit">
              Credit: $249 was credited to your account on 7/11/24
            </p>
            <button className="account-settings-billing__refer-an-agency-button">
              Refer an Agency
            </button>
          </div>
          <p className="account-settings-billing__questions-subscription-billing">
            Questions about your Subscription or Billing?
          </p>
          <p className="account-settings-billing__email-us">
            Email Us at getemailforstripesupport.com
          </p>
        </div>
      </div>
    </div>
  );
}
