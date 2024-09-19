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
import TeamMemberAccountSettingsProfilePage from './pages/TeamMemberAccountSettingsProfilePage/TeamMemberAccountSettingsProfilePage';
import TeamMemberAccountSettingsPasswordPage from './pages/TeamMemberAccountSettingsPasswordPage/TeamMemberAccountSettingsPasswordPage';
import TeamMemberAccountSettingsNotificationsPage from './pages/TeamMemberAccountSettingsNotificationsPage/TeamMemberAccountSettingsNotificationsPage';
import PersonalProfilePage from './pages/PersonalProfilePage/PersonalProfilePage';
import AgencyProfilePage from './pages/AgencyProfilePage/AgencyProfilePage';
import ReferAgencyPage from './pages/ReferAgencyPage/ReferAgencyPage';
import SearchAgenciesAllAgenciesPage from './pages/SearchAgenciesAllAgenciesPage/SearchAgenciesAllAgenciesPage';
import SearchAgenciesIndustryPage from './pages/SearchAgenciesIndustryPage/SearchAgenciesIndustryPage';
import SearchAgenciesRatingsPage from './pages/SearchAgenciesRatingsPage/SearchAgenciesRatingsPage';
import MyDocumentsAgreementsPage from './pages/MyDocumentsAgreementsPage/MyDocumentsAgreementsPage';
import MyDocumentsReportsPage from './pages/MyDocumentsReportsPage/MyDocumentsReportsPage';
import MyDocumentsArchivePage from './pages/MyDocumentsArchivePage/MyDocumentsArchivePage';
import MyDocumentsJobReportPage from './pages/MyDocumentsJobReportPage/MyDocumentsJobReportPage';
import MyDocumentsCandidateReportPage from './pages/MyDocumentsCandidateReportPage/MyDocumentsCandidateReportPage';

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
        <Route path="/team-member-account-settings-profile-page" element={<TeamMemberAccountSettingsProfilePage />} />
        <Route path="/team-member-account-settings-password-page" element={<TeamMemberAccountSettingsPasswordPage />} />
        <Route path="/team-member-account-settings-notifications-page" element={<TeamMemberAccountSettingsNotificationsPage />} />
        <Route path="/personal-profile-page" element={<PersonalProfilePage />} />
        <Route path="/agency-profile-page" element={<AgencyProfilePage />} />
        <Route path="/refer-agency-page" element={<ReferAgencyPage />} /> 
        <Route path="/search-agencies-all-agencies-page" element={<SearchAgenciesAllAgenciesPage />} />
        <Route path="/search-agencies-industry-page" element={<SearchAgenciesIndustryPage />} />
        <Route path="/search-agencies-ratings-page" element={<SearchAgenciesRatingsPage />} />
        <Route path="/my-documents-agreements-page" element={<MyDocumentsAgreementsPage />} />
        <Route path="/my-documents-reports-page" element={<MyDocumentsReportsPage />} />
        <Route path="/my-documents-archive-page" element={<MyDocumentsArchivePage />} />
        <Route path="/my-documents-job-report-page" element={<MyDocumentsJobReportPage />} />
        <Route path="/my-documents-candidate-report-page" element={<MyDocumentsCandidateReportPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
