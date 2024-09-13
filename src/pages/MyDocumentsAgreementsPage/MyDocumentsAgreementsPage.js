import React from "react";
import "./MyDocumentsAgreementsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import MyDocumentsNavbar from "../../components/MyDocumentsNavbar/MyDocumentsNavbar";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MyDocumentsNDANavbar from "../../components/MyDocumentsNDANavbar/MyDocumentsNDANavbar";
import PDFLogo from "../../assets/icons/pdflogo.svg";
import DownloadIcon from "../../assets/icons/downloadicon.svg";
import CheckBoxEmptyIcon from "../../assets/icons/CheckBoxEmpty.svg";
import PageArrowLeftIcon from "../../assets/icons/PageArrowLeft.svg";
import PageArrowRightIcon from "../../assets/icons/PageArrowRight.svg";
import PageNumberPeach1Icon from "../../assets/icons/PageNumberPeach1.svg";
import PageNumberGray2Icon from "../../assets/icons/PageNumberGray2.svg";
import PageNumberGray3Icon from "../../assets/icons/PageNumberGray3.svg";

export default function MyDocumentsAgreementsPage() {
  return (
    <div className="my-documents-agreements-page">
      <HeaderWithProfilePic />
      <div className="my-documents-agreements-page__main-container">
        <DocumentsSidePanel />
        <div className="my-documents-agreements-page__right-container">
          <p className="my-documents-agreements-page__header">My Documents</p>
          <MyDocumentsNavbar />
          <div className="my-documents-agreements-page__search-container">
            <label
              className="my-documents-agreements-page__search-agreements-label"
              htmlFor="search-agreements"
            >
              Search Agreements
            </label>
            <img
              className="my-documents-agreements-page__search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="my-documents-agreements-page__search-agreements-input"
              type="text"
              id="search-agreements"
            />
          </div>
          <MyDocumentsNDANavbar />
          <div className="my-documents-agreements-page__card-container">
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-white-background">
              <p className="my-documents-agreements-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-agreements-page__card-gray-background">
              <p className="my-documents-agreements-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-agreements-page__logo-container">
                <img
                  className="my-documents-agreements-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-agreements-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
          </div>
          <div className="my-documents-agreements-page__tablet-row-containers">
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-white-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-white-row-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__white-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
            <div className="my-documents-agreements-page__tablet-gray-row-container">
              <img
                className="my-documents-agreements-page__pdf-logo-small"
                src={PDFLogo}
                alt="PDF Logo"
              />
              <span className="my-documents-agreements-page__tablet-gray-row-text">
                9347469298757_John Smith NDA_signed_2024
              </span>
              <img
                className="my-documents-agreements-page__gray-row-checkbox-empty-icon"
                src={CheckBoxEmptyIcon}
                alt="Checkbox Empty Icon"
              />
            </div>
          </div>
          <div className="my-documents-agreements-page__page-number-container">
            <img
              className="my-documents-agreements-page__page-arrow-left-icon"
              src={PageArrowLeftIcon}
              alt="Page Arrow Left Icon"
            />
            <img
              className="my-documents-agreements-page__page-number-peach-1-icon"
              src={PageNumberPeach1Icon}
              alt="Page Number Peach 1 Icon"
            />
            <img
              className="my-documents-agreements-page__page-number-gray-2-icon"
              src={PageNumberGray2Icon}
              alt="Page Number Gray 2 Icon"
            />
            <img
              className="my-documents-agreements-page__page-number-gray-3-icon"
              src={PageNumberGray3Icon}
              alt="Page Number Gray 3 Icon"
            />
            <img className="my-documents-agreements-page__page-arrow-right-icon" src={PageArrowRightIcon} alt="Page Arrow Right Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
