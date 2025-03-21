import React from "react";
import "./MyCandidatesActiveCandidatesPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import MyCandidatesHeader from "../../components/MyCandidatesHeader/MyCandidatesHeader";
import MyCandidatesMiddleDashboard from "../../components/MyCandidatesMiddleDashboard/MyCandidatesMiddleDashboard";
import MyCandidatesActiveCandidatesMiddleDashboard from "../../components/MyCandidatesActiveCandidatesMiddleDashboard/MyCandidatesActiveCandidatesMiddleDashboard";

export default function MyCandidatesActiveCandidatesPage() {
  return (
    <div className="my-candidates-active-candidates-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-active-candidates-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-active-candidates-page__right-container">
          <MyCandidatesHeader />
          <MyCandidatesActiveCandidatesMiddleDashboard />
        </div>
      </div>
    </div>
  );
}
