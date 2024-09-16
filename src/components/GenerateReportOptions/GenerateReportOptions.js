import React from "react";
import "./GenerateReportOptions.scss";

export default function GenerateReportOptions() {
  return (
    <div className="generate-report-options">
      <p className="generate-report-options__job-report-option">Job Report</p>
      <p className="generate-report-options__candidate-report-option">
        Candidate Report
      </p>
      <p className="generate-report-options__partnership-report-option">
        Partnership Report
      </p>
      <p className="generate-report-options__user-activity-report-option">
        User Activity Report
      </p>
    </div>
  );
}
