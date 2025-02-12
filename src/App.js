import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  Navigate,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MembershipPlanPage from "./pages/MembershipPlanPage/MembershipPlanPage";
import AgencyInformationPage from "./pages/AgencyInformationPage/AgencyInformationPage";
import MembershipSubscriptionPage from "./pages/MembershipSubscriptionPage/MembershipSubscriptionPage";
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage/PaymentConfirmationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AccountSettingsProfilePage from "./pages/AccountSettingsProfilePage/AccountSettingsProfilePage";
import AccountSettingsAgencyPage from "./pages/AccountSettingsAgencyPage/AccountSettingsAgencyPage";
import AccountSettingsPasswordPage from "./pages/AccountSettingsPasswordPage/AccountSettingsPasswordPage";
import AccountSettingsBillingPage from "./pages/AccountSettingsBillingPage/AccountSettingsBillingPage";
import AccountSettingsNotificationsPage from "./pages/AccountSettingsNotificationsPage/AccountSettingsNotificationsPage";
import TeamMemberAccountSettingsProfilePage from "./pages/TeamMemberAccountSettingsProfilePage/TeamMemberAccountSettingsProfilePage";
import TeamMemberAccountSettingsPasswordPage from "./pages/TeamMemberAccountSettingsPasswordPage/TeamMemberAccountSettingsPasswordPage";
import TeamMemberAccountSettingsNotificationsPage from "./pages/TeamMemberAccountSettingsNotificationsPage/TeamMemberAccountSettingsNotificationsPage";
import PersonalProfilePage from "./pages/PersonalProfilePage/PersonalProfilePage";
import AgencyProfilePage from "./pages/AgencyProfilePage/AgencyProfilePage";
import ReferAgencyPage from "./pages/ReferAgencyPage/ReferAgencyPage";
import SearchAgenciesAllAgenciesPage from "./pages/SearchAgenciesAllAgenciesPage/SearchAgenciesAllAgenciesPage";
import SearchAgenciesIndustryPage from "./pages/SearchAgenciesIndustryPage/SearchAgenciesIndustryPage";
import SearchAgenciesRatingsPage from "./pages/SearchAgenciesRatingsPage/SearchAgenciesRatingsPage";
import MyDocumentsAgreementsPage from "./pages/MyDocumentsAgreementsPage/MyDocumentsAgreementsPage";
import MyDocumentsReportsPage from "./pages/MyDocumentsReportsPage/MyDocumentsReportsPage";
import MyDocumentsArchivePage from "./pages/MyDocumentsArchivePage/MyDocumentsArchivePage";
import MyDocumentsJobReportPage from "./pages/MyDocumentsJobReportPage/MyDocumentsJobReportPage";
import MyDocumentsCandidateReportPage from "./pages/MyDocumentsCandidateReportPage/MyDocumentsCandidateReportPage";
import MyDocumentsPartnershipReportPage from "./pages/MyDocumentsPartnershipReportPage/MyDocumentsPartnershipReportPage";
import MyDocumentsUserActivityReportPage from "./pages/MyDocumentsUserActivityReportPage/MyDocumentsUserActivityReportPage";
import MyJobsHomePage from "./pages/MyJobsHomePage/MyJobsHomePage";
import MyJobsBatchUploadPage from "./pages/MyJobsBatchUploadPage/MyJobsBatchUploadPage";
import MyJobsActiveJobsPage from "./pages/MyJobsActiveJobsPage/MyJobsActiveJobsPage";
import MyJobsPendingJobsPage from "./pages/MyJobsPendingJobsPage/MyJobsPendingJobsPage";
import MyJobsReviewsJobsPage from "./pages/MyJobsReviewsJobsPage/MyJobsReviewsJobsPage";
import MyJobsSubmissionsPage from "./pages/MyJobsSubmissionsPage/MyJobsSubmissionsPage";
import MyJobsInterviewsPage from "./pages/MyJobsInterviewsPage/MyJobsInterviewsPage";
import MyJobsOffersPage from "./pages/MyJobsOffersPage/MyJobsOffersPage";
import MyJobsPlacementsPage from "./pages/MyJobsPlacementsPage/MyJobsPlacementsPage";
import MyJobsPostJobPage from "./pages/MyJobsPostJobPage/MyJobsPostJobPage";
import MyJobsJobDescriptionUploadPage from "./pages/MyJobsJobDescriptionUploadPage/MyJobsJobDescriptionUploadPage";
import MyJobsPostJobBatchUploadPage from "./pages/MyJobsPostJobBatchUploadPage/MyJobsPostJobBatchUploadPage";
import MyJobsJobDetailsPage from "./pages/MyJobsJobDetailsPage/MyJobsJobDetailsPage";
import SearchJobsHomeGridViewPage from "./pages/SearchJobsHomeGridViewPage/SearchJobsHomeGridViewPage";
import SearchJobsViewSearchesPage from "./pages/SearchJobsViewSearchesPage/SearchJobsViewSearchesPage";
import SearchJobsListViewPage from "./pages/SearchJobsListViewPage/SearchJobsListViewPage";
import SearchCandidatesHomeGridViewPage from "./pages/SearchCandidatesHomeGridViewPage/SearchCandidatesHomeGridViewPage";
import SearchCandidatesViewSearchesPage from "./pages/SearchCandidatesViewSearchesPage/SearchCandidatesViewSearchesPage";
import SearchCandidatesListViewPage from "./pages/SearchCandidatesListViewPage/SearchCandidatesListViewPage";
import MyPlacementsHomePage from "./pages/MyPlacementsHomePage/MyPlacementsHomePage";
import MyCandidatesHomePage from "./pages/MyCandidatesHomePage/MyCandidatesHomePage";
import MyCandidatesBatchUploadPage from "./pages/MyCandidatesBatchUploadPage/MyCandidatesBatchUploadPage";
import MyCandidatesPostCandidatePage from "./pages/MyCandidatesPostCandidatePage/MyCandidatesPostCandidatePage";
import MyCandidatesCandidateDetailsPage from "./pages/MyCandidatesCandidateDetailsPage/MyCandidatesCandidateDetailsPage";
import MyCandidatesActiveCandidatesPage from "./pages/MyCandidatesActiveCandidatesPage/MyCandidatesActiveCandidatesPage";
import PartnershipsHomePage from "./pages/PartnershipsHomePage/PartnershipsHomePage";
import PartnershipsRequestsPage from "./pages/PartnershipsRequestsPage/PartnershipsRequestsPage";
import PartnershipsRequestPartnershipPage from "./pages/PartnershipsRequestPartnershipPage/PartnershipsRequestPartnershipPage";
import PartnershipsReviewPartnershipRequestsPage from "./pages/PartnershipsReviewPartnershipRequestPage/PartnershipsReviewPartnershipRequestsPage";
import PartnershipsManagePage from "./pages/PartnershipsManagePage/PartnershipsManagePage";
import PartnershipsViewAgreementPage from "./pages/PartnershipsViewAgreementPage/PartnershipsViewAgreementPage";
import PartnershipsViewActivityPage from "./pages/PartnershipsViewActivityPage/PartnershipsViewActivityPage";
import PartnershipsTerminateAgreementPage from "./pages/PartnershipsTerminateAgreementPage/PartnershipsTerminateAgreementPage";
import HelpHomePage from "./pages/HelpHomePage/HelpHomePage";
import HelpMyAccountPage from "./pages/HelpMyAccountPage/HelpMyAccountPage";
import HelpJobPostingPage from "./pages/HelpJobPostingPage/HelpJobPostingPage";
import HelpCandidatePostingPage from "./pages/HelpCandidatePostingPage/HelpCandidatePostingPage";
import HelpDocumentsPage from "./pages/HelpDocumentsPage/HelpDocumentsPage";
import HelpPartnershipsPage from "./pages/HelpPartnershipsPage/HelpPartnershipsPage";
import HelpDashboardPage from "./pages/HelpDashboardPage/HelpDashboardPage";
import HelpSearchingPage from "./pages/HelpSearchingPage/HelpSearchingPage";
import HelpRatingsAndFeedbackPage from "./pages/HelpRatingsAndFeedbackPage/HelpRatingsAndFeedbackPage";
import HelpReportsPage from "./pages/HelpReportsPage/HelpReportsPage";
import HelpMembershipPage from "./pages/HelpMembershipPage/HelpMembershipPage";
import HelpPoliciesAndTermsPage from "./pages/HelpPoliciesAndTermsPage/HelpPoliciesAndTermsPage";
import HelpFAQPage from "./pages/HelpFAQPage/HelpFAQPage";
import HelpGlossaryPage from "./pages/HelpGlossaryPage/HelpGlossaryPage";
import RatingsHomePage from "./pages/RatingsHomePage/RatingsHomePage";
import RatingsRateAnAgencyPage from "./pages/RatingsRateAnAgencyPage/RatingsRateAnAgencyPage";
import RatingsMyRatingsPage from "./pages/RatingsMyRatingsPage/RatingsMyRatingsPage";
import RatingsConflictResolutionPage from "./pages/RatingsConflictResolutionPage/RatingsConflictResolutionPage";
import RatingsGivingNegativeFeedbackPage from "./pages/RatingsGivingNegativeFeedbackPage/RatingsGivingNegativeFeedbackPage";
import RatingsGivingNegativeFeedbackStep3Page from "./pages/RatingsGivingNegativeFeedbackStep3Page/RatingsGivingNegativeFeedbackStep3Page";
import RatingsGivingNegativeFeedbackStep4Page from "./pages/RatingsGivingNegativeFeedbackStep4Page/RatingsGivingNegativeFeedbackStep4Page";
import RatingsGivingNegativeFeedbackStep5Page from "./pages/RatingsGivingNegativeFeedbackStep5Page/RatingsGivingNegativeFeedbackStep5Page";
import RatingsGivingNegativeFeedbackEndDisputePage from "./pages/RatingsGivingNegativeFeedbackEndDisputePage/RatingsGivingNegativeFeedbackEndDisputePage";
import RatingsReceivingNegativeFeedbackPage from "./pages/RatingsReceivingNegativeFeedbackPage/RatingsReceivingNegativeFeedbackPage";
import RatingsReceivingNegativeFeedbackStep3Page from "./pages/RatingsReceivingNegativeFeedbackStep3Page/RatingsReceivingNegativeFeedbackStep3Page";
import RatingsReceivingNegativeFeedbackStep4Page from "./pages/RatingsReceivingNegativeFeedbackStep4Page/RatingsReceivingNegativeFeedbackStep4Page";
import RatingsReceivingNegativeFeedbackStep5Page from "./pages/RatingsReceivingNegativeFeedbackStep5Page/RatingsReceivingNegativeFeedbackStep5Page";
import RatingsReceivingNegativeFeedbackEndDisputePage from "./pages/RatingsReceivingNegativeFeedbackEndDisputePage/RatingsReceivingNegativeFeedbackEndDisputePage";
import DashboardHomePage from "./pages/DashboardHomePage/DashboardHomePage";
import DashboardQuickSearchResultsPage from "./pages/DashboardQuickSearchResultsPage/DashboardQuickSearchResultsPage";
import DashboardReadNotificationPage from "./pages/DashboardReadNotificationPage/DashboardReadNotificationPage";
import DashboardReadMessagePage from "./pages/DashboardReadMessagePage/DashboardReadMessagePage";
import DashboardComposeMessagePage from "./pages/DashboardComposeMessagePage/DashboardComposeMessagePage";
import DashboardCalendarEventPage from "./pages/DashboardCalendarEventPage/DashboardCalendarEventPage";
import SignUpClerkPage from "./pages/SignUpClerkPage/SignUpClerkPage";
import MembershipPlanClerkPage from "./pages/MembershipPlanClerkPage/MembershipPlanClerkPage";
import AgencyInformationClerkPage from "./pages/AgencyInformationClerkPage/AgencyInformationClerkPage";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { dark, light, neobrutalism, shadesOfPurple } from "@clerk/themes";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouteWithAgency from "./ProtectedRouteWithAgency";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";

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
          {/* Public Routes */}
          <Route
            path="/sign-up-page"
            element={
              <RedirectIfAuthenticated>
                <SignUpPage />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/login-page"
            element={
              <RedirectIfAuthenticated>
                <LoginPage />
              </RedirectIfAuthenticated>
            }
          />
          {/* Protected Routes */}
          <Route
            path="/membership-plan-page"
            element={
              <ProtectedRoute>
                <MembershipPlanPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/agency-information-page"
            element={
              <ProtectedRoute>
                <AgencyInformationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/membership-subscription-page"
            element={
              <ProtectedRoute>
                <MembershipSubscriptionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-confirmation-page"
            element={
              <ProtectedRoute>
                <PaymentConfirmationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account-settings-profile-page"
            element={
              <ProtectedRoute>
                <AccountSettingsProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account-settings-agency-page"
            element={
              <ProtectedRoute>
                <AccountSettingsAgencyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account-settings-password-page"
            element={
              <ProtectedRoute>
                <AccountSettingsPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account-settings-billing-page"
            element={
              <ProtectedRoute>
                <AccountSettingsBillingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account-settings-notifications-page"
            element={
              <ProtectedRoute>
                <AccountSettingsNotificationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/team-member-account-settings-profile-page"
            element={
              <ProtectedRoute>
                <TeamMemberAccountSettingsProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/team-member-account-settings-password-page"
            element={
              <ProtectedRoute>
                <TeamMemberAccountSettingsPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/team-member-account-settings-notifications-page"
            element={
              <ProtectedRoute>
                <TeamMemberAccountSettingsNotificationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personal-profile-page"
            element={<PersonalProfilePage />}
          />
          <Route
            path="/agency-profile-page"
            element={
              <ProtectedRoute>
                <AgencyProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/refer-agency-page"
            element={
              <ProtectedRoute>
                <ReferAgencyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-agencies-all-agencies-page"
            element={
              <ProtectedRoute>
                <SearchAgenciesAllAgenciesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-agencies-industry-page"
            element={
              <ProtectedRoute>
                <SearchAgenciesIndustryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-agencies-ratings-page"
            element={
              <ProtectedRoute>
                <SearchAgenciesRatingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-documents-agreements-page"
            element={
              <ProtectedRoute>
                <MyDocumentsAgreementsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-documents-reports-page"
            element={
              <ProtectedRoute>
                <MyDocumentsReportsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-documents-archive-page"
            element={
              <ProtectedRoute>
                <MyDocumentsArchivePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-documents-job-report-page"
            element={
              <ProtectedRoute>
                <MyDocumentsJobReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-documents-candidate-report-page"
            element={
              <ProtectedRoute>
                <MyDocumentsCandidateReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-documents-partnership-report-page"
            element={
              <ProtectedRoute>
                <MyDocumentsPartnershipReportPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-documents-user-activity-report-page"
            element={
              <ProtectedRoute>
                <MyDocumentsUserActivityReportPage />
              </ProtectedRoute>
            }
          />
          <Route path="/my-jobs-home-page" element={<MyJobsHomePage />} />
          <Route
            path="/my-jobs-batch-upload-page"
            element={
              <ProtectedRoute>
                <MyJobsBatchUploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-active-jobs-page"
            element={
              <ProtectedRoute>
                <MyJobsActiveJobsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-pending-jobs-page"
            element={
              <ProtectedRoute>
                <MyJobsPendingJobsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-reviews-jobs-page"
            element={
              <ProtectedRoute>
                <MyJobsReviewsJobsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-submissions-page"
            element={
              <ProtectedRoute>
                <MyJobsSubmissionsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-interviews-page"
            element={
              <ProtectedRoute>
                <MyJobsInterviewsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/my-jobs-offers-page" element={<MyJobsOffersPage />} />
          <Route
            path="/my-jobs-placements-page"
            element={
              <ProtectedRoute>
                <MyJobsPlacementsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-post-job-page"
            element={
              <ProtectedRoute>
                <MyJobsPostJobPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-job-description-upload-page"
            element={
              <ProtectedRoute>
                <MyJobsJobDescriptionUploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-post-job-batch-upload-page"
            element={
              <ProtectedRoute>
                <MyJobsPostJobBatchUploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-jobs-job-details-page"
            element={
              <ProtectedRoute>
                <MyJobsJobDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-jobs-home-grid-view-page"
            element={
              <ProtectedRoute>
                <SearchJobsHomeGridViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-jobs-view-searches-page"
            element={
              <ProtectedRoute>
                <SearchJobsViewSearchesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-jobs-list-view-page"
            element={
              <ProtectedRoute>
                <SearchJobsListViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-candidates-home-grid-view-page"
            element={
              <ProtectedRoute>
                <SearchCandidatesHomeGridViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-candidates-view-searches-page"
            element={
              <ProtectedRoute>
                <SearchCandidatesViewSearchesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-candidates-list-view-page"
            element={
              <ProtectedRoute>
                <SearchCandidatesListViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-placements-home-page"
            element={
              <ProtectedRoute>
                <MyPlacementsHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-candidates-home-page"
            element={
              <ProtectedRoute>
                <MyCandidatesHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-candidates-batch-upload-page"
            element={
              <ProtectedRoute>
                <MyCandidatesBatchUploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-candidates-post-candidate-page"
            element={
              <ProtectedRoute>
                <MyCandidatesPostCandidatePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-candidates-candidate-details-page"
            element={
              <ProtectedRoute>
                <MyCandidatesCandidateDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-candidates-active-candidates-page"
            element={
              <ProtectedRoute>
                <MyCandidatesActiveCandidatesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-home-page"
            element={
              <ProtectedRoute>
                <PartnershipsHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-requests-page"
            element={
              <ProtectedRoute>
                <PartnershipsRequestsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-request-partnership-page"
            element={
              <ProtectedRoute>
                <PartnershipsRequestPartnershipPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-review-partnership-requests-page"
            element={
              <ProtectedRoute>
                <PartnershipsReviewPartnershipRequestsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-manage-page"
            element={
              <ProtectedRoute>
                <PartnershipsManagePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-view-agreement-page"
            element={
              <ProtectedRoute>
                <PartnershipsViewAgreementPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-view-activity-page"
            element={
              <ProtectedRoute>
                <PartnershipsViewActivityPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partnerships-terminate-agreement-page"
            element={
              <ProtectedRoute>
                <PartnershipsTerminateAgreementPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-home-page"
            element={
              <ProtectedRoute>
                <HelpHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-my-account-page"
            element={
              <ProtectedRoute>
                <HelpMyAccountPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-job-posting-page"
            element={
              <ProtectedRoute>
                <HelpJobPostingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-candidate-posting-page"
            element={
              <ProtectedRoute>
                <HelpCandidatePostingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-documents-page"
            element={
              <ProtectedRoute>
                <HelpDocumentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-partnerships-page"
            element={
              <ProtectedRoute>
                <HelpPartnershipsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-dashboard-page"
            element={
              <ProtectedRoute>
                <HelpDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-searching-page"
            element={
              <ProtectedRoute>
                <HelpSearchingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-ratings-and-feedback-page"
            element={
              <ProtectedRoute>
                <HelpRatingsAndFeedbackPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-reports-page"
            element={
              <ProtectedRoute>
                <HelpReportsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-membership-page"
            element={
              <ProtectedRoute>
                <HelpMembershipPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-policies-and-terms-page"
            element={
              <ProtectedRoute>
                <HelpPoliciesAndTermsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-faq-page"
            element={
              <ProtectedRoute>
                <HelpFAQPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-glossary-page"
            element={
              <ProtectedRoute>
                <HelpGlossaryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-home-page"
            element={
              <ProtectedRoute>
                <RatingsHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-rate-an-agency-page"
            element={
              <ProtectedRoute>
                <RatingsRateAnAgencyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-my-ratings-page"
            element={
              <ProtectedRoute>
                <RatingsMyRatingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-conflict-resolution-page"
            element={
              <ProtectedRoute>
                <RatingsConflictResolutionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-giving-negative-feedback-page"
            element={
              <ProtectedRoute>
                <RatingsGivingNegativeFeedbackPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-giving-negative-feedback-step-3-page"
            element={
              <ProtectedRoute>
                <RatingsGivingNegativeFeedbackStep3Page />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-giving-negative-feedback-step-4-page"
            element={
              <ProtectedRoute>
                <RatingsGivingNegativeFeedbackStep4Page />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-giving-negative-feedback-step-5-page"
            element={
              <ProtectedRoute>
                <RatingsGivingNegativeFeedbackStep5Page />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-giving-negative-feedback-end-dispute-page"
            element={
              <ProtectedRoute>
                <RatingsGivingNegativeFeedbackEndDisputePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-receiving-negative-feedback-page"
            element={
              <ProtectedRoute>
                <RatingsReceivingNegativeFeedbackPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-receiving-negative-feedback-step-3-page"
            element={
              <ProtectedRoute>
                <RatingsReceivingNegativeFeedbackStep3Page />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-receiving-negative-feedback-step-4-page"
            element={
              <ProtectedRoute>
                <RatingsReceivingNegativeFeedbackStep4Page />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-receiving-negative-feedback-step-5-page"
            element={
              <ProtectedRoute>
                <RatingsReceivingNegativeFeedbackStep5Page />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ratings-receiving-negative-feedback-end-dispute-page"
            element={
              <ProtectedRoute>
                <RatingsReceivingNegativeFeedbackEndDisputePage />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/dashboard-home-page" element={<DashboardHomePage />} /> */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardHomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard-quick-search-results-page"
            element={
              <ProtectedRoute>
                <DashboardQuickSearchResultsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard-read-notification-page"
            element={
              <ProtectedRoute>
                <DashboardReadNotificationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard-read-message-page"
            element={
              <ProtectedRoute>
                <DashboardReadMessagePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard-compose-message-page"
            element={
              <ProtectedRoute>
                <DashboardComposeMessagePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard-calendar-event-page"
            element={
              <ProtectedRoute>
                <DashboardCalendarEventPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sign-up-clerk-page"
            element={
              <ProtectedRoute>
                <SignUpClerkPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/membership-plan-clerk-page"
            element={
              <ProtectedRoute>
                <MembershipPlanClerkPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/agency-information-clerk-page"
            element={
              <ProtectedRoute>
                <AgencyInformationClerkPage />
              </ProtectedRoute>
            }
          />
          {/* Catch-All (404) Route: Redirect Any Undefined Route to Login */}
          <Route path="*" element={<Navigate to="/login-page" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
