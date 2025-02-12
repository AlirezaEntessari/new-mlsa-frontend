import React from "react";
import "./MyCandidatesPlacementsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import CandidatesSidePanel from "../../components/CandidatesSidePanel/CandidatesSidePanel";
import MyCandidatesHeader from "../../components/MyCandidatesHeader/MyCandidatesHeader";
import MyCandidatesPlacementsMiddleDashboard from "../../components/MyCandidatesPlacementsMiddleDashboard/MyCandidatesPlacementsMiddleDashboard";

export default function MyCandidatesPlacementsPage() {
  return (
    <div className="my-candidates-placements-page">
      <HeaderWithProfilePic />
      <div className="my-candidates-placements-page__main-container">
        <CandidatesSidePanel />
        <div className="my-candidates-placements-page__right-container">
          <MyCandidatesHeader />
          <MyCandidatesPlacementsMiddleDashboard />
        </div>
      </div>
    </div>
  );
}
