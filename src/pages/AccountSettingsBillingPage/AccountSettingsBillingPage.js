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
            <button className="account-settings-billing__cancel-button">Cancel</button>
            <button className="account-settings-billing__save-changes-button">Save Changes</button>
          </div>
          <div className="account-settings-billing__subscription-container">
            <p className="account-settings-billing__subscription-text">Subscription</p>
            <p className="account-settings-billing__monthly-plan">Monthly Plan: $249/month billed on the 30th</p>
            <p className="account-settings-billing__next-payment-due">Next Payment Due: 08/30/24</p>
            <button className="account-settings-billing__upgrade-to-yearly-plan-button">Upgrade to Yearly Plan</button>
            <p className="account-settings-billing__cancel-subscription">Cancel Subscription</p>
          </div>
        </div>
      </div>
    </div>
  );
}
