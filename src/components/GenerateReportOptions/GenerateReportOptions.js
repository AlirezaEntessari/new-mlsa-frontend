import React from "react";
import "./GenerateReportOptions.scss";
import { Link, useLocation } from "react-router-dom";

export default function GenerateReportOptions() {
  const location = useLocation(); // Get current route path

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="generate-report-options">
      <Link
        to="/my-documents-job-report-page"
        className={`generate-report-options__job-report-link ${
          isActive("/my-documents-job-report-page") ? "active" : ""
        }`}
      >
        <p
          className="generate-report-options__job-report-option"
          style={{
            color: isActive("/my-documents-job-report-page")
              ? "#8F4404"
              : "initial", // Default color if not active
          }}
        >
          Job Report
        </p>
      </Link>
      <Link
        to="/my-documents-candidate-report-page"
        className={`generate-report-options__candidate-report-link ${
          isActive("/my-documents-candidate-report-page") ? "active" : ""
        }`}
      >
        <p
          className="generate-report-options__candidate-report-option"
          style={{
            color: isActive("/my-documents-candidate-report-page")
              ? "#8F4404"
              : "initial",
          }}
        >
          Candidate Report
        </p>
      </Link>
      <Link
        to="/my-documents-partnership-report-page"
        className={`generate-report-options__partnership-report-link ${
          isActive("/my-documents-partnership-report-page") ? "active" : ""
        }`}
      >
        <p
          className="generate-report-options__partnership-report-option"
          style={{
            color: isActive("/my-documents-partnership-report-page")
              ? "#8F4404"
              : "initial",
          }}
        >
          Partnership Report
        </p>
      </Link>
      <Link
        to="/my-documents-user-activity-report-page"
        className={`generate-report-options__user-activity-report-link ${
          isActive("/my-documents-user-activity-report-page") ? "active" : ""
        }`}
      >
        <p
          className="generate-report-options__user-activity-report-option"
          style={{
            color: isActive("/my-documents-user-activity-report-page")
              ? "#8F4404"
              : "initial",
          }}
        >
          User Activity Report
        </p>
      </Link>
    </div>
  );
}
