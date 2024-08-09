import React from "react";
import "./AccountSettingsProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";
import RadioButton from "../../assets/icons/RadioButtonGrayOff.svg";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";

export default function AccountSettingsProfilePage() {
  return (
    <div className="account-settings-profile">
      <AccountSettingsHeader />
      <div className="account-settings-profile__main-container">
        <AccountSettingsSidePanel />
        <div className="account-settings-profile__right-container">
          <p className="account-settings-profile__header">Account Settings</p>
          <p className="account-settings-profile__administrator-text">
            Administrator
          </p>
          <AccountSettingsNavbar />
          <p className="account-settings-profile__profile-information-text">
            Profile Information
          </p>
          <div className="account-settings-profile__personal-details-container">
            <span className="account-settings-profile__personal-details-text">
              Update your photo and personal details here
            </span>
            <button className="account-settings-profile__personal-details-cancel-button">
              Cancel
            </button>
            <button className="account-settings-profile__personal-details-save-changes-button">
              Save Changes
            </button>
          </div>
          <label
            className="account-settings-profile__name-label"
            htmlFor="name"
          >
            Name
          </label>
          <div className="account-settings-profile__name-container">
            <input
              className="account-settings-profile__name-input"
              id="name"
              type="text"
              placeholder="First Name"
            />
            <input
              className="account-settings-profile__last-name-input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <label
            className="account-settings-profile__email-label"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="account-settings-profile__email-input"
            type="text"
            id="email"
          />
          <label
            className="account-settings-profile__phone-label"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="account-settings-profile__phone-input"
            type="text"
          />
          <div className="account-settings-profile__tablet-photo-container">
            <div className="account-settings-profile__photo-text-container">
              <p className="account-settings-profile__your-photo-text">
                Your Photo
              </p>
              <p className="account-settings-profile__your-photo-description">
                This photo will be displayed on your profile.
              </p>
            </div>
            <div className="account-settings-profile__photo-container">
              <img
                className="account-settings-profile__profile-pic-icon"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <div className="account-settings-profile__right-photo-container">
                <img
                  className="account-settings-profile__upload-icon"
                  src={UploadIcon}
                  alt="Upload Icon"
                />
                <p className="account-settings-profile__right-photo-container-description">
                  Click to upload or drag and drop SVG, PNG, or JPG (max 800 x
                  400px)
                </p>
              </div>
            </div>
          </div>
          <div className="account-settings-profile__general-biography-container">
            <div className="account-settings-profile__biography-container">
              <p className="account-settings-profile__biography">Biography</p>
              <p className="account-settings-profile__biography-description">
                Type a biography up to 250 words which will be displayed on your
                profile.
              </p>
            </div>
            <p className="account-settings-profile__personal-bio">
              <img
                className="account-settings-profile__radio-button"
                src={RadioButton}
                alt="Radio Button"
              />
              <span className="account-settings-profile__personal-bio-text">
                Personal Bio is hidden from Profile
              </span>
            </p>
          </div>
          <textarea
            className="account-settings-profile__text-area"
            name="account"
            id="account"
          ></textarea>
          <button className="account-settings-profile__save-draft-button">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}
