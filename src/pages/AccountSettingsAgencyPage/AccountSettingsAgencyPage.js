import React from "react";
import "./AccountSettingsAgencyPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import HumanReLogo from "../../assets/icons/HumanReLogo.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";
import RadioButton from "../../assets/icons/RadioButtonGrayOff.svg";

export default function AccountSettingsAgencyPage() {
  return (
    <div className="account-settings-agency">
      <AccountSettingsHeader />
      <div className="account-settings-agency__main-container">
        <AccountSettingsSidePanel />
        <div className="account-settings-agency__right-container">
          <p className="account-settings-agency__header">Account Settings</p>
          <p className="account-settings-agency__administrator-text">
            Administrator
          </p>
          <AccountSettingsNavbar />
          <p className="account-settings-agency__agency-information-header">
            Agency Information
          </p>
          <div className="account-settings-agency__personal-details-container">
            <span className="account-settings-agency__personal-details">
              Update your Agency details and manage your users here
            </span>
            <button className="account-settings-agency__cancel-button">
              Cancel
            </button>
            <button className="account-settings-agency__save-changes-button">
              Save Changes
            </button>
          </div>
          <label
            className="account-settings-agency__name-of-agency-label"
            htmlFor="name-of-agency"
          >
            Name of Agency
          </label>
          <input
            className="account-settings-agency__name-of-agency-input"
            type="text"
            id="name-of-agency"
          />
          <label
            className="account-settings-agency__agency-phone-label"
            htmlFor="agency-phone"
          >
            Agency Phone
          </label>
          <input
            className="account-settings-agency__agency-phone-input"
            type="text"
            id="agency-phone"
          />
          <label
            className="account-settings-agency__agency-website-label"
            htmlFor="agency-website"
          >
            Agency Website
          </label>
          <input
            className="account-settings-agency__agency-website-input"
            type="text"
          />
          <p className="account-settings-agency__agency-logo">Agency Logo</p>
          <p className="account-settings-agency__agency-logo-description">
            This logo will be displayed on your profile.
          </p>
          <img
            className="account-settings-agency__human-re-logo"
            src={HumanReLogo}
            alt="HumanRe Logo"
          />
          <div className="account-settings-agency__upload-container">
            <img
              className="account-settings-agency__upload-icon"
              src={UploadIcon}
              alt="Upload Icon"
            />
            <p className="account-settings-agency__click-to-upload">
              Click to upload or drag and drop
            </p>
            <p className="account-settings-agency__upload-format">
              SVG, PNG or JPG (max 800 x 400 px)
            </p>
          </div>
          <label className="account-settings-agency__social-media-links-label">
            Social Media Links
          </label>
          <input
            className="account-settings-agency__facebook-input"
            type="text"
            placeholder="Facebook Link"
          />
          <input
            className="account-settings-agency__instagram-input"
            type="text"
            placeholder="Instagram Link"
          />
          <input
            className="account-settings-agency__youtube-input"
            type="text"
            placeholder="YouTube Link"
          />
          <p className="account-settings-agency__about-your-agency-header">
            About Your Agency
          </p>
          <p className="account-settings-agency__about-your-agency-description">
            Type a paragraph up to 250 words which will be displayed on your
            Agency profile page
          </p>
          <p className="account-settings-agency__profile">
            <img
              className="account-settings-agency__radio-button"
              src={RadioButton}
              alt="Radio Button"
            />
            <span className="account-settings-agency__hidden-from-profile">Agency Bio is hidden from profile</span>
          </p>
          <textarea className="account-settings-agency__text-area" rows="10" cols="62"></textarea>
          <button className="account-settings-agency__save-draft-button">Save Draft</button>
        </div>
      </div>
    </div>
  );
}
