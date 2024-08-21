import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MembershipPlanPage from './pages/MembershipPlanPage/MembershipPlanPage';
import AgencyInformationPage from './pages/AgencyInformationPage/AgencyInformationPage';
import MembershipSubscriptionPage from './pages/MembershipSubscriptionPage/MembershipSubscriptionPage';
import PaymentConfirmationPage from './pages/PaymentConfirmationPage/PaymentConfirmationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AccountSettingsProfilePage from './pages/AccountSettingsProfilePage/AccountSettingsProfilePage';
import AccountSettingsAgencyPage from './pages/AccountSettingsAgencyPage/AccountSettingsAgencyPage';
import AccountSettingsPasswordPage from './pages/AccountSettingsPasswordPage/AccountSettingsPasswordPage';
import AccountSettingsBillingPage from './pages/AccountSettingsBillingPage/AccountSettingsBillingPage';
import AccountSettingsNotificationsPage from './pages/AccountSettingsNotificationsPage/AccountSettingsNotificationsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route path="/membership-plan-page" element={<MembershipPlanPage />} />
        <Route path="/agency-information-page" element={<AgencyInformationPage />} />
        <Route path="/membership-subscription-page" element={<MembershipSubscriptionPage />} />
        <Route path="/payment-confirmation-page" element={<PaymentConfirmationPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/account-settings-profile-page" element={<AccountSettingsProfilePage />} />
        <Route path="/account-settings-agency-page" element={<AccountSettingsAgencyPage />} />
        <Route path="/account-settings-password-page" element={<AccountSettingsPasswordPage />} />
        <Route path="/account-settings-billing-page" element={<AccountSettingsBillingPage />} />
        <Route path="/account-settings-notifications-page" element={<AccountSettingsNotificationsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
