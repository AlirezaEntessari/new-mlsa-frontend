import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom';
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
import MyDocumentsPartnershipReportPage from './pages/MyDocumentsPartnershipReportPage/MyDocumentsPartnershipReportPage';
import MyDocumentsUserActivityReportPage from './pages/MyDocumentsUserActivityReportPage/MyDocumentsUserActivityReportPage';
import MyJobsHomePage from './pages/MyJobsHomePage/MyJobsHomePage';
import MyJobsBatchUploadPage from './pages/MyJobsBatchUploadPage/MyJobsBatchUploadPage';
import MyJobsActiveJobsPage from './pages/MyJobsActiveJobsPage/MyJobsActiveJobsPage';
import MyJobsPendingJobsPage from './pages/MyJobsPendingJobsPage/MyJobsPendingJobsPage';
import MyJobsReviewsJobsPage from './pages/MyJobsReviewsJobsPage/MyJobsReviewsJobsPage';
import MyJobsSubmissionsPage from './pages/MyJobsSubmissionsPage/MyJobsSubmissionsPage';
import MyJobsInterviewsPage from './pages/MyJobsInterviewsPage/MyJobsInterviewsPage';
import MyJobsOffersPage from './pages/MyJobsOffersPage/MyJobsOffersPage';
import MyJobsPlacementsPage from './pages/MyJobsPlacementsPage/MyJobsPlacementsPage';
import MyJobsPostJobPage from './pages/MyJobsPostJobPage/MyJobsPostJobPage';
import MyJobsJobDescriptionUploadPage from './pages/MyJobsJobDescriptionUploadPage/MyJobsJobDescriptionUploadPage';
import MyJobsPostJobBatchUploadPage from './pages/MyJobsPostJobBatchUploadPage/MyJobsPostJobBatchUploadPage';
import MyJobsJobDetailsPage from './pages/MyJobsJobDetailsPage/MyJobsJobDetailsPage';
import SearchJobsHomeGridViewPage from './pages/SearchJobsHomeGridViewPage/SearchJobsHomeGridViewPage';
import SearchJobsViewSearchesPage from './pages/SearchJobsViewSearchesPage/SearchJobsViewSearchesPage';
import SearchJobsListViewPage from './pages/SearchJobsListViewPage/SearchJobsListViewPage';
import SearchCandidatesHomeGridViewPage from './pages/SearchCandidatesHomeGridViewPage/SearchCandidatesHomeGridViewPage';
import SearchCandidatesViewSearchesPage from './pages/SearchCandidatesViewSearchesPage/SearchCandidatesViewSearchesPage';
import SearchCandidatesListViewPage from './pages/SearchCandidatesListViewPage/SearchCandidatesListViewPage';
import MyPlacementsHomePage from './pages/MyPlacementsHomePage/MyPlacementsHomePage';
import MyCandidatesHomePage from './pages/MyCandidatesHomePage/MyCandidatesHomePage';
import MyCandidatesPostCandidatePage from './pages/MyCandidatesPostCandidatePage/MyCandidatesPostCandidatePage';
import MyCandidatesCandidateDetailsPage from './pages/MyCandidatesCandidateDetailsPage/MyCandidatesCandidateDetailsPage';
import PartnershipsHomePage from './pages/PartnershipsHomePage/PartnershipsHomePage';
import PartnershipsRequestsPage from './pages/PartnershipsRequestsPage/PartnershipsRequestsPage';
import PartnershipsManagePage from './pages/PartnershipsManagePage/PartnershipsManagePage';
import PartnershipsViewAgreementPage from './pages/PartnershipsViewAgreementPage/PartnershipsViewAgreementPage';
import PartnershipsViewActivityPage from './pages/PartnershipsViewActivityPage/PartnershipsViewActivityPage';
import PartnershipsTerminateAgreementPage from './pages/PartnershipsTerminateAgreementPage/PartnershipsTerminateAgreementPage';
import HelpHomePage from './pages/HelpHomePage/HelpHomePage';
import HelpMyAccountPage from './pages/HelpMyAccountPage/HelpMyAccountPage';
import HelpJobPostingPage from './pages/HelpJobPostingPage/HelpJobPostingPage';
import HelpCandidatePostingPage from './pages/HelpCandidatePostingPage/HelpCandidatePostingPage';
import HelpDocumentsPage from './pages/HelpDocumentsPage/HelpDocumentsPage';
import HelpPartnershipsPage from './pages/HelpPartnershipsPage/HelpPartnershipsPage';
import HelpDashboardPage from './pages/HelpDashboardPage/HelpDashboardPage';
import HelpSearchingPage from './pages/HelpSearchingPage/HelpSearchingPage';
import HelpRatingsAndFeedbackPage from './pages/HelpRatingsAndFeedbackPage/HelpRatingsAndFeedbackPage';
import HelpReportsPage from './pages/HelpReportsPage/HelpReportsPage';
import HelpMembershipPage from './pages/HelpMembershipPage/HelpMembershipPage';
import HelpPoliciesAndTermsPage from './pages/HelpPoliciesAndTermsPage/HelpPoliciesAndTermsPage';
import HelpFAQPage from './pages/HelpFAQPage/HelpFAQPage';
import HelpGlossaryPage from './pages/HelpGlossaryPage/HelpGlossaryPage';
import RatingsHomePage from './pages/RatingsHomePage/RatingsHomePage';
import RatingsRateAnAgencyPage from './pages/RatingsRateAnAgencyPage/RatingsRateAnAgencyPage';
import RatingsMyRatingsPage from './pages/RatingsMyRatingsPage/RatingsMyRatingsPage';
import RatingsConflictResolutionPage from './pages/RatingsConflictResolutionPage/RatingsConflictResolutionPage';
import RatingsGivingNegativeFeedbackPage from './pages/RatingsGivingNegativeFeedbackPage/RatingsGivingNegativeFeedbackPage';
import RatingsGivingNegativeFeedbackStep3Page from './pages/RatingsGivingNegativeFeedbackStep3Page/RatingsGivingNegativeFeedbackStep3Page';
import RatingsGivingNegativeFeedbackStep4Page from './pages/RatingsGivingNegativeFeedbackStep4Page/RatingsGivingNegativeFeedbackStep4Page';
import RatingsGivingNegativeFeedbackStep5Page from './pages/RatingsGivingNegativeFeedbackStep5Page/RatingsGivingNegativeFeedbackStep5Page';
import RatingsGivingNegativeFeedbackEndDisputePage from './pages/RatingsGivingNegativeFeedbackEndDisputePage/RatingsGivingNegativeFeedbackEndDisputePage';
import RatingsReceivingNegativeFeedbackPage from './pages/RatingsReceivingNegativeFeedbackPage/RatingsReceivingNegativeFeedbackPage';
import RatingsReceivingNegativeFeedbackStep3Page from './pages/RatingsReceivingNegativeFeedbackStep3Page/RatingsReceivingNegativeFeedbackStep3Page';
import RatingsReceivingNegativeFeedbackStep4Page from './pages/RatingsReceivingNegativeFeedbackStep4Page/RatingsReceivingNegativeFeedbackStep4Page';
import RatingsReceivingNegativeFeedbackStep5Page from './pages/RatingsReceivingNegativeFeedbackStep5Page/RatingsReceivingNegativeFeedbackStep5Page';
import RatingsReceivingNegativeFeedbackEndDisputePage from './pages/RatingsReceivingNegativeFeedbackEndDisputePage/RatingsReceivingNegativeFeedbackEndDisputePage';
import DashboardHomePage from './pages/DashboardHomePage/DashboardHomePage';
import DashboardQuickSearchResultsPage from './pages/DashboardQuickSearchResultsPage/DashboardQuickSearchResultsPage';
import SignUpClerkPage from './pages/SignUpClerkPage/SignUpClerkPage';
import MembershipPlanClerkPage from './pages/MembershipPlanClerkPage/MembershipPlanClerkPage';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { dark, light, neobrutalism, shadesOfPurple } from '@clerk/themes';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <SignedIn>
            <UserButton showName appearance={{ baseTheme: light }} />
        </SignedIn>
      </div>
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
        <Route path="/my-documents-partnership-report-page" element={<MyDocumentsPartnershipReportPage />} />
        <Route path="/my-documents-user-activity-report-page" element={<MyDocumentsUserActivityReportPage />} />
        <Route path="/my-jobs-home-page" element={<MyJobsHomePage />} />
        <Route path="/my-jobs-batch-upload-page" element={<MyJobsBatchUploadPage />} />
        <Route path="/my-jobs-active-jobs-page" element={<MyJobsActiveJobsPage />} />
        <Route path="/my-jobs-pending-jobs-page" element={<MyJobsPendingJobsPage />} />
        <Route path="/my-jobs-reviews-jobs-page" element={<MyJobsReviewsJobsPage />} />
        <Route path="/my-jobs-submissions-page" element={<MyJobsSubmissionsPage />} />
        <Route path="/my-jobs-interviews-page" element={<MyJobsInterviewsPage />} />
        <Route path="/my-jobs-offers-page" element={<MyJobsOffersPage />} />
        <Route path="/my-jobs-placements-page" element={<MyJobsPlacementsPage />} />
        <Route path="/my-jobs-post-job-page" element={<MyJobsPostJobPage />} />
        <Route path="/my-jobs-job-description-upload-page" element={<MyJobsJobDescriptionUploadPage />} />
        <Route path="/my-jobs-post-job-batch-upload-page" element={<MyJobsPostJobBatchUploadPage />} />
        <Route path="/my-jobs-job-details-page" element={<MyJobsJobDetailsPage />} />
        <Route path="/search-jobs-home-grid-view-page" element={<SearchJobsHomeGridViewPage />} />
        <Route path="/search-jobs-view-searches-page" element={<SearchJobsViewSearchesPage />} />
        <Route path="/search-jobs-list-view-page" element={<SearchJobsListViewPage />} />
        <Route path="/search-candidates-home-grid-view-page" element={<SearchCandidatesHomeGridViewPage />} />
        <Route path="/search-candidates-view-searches-page" element={<SearchCandidatesViewSearchesPage />} />
        <Route path="/search-candidates-list-view-page" element={<SearchCandidatesListViewPage />} />
        <Route path="/my-placements-home-page" element={<MyPlacementsHomePage />} />
        <Route path="/my-candidates-home-page" element={<MyCandidatesHomePage />} />
        <Route path="/my-candidates-post-candidate-page" element={<MyCandidatesPostCandidatePage />} />
        <Route path="/my-candidates-candidate-details-page" element={<MyCandidatesCandidateDetailsPage />} />
        <Route path="/partnerships-home-page" element={<PartnershipsHomePage />} />
        <Route path="/partnerships-requests-page" element={<PartnershipsRequestsPage />} />
        <Route path="/partnerships-manage-page" element={<PartnershipsManagePage />} />
        <Route path="/partnerships-view-agreement-page" element={<PartnershipsViewAgreementPage />} />
        <Route path="/partnerships-view-activity-page" element={<PartnershipsViewActivityPage />} />
        <Route path="/partnerships-terminate-agreement-page" element={<PartnershipsTerminateAgreementPage />} />
        <Route path="/help-home-page" element={<HelpHomePage />} />
        <Route path="/help-my-account-page" element={<HelpMyAccountPage />} />
        <Route path="/help-job-posting-page" element={<HelpJobPostingPage />} />
        <Route path="/help-candidate-posting-page" element={<HelpCandidatePostingPage />} />
        <Route path="/help-documents-page" element={<HelpDocumentsPage />} />
        <Route path="/help-partnerships-page" element={<HelpPartnershipsPage />} />
        <Route path="/help-dashboard-page" element={<HelpDashboardPage />} />
        <Route path="/help-searching-page" element={<HelpSearchingPage />} />
        <Route path="/help-ratings-and-feedback-page" element={<HelpRatingsAndFeedbackPage />} />
        <Route path="/help-reports-page" element={<HelpReportsPage />} />
        <Route path="/help-membership-page" element={<HelpMembershipPage />} />
        <Route path="/help-policies-and-terms-page" element={<HelpPoliciesAndTermsPage />} />
        <Route path="/help-faq-page" element={<HelpFAQPage />} />
        <Route path="/help-glossary-page" element={<HelpGlossaryPage />} />
        <Route path="/ratings-home-page" element={<RatingsHomePage />} />
        <Route path="/ratings-rate-an-agency-page" element={<RatingsRateAnAgencyPage />} />
        <Route path="/ratings-my-ratings-page" element={<RatingsMyRatingsPage />} />
        <Route path="/ratings-conflict-resolution-page" element={<RatingsConflictResolutionPage />} />
        <Route path="/ratings-giving-negative-feedback-page" element={<RatingsGivingNegativeFeedbackPage />} />
        <Route path="/ratings-giving-negative-feedback-step-3-page" element={<RatingsGivingNegativeFeedbackStep3Page />} />
        <Route path="/ratings-giving-negative-feedback-step-4-page" element={<RatingsGivingNegativeFeedbackStep4Page />} />
        <Route path="/ratings-giving-negative-feedback-step-5-page" element={<RatingsGivingNegativeFeedbackStep5Page />} />
        <Route path="/ratings-giving-negative-feedback-end-dispute-page" element={<RatingsGivingNegativeFeedbackEndDisputePage />} />
        <Route path="/ratings-receiving-negative-feedback-page" element={<RatingsReceivingNegativeFeedbackPage />} />
        <Route path="/ratings-receiving-negative-feedback-step-3-page" element={<RatingsReceivingNegativeFeedbackStep3Page />} />
        <Route path="/ratings-receiving-negative-feedback-step-4-page" element={<RatingsReceivingNegativeFeedbackStep4Page />} />
        <Route path="/ratings-receiving-negative-feedback-step-5-page" element={<RatingsReceivingNegativeFeedbackStep5Page />} />
        <Route path="/ratings-receiving-negative-feedback-end-dispute-page" element={<RatingsReceivingNegativeFeedbackEndDisputePage />} />
        <Route path="/dashboard-home-page" element={<DashboardHomePage />} />
        <Route path="/dashboard-quick-search-results-page" element={<DashboardQuickSearchResultsPage />} />
        <Route path="/sign-up-clerk-page" element={<SignUpClerkPage />} />
        <Route path="/membership-plan-clerk-page" element={<MembershipPlanClerkPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
