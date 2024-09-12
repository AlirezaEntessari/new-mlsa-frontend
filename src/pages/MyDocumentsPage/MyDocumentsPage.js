import React from "react";
import "./MyDocumentsPage.scss";
import HeaderWithProfilePic from "../../components/HeaderWithProfilePic/HeaderWithProfilePic";
import DocumentsSidePanel from "../../components/DocumentsSidePanel/DocumentsSidePanel";
import MyDocumentsNavbar from "../../components/MyDocumentsNavbar/MyDocumentsNavbar";
import SearchIcon from "../../assets/icons/Search (2).svg";
import MyDocumentsNDANavbar from "../../components/MyDocumentsNDANavbar/MyDocumentsNDANavbar";
import PDFLogo from "../../assets/icons/pdflogo.svg";
import DownloadIcon from "../../assets/icons/downloadicon.svg";

export default function MyDocumentsPage() {
  return (
    <div className="my-documents-page">
      <HeaderWithProfilePic />
      <div className="my-documents-page__main-container">
        <DocumentsSidePanel />
        <div className="my-documents-page__right-container">
          <p className="my-documents-page__header">My Documents</p>
          <MyDocumentsNavbar />
          <div className="my-documents-page__search-container">
            <label
              className="my-documents-page__search-agreements-label"
              htmlFor="search-agreements"
            >
              Search Agreements
            </label>
            <img
              className="my-documents-page__search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              className="my-documents-page__search-agreements-input"
              type="text"
              id="search-agreements"
            />
          </div>
          <MyDocumentsNDANavbar />
          <div className="my-documents-page__card-container">
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-white-background">
              <p className="my-documents-page__card-text">
                7894982765758_Connor Matthews NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
            <div className="my-documents-page__card-gray-background">
              <p className="my-documents-page__card-gray-text">
                9347469298757_John Smith NDA_signed_2024
              </p>
              <div className="my-documents-page__logo-container">
                <img
                  className="my-documents-page__pdf-logo"
                  src={PDFLogo}
                  alt="PDF Logo"
                />
                <img
                  className="my-documents-page__download-icon"
                  src={DownloadIcon}
                  alt="Download Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
