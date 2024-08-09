import React from "react";
import "./AccountSettingsAgencyPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import HumanReLogo from "../../assets/icons/HumanReLogo.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";
import RadioButton from "../../assets/icons/RadioButtonGrayOff.svg";
import CheckboxIcon from "../../assets/icons/CheckBoxEmpty.svg";

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
            <span className="account-settings-agency__hidden-from-profile">
              Agency Bio is hidden from profile
            </span>
          </p>
          <textarea
            className="account-settings-agency__text-area"
          ></textarea>
          <button className="account-settings-agency__save-draft-button">
            Save Draft
          </button>
          <p className="account-settings-agency__manage-agency-header">
            Manage Agency MLSA Team Members
          </p>
          <p className="account-settings-agency__manage-agency-description">
            Add, Delete or Click to View Your Agency MLSA Team Members here
          </p>
          <label
            className="account-settings-agency__name-of-team-member-label"
            htmlFor="name-of-team-member"
          >
            Name of Team Member
          </label>
          <input
            className="account-settings-agency__name-of-team-member-input"
            type="text"
            id="name-of-team-member"
          />
          <label
            className="account-settings-agency__team-member-email-label"
            htmlFor="team-member-email"
          >
            Team Member's Email
          </label>
          <input
            className="account-settings-agency__team-member-email-input"
            type="text"
          />
          <button className="account-settings-agency__add-team-member-button">
            Add Team Member
          </button>
          <p className="account-settings-agency__current-team-members">
            Current Team Members
          </p>
          <div className="account-settings-agency__first-row-checkbox-container">
            <p className="account-settings-agency__checkbox-left-side">
              <img
                className="account-settings-agency__left-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />{" "}
              <span className="account-settings-agency__checkbox-text">
                Jacqueline Norton
              </span>
            </p>
            <p className="account-settings-agency__checkbox-right-side">
              <img
                className="account-settings-agency__first-right-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />
              <span className="account-settings-agency__checkbox-text">
                Robert Pratt
              </span>
            </p>
          </div>
          <div className="account-settings-agency__checkbox-container">
            <p className="account-settings-agency__checkbox-left-side">
              <img
                className="account-settings-agency__left-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />{" "}
              <span className="account-settings-agency__checkbox-text">
                Chris Frost
              </span>
            </p>
            <p className="account-settings-agency__checkbox-right-side">
              <img
                className="account-settings-agency__second-right-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />
              <span className="account-settings-agency__checkbox-text">
                Andrew Watkins
              </span>
            </p>
          </div>
          <div className="account-settings-agency__checkbox-container">
            <p className="account-settings-agency__checkbox-left-side">
              <img
                className="account-settings-agency__left-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />{" "}
              <span className="account-settings-agency__checkbox-text">
                Tony Oliver
              </span>
            </p>
            <p className="account-settings-agency__checkbox-right-side">
              <img
                className="account-settings-agency__third-right-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />
              <span className="account-settings-agency__checkbox-text">
                Angela Dugan
              </span>
            </p>
          </div>
          <div className="account-settings-agency__checkbox-container">
            <p className="account-settings-agency__checkbox-left-side">
              <img
                className="account-settings-agency__left-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />{" "}
              <span className="account-settings-agency__checkbox-text">
                Jane Matthews
              </span>
            </p>
            <p className="account-settings-agency__checkbox-right-side">
              <img
                className="account-settings-agency__fourth-right-side-checkbox-icon"
                src={CheckboxIcon}
                alt="Checkbox"
              />
              <span className="account-settings-agency__checkbox-text">
                Christina O'Brien
              </span>
            </p>
          </div>
          <p className="account-settings-agency__stand-alone-checkbox-field">
            <img
              className="account-settings-agency__checkbox-icon"
              src={CheckboxIcon}
              alt="Check Box"
            />
            <span className="account-settings-agency__checkbox-text">
              Michael Nielsen
            </span>
          </p>
          <p className="account-settings-agency__stand-alone-checkbox-field">
            <img
              className="account-settings-agency__checkbox-icon"
              src={CheckboxIcon}
              alt="Check Box"
            />
            <span className="account-settings-agency__checkbox-text">
              Brian Dowd
            </span>
          </p>
          <p className="account-settings-agency__pending-invitation">Pending Invitation</p>
          <p className="account-settings-agency__stand-alone-checkbox-field">
            <img
              className="account-settings-agency__checkbox-icon"
              src={CheckboxIcon}
              alt="Check Box"
            />
            <span className="account-settings-agency__checkbox-text">
              Kim Miller
            </span>
          </p>
          <button className="account-settings-agency__delete-team-member-button">Delete Team Member</button>
        </div>
      </div>
    </div>
  );
}
