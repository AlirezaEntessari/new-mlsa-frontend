import React from "react";
import "./MyCandidatesMobileCardContainer.scss";
import OnHoldOrangeIcon from "../../assets/icons/OnHoldOrange.svg";

export default function MyCandidatesMobileCardContainer() {
  return (
    <div className="my-candidates-mobile-card-container">
      <div className="my-candidates-mobile-card-container__mobile-card-container">
        <div className="my-candidates-mobile-card-container__mobile-card-1">
          <div className="my-candidates-mobile-card-container__mobile-card-1-id-posted-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-id">
              <span className="my-candidates-mobile-card-container__mobile-card-1-id-text">
                ID:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-id-number">
                67838473
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-1-posted">
              <span className="my-candidates-mobile-card-container__mobile-card-1-posted-text">
                Posted:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-posted-date">
                07/01/24
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-1-job-title-requests-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-job-title">
              <span className="my-candidates-mobile-card-container__mobile-card-1-job-title-text">
                Job Title:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-job-title-name">
                Allied - CMA
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-1-requests">
              <span className="my-candidates-mobile-card-container__mobile-card-1-requests-text">
                Requests:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-requests-number">
                3
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-1-candidate-find-job-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-candidate">
              <span className="my-candidates-mobile-card-container__mobile-card-1-candidate-text">
                Candidate:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-candidate-name">
                Jennifer Matthews
              </span>
            </p>
            <button className="my-candidates-mobile-card-container__mobile-card-1-find-job-button">
              Find Job
            </button>
          </div>
          <p className="my-candidates-mobile-card-container__mobile-card-1-industry">
            <span className="my-candidates-mobile-card-container__mobile-card-1-industry-text">
              Industry:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-card-1-industry-name">
              Manufacturing
            </span>
          </p>
          <button className="my-candidates-mobile-card-container__mobile-card-1-archive-button">
            Archive
          </button>
          <p className="my-candidates-mobile-card-container__mobile-card-1-location">
            <span className="my-candidates-mobile-card-container__mobile-location-text">
              Location:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-location-name">
              Dallas, TX
            </span>
          </p>
        </div>
        <div className="my-candidates-mobile-card-container__mobile-card-2">
          <div className="my-candidates-mobile-card-container__mobile-card-2-id-posted-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-id">
              <span className="my-candidates-mobile-card-container__mobile-card-2-id-text">
                ID:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-id-number">
                67838474
              </span>
            </p>
            <img
              className="my-candidates-mobile-card-container__mobile-on-hold-orange-icon"
              src={OnHoldOrangeIcon}
              alt="On Hold Orange Icon"
            />
            <p className="my-candidates-mobile-card-container__mobile-card-2-posted">
              <span className="my-candidates-mobile-card-container__mobile-card-2-posted-text">
                Posted:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-posted-date">
                07/01/24
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-2-job-title-requests-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-job-title">
              <span className="my-candidates-mobile-card-container__mobile-card-2-job-title-text">
                Job Title:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-job-title-name">
                NP
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-2-requests">
              <span className="my-candidates-mobile-card-container__mobile-card-2-requests-text">
                Requests:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-requests-number">
                6
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-2-candidate-find-job-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-candidate">
              <span className="my-candidates-mobile-card-container__mobile-card-2-candidate-text">
                Candidate:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-candidate-name">
                Chris Frost
              </span>
            </p>
            <button className="my-candidates-mobile-card-container__mobile-card-2-find-job-button">
              Find Job
            </button>
          </div>
          <p className="my-candidates-mobile-card-container__mobile-industry">
            <span className="my-candidates-mobile-card-container__mobile-industry-text">
              Industry:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-industry-name">
              Healthcare
            </span>
          </p>
          <button className="my-candidates-mobile-card-container__mobile-card-2-archive-button">
            Archive
          </button>
          <p className="my-candidates-mobile-card-container__mobile-card-2-location">
            <span className="my-candidates-mobile-card-container__mobile-card-2-location-text">
              Location:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-card-2-location-name">
              St. Louis, MO
            </span>
          </p>
        </div>
        <div className="my-candidates-mobile-card-container__mobile-card-3">
          <div className="my-candidates-mobile-card-container__mobile-card-1-id-posted-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-id">
              <span className="my-candidates-mobile-card-container__mobile-card-1-id-text">
                ID:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-id-number">
                67838473
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-1-posted">
              <span className="my-candidates-mobile-card-container__mobile-card-1-posted-text">
                Posted:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-posted-date">
                07/01/24
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-1-job-title-requests-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-job-title">
              <span className="my-candidates-mobile-card-container__mobile-card-1-job-title-text">
                Job Title:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-job-title-name">
                Allied - CMA
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-1-requests">
              <span className="my-candidates-mobile-card-container__mobile-card-1-requests-text">
                Requests:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-requests-number">
                3
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-1-candidate-find-job-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-candidate">
              <span className="my-candidates-mobile-card-container__mobile-card-1-candidate-text">
                Candidate:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-candidate-name">
                Jennifer Matthews
              </span>
            </p>
            <button className="my-candidates-mobile-card-container__mobile-card-1-find-job-button">
              Find Job
            </button>
          </div>
          <p className="my-candidates-mobile-card-container__mobile-card-1-industry">
            <span className="my-candidates-mobile-card-container__mobile-card-1-industry-text">
              Industry:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-card-1-industry-name">
              Manufacturing
            </span>
          </p>
          <button className="my-candidates-mobile-card-container__mobile-card-1-archive-button">
            Archive
          </button>
          <p className="my-candidates-mobile-card-container__mobile-card-1-location">
            <span className="my-candidates-mobile-card-container__mobile-location-text">
              Location:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-location-name">
              Dallas, TX
            </span>
          </p>
        </div>
        <div className="my-candidates-mobile-card-container__mobile-card-2">
          <div className="my-candidates-mobile-card-container__mobile-card-2-id-posted-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-id">
              <span className="my-candidates-mobile-card-container__mobile-card-2-id-text">
                ID:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-id-number">
                67838474
              </span>
            </p>
            <img
              className="my-candidates-mobile-card-container__mobile-on-hold-orange-icon"
              src={OnHoldOrangeIcon}
              alt="On Hold Orange Icon"
            />
            <p className="my-candidates-mobile-card-container__mobile-card-2-posted">
              <span className="my-candidates-mobile-card-container__mobile-card-2-posted-text">
                Posted:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-posted-date">
                07/01/24
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-2-job-title-requests-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-job-title">
              <span className="my-candidates-mobile-card-container__mobile-card-2-job-title-text">
                Job Title:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-job-title-name">
                NP
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-2-requests">
              <span className="my-candidates-mobile-card-container__mobile-card-2-requests-text">
                Requests:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-requests-number">
                6
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-2-candidate-find-job-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-candidate">
              <span className="my-candidates-mobile-card-container__mobile-card-2-candidate-text">
                Candidate:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-candidate-name">
                Chris Frost
              </span>
            </p>
            <button className="my-candidates-mobile-card-container__mobile-card-2-find-job-button">
              Find Job
            </button>
          </div>
          <p className="my-candidates-mobile-card-container__mobile-industry">
            <span className="my-candidates-mobile-card-container__mobile-industry-text">
              Industry:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-industry-name">
              Healthcare
            </span>
          </p>
          <button className="my-candidates-mobile-card-container__mobile-card-1-archive-button">
            Archive
          </button>
          <p className="my-candidates-mobile-card-container__mobile-card-2-location">
            <span className="my-candidates-mobile-card-container__mobile-card-2-location-text">
              Location:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-card-2-location-name">
              St. Louis, MO
            </span>
          </p>
        </div>
        <div className="my-candidates-mobile-card-container__mobile-card-3">
          <div className="my-candidates-mobile-card-container__mobile-card-1-id-posted-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-id">
              <span className="my-candidates-mobile-card-container__mobile-card-1-id-text">
                ID:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-id-number">
                67838473
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-1-posted">
              <span className="my-candidates-mobile-card-container__mobile-card-1-posted-text">
                Posted:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-posted-date">
                07/01/24
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-1-job-title-requests-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-job-title">
              <span className="my-candidates-mobile-card-container__mobile-card-1-job-title-text">
                Job Title:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-job-title-name">
                Allied - CMA
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-1-requests">
              <span className="my-candidates-mobile-card-container__mobile-card-1-requests-text">
                Requests:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-requests-number">
                3
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-1-candidate-find-job-container">
            <p className="my-candidates-mobile-card-container__mobile-card-1-candidate">
              <span className="my-candidates-mobile-card-container__mobile-card-1-candidate-text">
                Candidate:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-1-candidate-name">
                Jennifer Matthews
              </span>
            </p>
            <button className="my-candidates-mobile-card-container__mobile-card-1-find-job-button">
              Find Job
            </button>
          </div>
          <p className="my-candidates-mobile-card-container__mobile-card-1-industry">
            <span className="my-candidates-mobile-card-container__mobile-card-1-industry-text">
              Industry:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-card-1-industry-name">
              Manufacturing
            </span>
          </p>
          <button className="my-candidates-mobile-card-container__mobile-card-1-archive-button">
            Archive
          </button>
          <p className="my-candidates-mobile-card-container__mobile-card-1-location">
            <span className="my-candidates-mobile-card-container__mobile-location-text">
              Location:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-location-name">
              Dallas, TX
            </span>
          </p>
        </div>
        <div className="my-candidates-mobile-card-container__mobile-card-2">
          <div className="my-candidates-mobile-card-container__mobile-card-2-id-posted-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-id">
              <span className="my-candidates-mobile-card-container__mobile-card-2-id-text">
                ID:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-id-number">
                67838474
              </span>
            </p>
            <img
              className="my-candidates-mobile-card-container__mobile-on-hold-orange-icon"
              src={OnHoldOrangeIcon}
              alt="On Hold Orange Icon"
            />
            <p className="my-candidates-mobile-card-container__mobile-card-2-posted">
              <span className="my-candidates-mobile-card-container__mobile-card-2-posted-text">
                Posted:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-posted-date">
                07/01/24
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-2-job-title-requests-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-job-title">
              <span className="my-candidates-mobile-card-container__mobile-card-2-job-title-text">
                Job Title:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-job-title-name">
                NP
              </span>
            </p>
            <p className="my-candidates-mobile-card-container__mobile-card-2-requests">
              <span className="my-candidates-mobile-card-container__mobile-card-2-requests-text">
                Requests:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-requests-number">
                6
              </span>
            </p>
          </div>
          <div className="my-candidates-mobile-card-container__mobile-card-2-candidate-find-job-container">
            <p className="my-candidates-mobile-card-container__mobile-card-2-candidate">
              <span className="my-candidates-mobile-card-container__mobile-card-2-candidate-text">
                Candidate:
              </span>
              <span className="my-candidates-mobile-card-container__mobile-card-2-candidate-name">
                Chris Frost
              </span>
            </p>
            <button className="my-candidates-mobile-card-container__mobile-card-2-find-job-button">
              Find Job
            </button>
          </div>
          <p className="my-candidates-mobile-card-container__mobile-industry">
            <span className="my-candidates-mobile-card-container__mobile-industry-text">
              Industry:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-industry-name">
              Healthcare
            </span>
          </p>
          <button className="my-candidates-mobile-card-container__mobile-card-2-archive-button">
            Archive
          </button>
          <p className="my-candidates-mobile-card-container__mobile-card-2-location">
            <span className="my-candidates-mobile-card-container__mobile-card-2-location-text">
              Location:
            </span>
            <span className="my-candidates-mobile-card-container__mobile-card-2-location-name">
              St. Louis, MO
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
