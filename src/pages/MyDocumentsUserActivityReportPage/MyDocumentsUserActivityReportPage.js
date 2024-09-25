import React, { useState } from "react";
import "./MyDocumentsUserActivityReportPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import GenerateReportHeader from "../../components/GenerateReportHeader/GenerateReportHeader";
import GenerateReportOptions from "../../components/GenerateReportOptions/GenerateReportOptions";
import ModalGenerateReport from "../../components/ModalGenerateReport/ModalGenerateReport";

export default function MyDocumentsUserActivityReportPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGenerateReport = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="my-documents-user-activity-report-page">
      <HeaderWithProfilePic />
      <div className="my-documents-user-activity-report-page__main-container">
        <DocumentsSidePanel />
        <div className="my-documents-user-activity-report-page__right-container">
          <p className="my-documents-user-activity-report-page__header">
            My Documents
          </p>
          <div className="my-documents-user-activity-report-page__mobile-report-container">
            <GenerateReportHeader />
            <GenerateReportOptions />
          </div>
          <div className="my-documents-user-activity-report-page__mobile-central-container">
            <div className="my-documents-user-activity-report-page__mobile-daily-activity-container">
              <label
                className="my-documents-user-activity-report-page__mobile-daily-activity-label"
                htmlFor="mobile-daily-activity"
              >
                Daily Activity
              </label>
              <select
                className="my-documents-user-activity-report-page__mobile-daily-activity-select"
                name="mobile-daily-activity"
                id="mobile-daily-activity"
              >
                <option value="all users" disabled selected>
                  All Users
                </option>
                <option value="0 users">0 users</option>
                <option value="5 users">5 users</option>
                <option value="10 users">10 users</option>
                <option value="25 users">25 users</option>
                <option value="50 users">50 users</option>
                <option value="100 users">100 users</option>
              </select>
            </div>
            <div className="my-documents-user-activity-report-page__mobile-keyword-container">
              <label
                className="my-documents-user-activity-report-page__mobile-keyword-label"
                htmlFor="mobile-keyword"
              >
                Keyword
              </label>
              <input
                className="my-documents-user-activity-report-page__mobile-keyword-input"
                type="text"
                id="mobile-keyword"
                placeholder="Enter Keyword"
              />
            </div>
            <div className="my-documents-user-activity-report-page__mobile-user-name-container">
              <label
                className="my-documents-user-activity-report-page__mobile-user-name-label"
                htmlFor="mobile-user-name"
              >
                User Name
              </label>
              <select
                className="my-documents-user-activity-report-page__mobile-user-name-select"
                name="mobile-user-name"
                id="mobile-user-name"
              >
                <option value="Jane Matthews" disabled selected>
                  Jane Matthews
                </option>
                <option value="Thomas Smith">Thomas Smith</option>
                <option value="Josephine Harris">Josephine Harris</option>
                <option value="Frasier Thompson">Frasier Thompson</option>
                <option value="Paulina White">Paulina White</option>
              </select>
            </div>
            <div className="my-documents-user-activity-report-page__mobile-date-or-range-of-activity-container">
              <label
                className="my-documents-user-activity-report-page__mobile-date-or-range-of-activity-label"
                htmlFor="mobile-date-or-range-of-activity"
              >
                Date or Range of Activity
              </label>
              <select
                className="my-documents-user-activity-report-page__mobile-date-or-range-of-activity-select"
                name="mobile-date-or-range-of-activity"
                id="mobile-date-or-range-of-activity"
              >
                <option value="last week" disabled selected>
                  Last Week
                </option>
                <option value="one day ago">one day ago</option>
                <option value="two days ago">two days ago</option>
                <option value="three days ago">three days ago</option>
                <option value="two weeks ago">two weeks ago</option>
                <option value="three weeks ago">three weeks ago</option>
                <option value="one month ago">one month ago</option>
                <option value="two months ago">two months ago</option>
              </select>
            </div>
            <div className="my-documents-user-activity-report-page__mobile-type-of-activity-container">
              <label
                className="my-documents-user-activity-report-page__mobile-type-of-activity-label"
                htmlFor="mobile-type-of-activity"
              >
                Type of Activity
              </label>
              <select
                className="my-documents-user-activity-report-page__mobile-type-of-activity-select"
                name="mobile-type-of-activity"
                id="mobile-type-of-activity"
              >
                <option value="placements" disabled selected>
                  Placements
                </option>
                <option value="job search">Job Search</option>
              </select>
            </div>
            <button
              onClick={handleGenerateReport}
              className="my-documents-user-activity-report-page__mobile-generate-report-button"
            >
              Generate Report
            </button>
          </div>
          <div className="my-documents-user-activity-report-page__tablet-desktop-generate-report-container">
            <GenerateReportHeader />
          </div>
          <div className="my-documents-user-activity-report-page__tablet-central-container">
            <GenerateReportOptions />
            <div className="my-documents-user-activity-report-page__tablet-content-container">
              <div className="my-documents-user-activity-report-page__tablet-daily-activity-keyword-container">
                <div className="my-documents-user-activity-report-page__tablet-daily-activity-container">
                  <label
                    className="my-documents-user-activity-report-page__tablet-daily-activity-label"
                    htmlFor="tablet-daily-activity"
                  >
                    Daily Activity
                  </label>
                  <select
                    className="my-documents-user-activity-report-page__tablet-daily-activity-select"
                    name="tablet-daily-activity"
                    id="tablet-daily-activity"
                  >
                    <option value="all users" disabled selected>
                      All Users
                    </option>
                    <option value="0 users">0 users</option>
                    <option value="5 users">5 users</option>
                    <option value="10 users">10 users</option>
                    <option value="25 users">25 users</option>
                    <option value="50 users">50 users</option>
                    <option value="100 users">100 users</option>
                  </select>
                </div>
                <div className="my-documents-user-activity-report-page__tablet-keyword-container">
                  <label
                    className="my-documents-user-activity-report-page__tablet-keyword-label"
                    htmlFor="tablet-keyword"
                  >
                    Keyword
                  </label>
                  <input
                    className="my-documents-user-activity-report-page__tablet-keyword-input"
                    type="text"
                    placeholder="Enter Keyword"
                  />
                </div>
              </div>
              <div className="my-documents-user-activity-report-page__tablet-user-name-date-or-range-of-activity-container">
                <div className="my-documents-user-activity-report-page__tablet-user-name-container">
                  <label
                    className="my-documents-user-activity-report-page__tablet-user-name-label"
                    htmlFor="tablet-user-name"
                  >
                    User Name
                  </label>
                  <select
                    className="my-documents-user-activity-report-page__tablet-user-name-select"
                    name="tablet-user-name"
                    id="tablet-user-name"
                  >
                    <option value="Jane Matthews" disabled selected>
                      Jane Matthews
                    </option>
                    <option value="Thomas Smith">Thomas Smith</option>
                    <option value="Josephine Harris">Josephine Harris</option>
                    <option value="Frasier Thompson">Frasier Thompson</option>
                    <option value="Paulina White">Paulina White</option>
                  </select>
                </div>
                <div className="my-documents-user-activity-report-page__tablet-date-or-range-of-activity-container">
                  <label
                    className="my-documents-user-activity-report-page__tablet-date-or-range-of-activity-label"
                    htmlFor="tablet-date-or-range-of-activity"
                  >
                    Date or Range of Activity
                  </label>
                  <select
                    className="my-documents-user-activity-report-page__tablet-date-or-range-of-activity-select"
                    name="tablet-date-or-range-of-activity"
                    id="tablet-date-or-range-of-activity"
                  >
                    <option value="last week" disabled selected>
                      Last Week
                    </option>
                    <option value="one day ago">one day ago</option>
                    <option value="two days ago">two days ago</option>
                    <option value="three days ago">three days ago</option>
                    <option value="two weeks ago">two weeks ago</option>
                    <option value="three weeks ago">three weeks ago</option>
                    <option value="one month ago">one month ago</option>
                    <option value="two months ago">two months ago</option>
                  </select>
                </div>
              </div>
              <div className="my-documents-user-activity-report-page__tablet-type-of-activity-container">
                <label
                  className="my-documents-user-activity-report-page__tablet-type-of-activity-label"
                  htmlFor="tablet-type-of-activity"
                >
                  Type of Activity
                </label>
                <select
                  className="my-documents-user-activity-report-page__tablet-type-of-activity-select"
                  name="tablet-type-of-activity"
                  id="tablet-type-of-activity"
                >
                  <option value="placements" disabled selected>
                    Placements
                  </option>
                  <option value="job search">Job Search</option>
                </select>
              </div>
              <button
                onClick={handleGenerateReport}
                className="my-documents-user-activity-report-page__tablet-generate-report-button"
              >
                Generate Report
              </button>
            </div>
          </div>
          <div className="my-documents-user-activity-report-page__desktop-central-container">
            <GenerateReportOptions />
            <div className="my-documents-user-activity-report-page__desktop-content-container">
              <div className="my-documents-user-activity-report-page__desktop-daily-activity-keyword-container">
                <div className="my-documents-user-activity-report-page__desktop-daily-activity-container">
                  <label
                    className="my-documents-user-activity-report-page__desktop-daily-activity-label"
                    htmlFor="desktop-daily-activity"
                  >
                    Daily Activity
                  </label>
                  <select
                    className="my-documents-user-activity-report-page__desktop-daily-activity-select"
                    name="desktop-daily-activity"
                    id="desktop-daily-activity"
                  >
                    <option value="all users" disabled selected>
                      All Users
                    </option>
                    <option value="0 users">0 users</option>
                    <option value="5 users">5 users</option>
                    <option value="10 users">10 users</option>
                    <option value="25 users">25 users</option>
                    <option value="50 users">50 users</option>
                    <option value="100 users">100 users</option>
                  </select>
                </div>
                <div className="my-documents-user-activity-report-page__desktop-keyword-container">
                  <label
                    className="my-documents-user-activity-report-page__desktop-keyword-label"
                    htmlFor="desktop-keyword"
                  >
                    Keyword
                  </label>
                  <input
                    className="my-documents-user-activity-report-page__desktop-keyword-input"
                    type="text"
                    id="desktop-keyword"
                  />
                </div>
              </div>
              <div className="my-documents-user-activity-report-page__desktop-user-name-date-or-range-of-activity-container">
                <div className="my-documents-user-activity-report-page__desktop-user-name-container">
                  <label
                    className="my-documents-user-activity-report-page__desktop-user-name-label"
                    htmlFor="desktop-user-name"
                  >
                    User Name
                  </label>
                  <select
                    className="my-documents-user-activity-report-page__desktop-user-name-select"
                    name="desktop-user-name"
                    id="desktop-user-name"
                  >
                    <option value="Jane Matthews" disabled selected>
                      Jane Matthews
                    </option>
                    <option value="Thomas Smith">Thomas Smith</option>
                    <option value="Josephine Harris">Josephine Harris</option>
                    <option value="Frasier Thompson">Frasier Thompson</option>
                    <option value="Paulina White">Paulina White</option>
                  </select>
                </div>
                <div className="my-documents-user-activity-report-page__desktop-date-or-range-of-activity-container">
                  <label
                    className="my-documents-user-activity-report-page__desktop-date-or-range-of-activity-label"
                    htmlFor="desktop-date-or-range-of-activity"
                  >
                    Date or Range of Activity
                  </label>
                  <select
                    className="my-documents-user-activity-report-page__desktop-date-or-range-of-activity-select"
                    name="desktop-date-or-range-of-activity"
                    id="desktop-date-or-range-of-activity"
                  >
                    <option value="last week" disabled selected>
                      Last Week
                    </option>
                    <option value="one day ago">one day ago</option>
                    <option value="two days ago">two days ago</option>
                    <option value="three days ago">three days ago</option>
                    <option value="two weeks ago">two weeks ago</option>
                    <option value="three weeks ago">three weeks ago</option>
                    <option value="one month ago">one month ago</option>
                    <option value="two months ago">two months ago</option>
                  </select>
                </div>
              </div>
              <div className="my-documents-user-activity-report-page__desktop-type-of-activity-container">
                <label
                  className="my-documents-user-activity-report-page__desktop-type-of-activity-label"
                  htmlFor="desktop-type-of-activity"
                >
                  Type of Activity
                </label>
                <select
                  className="my-documents-user-activity-report-page__desktop-type-of-activity-select"
                  name="desktop-type-of-activity"
                  id="desktop-type-of-activity"
                >
                  <option value="placements" disabled selected>
                    Placements
                  </option>
                  <option value="job search">Job Search</option>
                </select>
              </div>
              <button
                onClick={handleGenerateReport}
                className="my-documents-user-activity-report-page__desktop-generate-report-button"
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <ModalGenerateReport closeModal={closeModal} />}
    </div>
  );
}
