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
import PartnershipsReviewPartnershipRequestsPage from './pages/PartnershipsReviewPartnershipRequestPage/PartnershipsReviewPartnershipRequestsPage';
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
import DashboardReadNotificationPage from './pages/DashboardReadNotificationPage/DashboardReadNotificationPage';
import DashboardReadMessagePage from './pages/DashboardReadMessagePage/DashboardReadMessagePage';
import DashboardComposeMessagePage from './pages/DashboardComposeMessagePage/DashboardComposeMessagePage';
import DashboardCalendarEventPage from './pages/DashboardCalendarEventPage/DashboardCalendarEventPage';
import SignUpClerkPage from './pages/SignUpClerkPage/SignUpClerkPage';
import MembershipPlanClerkPage from './pages/MembershipPlanClerkPage/MembershipPlanClerkPage';
import AgencyInformationClerkPage from './pages/AgencyInformationClerkPage/AgencyInformationClerkPage';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { dark, light, neobrutalism, shadesOfPurple } from '@clerk/themes';
import AccountSettingsLayout from './pages/AccountSettingsLayout/AccountSettingsLayout';
import TeamMemberAccountSettingsLayout from './pages/TeamMemberAccountSettingsLayout/TeamMemberAccountSettingsLayout';
import SearchAgenciesLayout from './SearchAgenciesLayout';
import MyDocumentsLayout from './layouts/MyDocumentsLayout/MyDocumentsLayout';
import MyJobsLayout from './layouts/MyJobsLayout/MyJobsLayout';
import SearchJobsLayout from './layouts/SearchJobsLayout/SearchJobsLayout';
import SearchCandidatesLayout from './layouts/SearchCandidatesLayout/SearchCandidatesLayout';
import MyCandidatesLayout from './layouts/MyCandidatesLayout/MyCandidatesLayout';
import PartnershipsLayout from './layouts/PartnershipsLayout/PartnershipsLayout';
import HelpLayout from './layouts/HelpLayout/HelpLayout';
import RatingsLayout from './layouts/RatingsLayout/RatingsLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';

function App() {
  return (
    <div className="App">
      {/* <div className="navbar">
        <SignedIn>
            <UserButton showName appearance={{ baseTheme: light }} />
        </SignedIn>
      </div> */}
      <BrowserRouter>
      <Routes>
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route path="/membership-plan-page" element={<MembershipPlanPage />} />
        <Route path="/agency-information-page" element={<AgencyInformationPage />} />
        <Route path="/membership-subscription-page" element={<MembershipSubscriptionPage />} />
        <Route path="/payment-confirmation-page" element={<PaymentConfirmationPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/account-settings" element={<AccountSettingsLayout />}>
          <Route path="profile" element={<AccountSettingsProfilePage />} />
          <Route path="agency" element={<AccountSettingsAgencyPage />} />
          <Route path="password" element={<AccountSettingsPasswordPage />} />
          <Route path="billing" element={<AccountSettingsBillingPage />} />
          <Route path="notifications" element={<AccountSettingsNotificationsPage />} />
        </Route>
        <Route path="/team-member-account-settings" element={<TeamMemberAccountSettingsLayout />}>
          <Route path="profile" element={<TeamMemberAccountSettingsProfilePage />} />
          <Route path="password" element={<TeamMemberAccountSettingsPasswordPage />} />
          <Route path="notifications" element={<TeamMemberAccountSettingsNotificationsPage />} />
        </Route>
        <Route path="/personal-profile-page" element={<PersonalProfilePage />} />
        <Route path="/agency-profile-page" element={<AgencyProfilePage />} />
        <Route path="/refer-agency-page" element={<ReferAgencyPage />} /> 
        <Route path="/search-agencies" element={<SearchAgenciesLayout />}>
          <Route path="all" element={<SearchAgenciesAllAgenciesPage />} />
          <Route path="industry" element={<SearchAgenciesIndustryPage />} />
          <Route path="ratings" element={<SearchAgenciesRatingsPage />} />
        </Route>
        <Route path="/my-documents" element={<MyDocumentsLayout />}>
          <Route path="agreements" element={<MyDocumentsAgreementsPage />} />
          <Route path="reports" element={<MyDocumentsReportsPage />} />
          <Route path="archive" element={<MyDocumentsArchivePage />} />
          <Route path="job-report" element={<MyDocumentsJobReportPage />} />
          <Route path="candidate-report" element={<MyDocumentsCandidateReportPage />} />
          <Route path="partnership-report" element={<MyDocumentsPartnershipReportPage />} />
          <Route path="user-activity-report" element={<MyDocumentsUserActivityReportPage />} />
        </Route>
        <Route path="/my-jobs" element={<MyJobsLayout />}>
          <Route path="home" element={<MyJobsHomePage />} />
          <Route path="batch-upload" element={<MyJobsBatchUploadPage />} />
          <Route path="active-jobs" element={<MyJobsActiveJobsPage />} />
          <Route path="pending-jobs" element={<MyJobsPendingJobsPage />} />
          <Route path="reviews-jobs" element={<MyJobsReviewsJobsPage />} />
          <Route path="submissions" element={<MyJobsSubmissionsPage />} />
          <Route path="interviews" element={<MyJobsInterviewsPage />} />
          <Route path="offers" element={<MyJobsOffersPage />} />
          <Route path="placements" element={<MyJobsPlacementsPage />} />
          <Route path="post-job" element={<MyJobsPostJobPage />} />
          <Route path="job-description-upload" element={<MyJobsJobDescriptionUploadPage />} />
          <Route path="post-job-batch-upload" element={<MyJobsPostJobBatchUploadPage />} />
          <Route path="job-details" element={<MyJobsJobDetailsPage />} />
        </Route>
        <Route path="/search-jobs" element={<SearchJobsLayout />}>
          <Route path="home-grid-view" element={<SearchJobsHomeGridViewPage />} />
          <Route path="view-searches" element={<SearchJobsViewSearchesPage />} />
          <Route path="list-view" element={<SearchJobsListViewPage />} />
        </Route>
        <Route path="/search-candidates" element={<SearchCandidatesLayout />}>
          <Route path="home-grid-view" element={<SearchCandidatesHomeGridViewPage />} />
          <Route path="view-searches" element={<SearchCandidatesViewSearchesPage />} />
          <Route path="list-view" element={<SearchCandidatesListViewPage />} />
        </Route>
        <Route path="/my-placements-home-page" element={<MyPlacementsHomePage />} />
        <Route path="/my-candidates" element={<MyCandidatesLayout />}>
          <Route path="home" element={<MyCandidatesHomePage />} />
          <Route path="post-candidate" element={<MyCandidatesPostCandidatePage />} />
          <Route path="candidate-details" element={<MyCandidatesCandidateDetailsPage />} />
        </Route>
        <Route path="/partnerships" element={<PartnershipsLayout />}>
          <Route path="home" element={<PartnershipsHomePage />} />
          <Route path="requests" element={<PartnershipsRequestsPage />} />
          <Route path="review-requests" element={<PartnershipsReviewPartnershipRequestsPage />} />
          <Route path="manage" element={<PartnershipsManagePage />} />
          <Route path="view-agreement" element={<PartnershipsViewAgreementPage />} />
          <Route path="view-activity" element={<PartnershipsViewActivityPage />} />
          <Route path="terminate-agreement" element={<PartnershipsTerminateAgreementPage />} />
        </Route>
        <Route path="/help" element={<HelpLayout />}>
          <Route path="home" element={<HelpHomePage />} />
          <Route path="my-account" element={<HelpMyAccountPage />} />
          <Route path="job-posting" element={<HelpJobPostingPage />} />
          <Route path="candidate-posting" element={<HelpCandidatePostingPage />} />
          <Route path="documents" element={<HelpDocumentsPage />} />
          <Route path="partnerships" element={<HelpPartnershipsPage />} />
          <Route path="dashboard" element={<HelpDashboardPage />} />
          <Route path="searching" element={<HelpSearchingPage />} />
          <Route path="ratings-and-feedback" element={<HelpRatingsAndFeedbackPage />} />
          <Route path="reports" element={<HelpReportsPage />} />
          <Route path="membership" element={<HelpMembershipPage />} />
          <Route path="policies-and-terms" element={<HelpPoliciesAndTermsPage />} />
          <Route path="faq" element={<HelpFAQPage />} />
          <Route path="glossary" element={<HelpGlossaryPage />} />
        </Route>
        <Route path="/ratings" element={<RatingsLayout />}>
          <Route path="home" element={<RatingsHomePage />} />
          <Route path="rate-an-agency" element={<RatingsRateAnAgencyPage />} />
          <Route path="my-ratings" element={<RatingsMyRatingsPage />} />
          <Route path="conflict-resolution" element={<RatingsConflictResolutionPage />} />
          <Route path="giving-negative-feedback" element={<RatingsGivingNegativeFeedbackPage />} />
          <Route path="giving-negative-feedback-step-3" element={<RatingsGivingNegativeFeedbackStep3Page />} />
          <Route path="giving-negative-feedback-step-4" element={<RatingsGivingNegativeFeedbackStep4Page />} />
          <Route path="giving-negative-feedback-step-5" element={<RatingsGivingNegativeFeedbackStep5Page />} />
          <Route path="giving-negative-feedback-end-dispute" element={<RatingsGivingNegativeFeedbackEndDisputePage />} />
          <Route path="receiving-negative-feedback" element={<RatingsReceivingNegativeFeedbackPage />} />
          <Route path="receiving-negative-feedback-step-3" element={<RatingsReceivingNegativeFeedbackStep3Page />} />
          <Route path="receiving-negative-feedback-step-4" element={<RatingsReceivingNegativeFeedbackStep4Page />} />
          <Route path="receiving-negative-feedback-step-5" element={<RatingsReceivingNegativeFeedbackStep5Page />} />
          <Route path="receiving-negative-feedback-end-dispute" element={<RatingsReceivingNegativeFeedbackEndDisputePage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardHomePage />} />
          <Route path="quick-search-results" element={<DashboardQuickSearchResultsPage />} />
          <Route path="read-notification" element={<DashboardReadNotificationPage />} />
          <Route path="read-message" element={<DashboardReadMessagePage />} />
          <Route path="compose-message" element={<DashboardComposeMessagePage />} />
          <Route path="calendar-event" element={<DashboardCalendarEventPage />} />
        </Route>
        <Route path="/sign-up-clerk-page" element={<SignUpClerkPage />} />
        <Route path="/membership-plan-clerk-page" element={<MembershipPlanClerkPage />} />
        <Route path="/agency-information-clerk-page" element={<AgencyInformationClerkPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
