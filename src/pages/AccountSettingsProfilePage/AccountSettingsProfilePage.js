import React from "react";
import "./AccountSettingsProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";

export default function AccountSettingsProfilePage() {
  return (
    <div className="account-settings-profile">
      <AccountSettingsHeader />
      <div className="account-settings-profile__main-container">
        <div className="account-settings-profile__side-panel">
          <p className="account-settings-profile__account-option">Account</p>
          <p className="account-settings-profile__dashboard-home">
            Dashboard Home
          </p>
          <p className="account-settings-profile__search-jobs">Search Jobs</p>
          <p className="account-settings-profile__search-candidates">
            Search Candidates
          </p>
          <p className="account-settings-profile__search-agencies">
            Search Agencies
          </p>
          <p className="account-settings-profile__my-jobs">My Jobs</p>
          <p className="account-settings-profile__my-candidates">
            My Candidates
          </p>
          <p className="account-settings-profile__placements">Placements</p>
          <p className="account-settings-profile__my-documents">My Documents</p>
          <p className="account-settings-profile__ratings">Ratings</p>
          <p className="account-settings-profile__profile">Profile</p>
          <p className="account-settings-profile__account">Account</p>
          <p className="account-settings-profile__help">Help</p>
          <p className="account-settings-profile__sign-out">Sign Out</p>
        </div>
        <div className="account-settings-profile__right-container">
          <p className="account-settings-profile__header">Account Settings</p>
          <p className="account-settings-profile__administrator-text">
            Administrator
          </p>
          <p className="account-settings-profile__header-bar">
            <span className="account-settings-profile__profile-option">
              Profile
            </span>
            <span className="account-settings-profile__agency-option">
              Agency
            </span>
            <span className="account-settings-profile__password-option">
              Password
            </span>
            <span className="account-settings-profile__billing-option">
              Billing
            </span>
            <span className="account-settings-profile__notifications-option">
              Notifications
            </span>
          </p>
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
          <p className="account-settings-profile__your-photo-text">
            Your Photo
          </p>
          <p className="account-settings-profile__your-photo-description">
            This photo will be displayed on your profile.
          </p>
          <div className="account-settings-profile__photo-container">
            <img
              className="account-settings-profile__profile-pic-icon"
              src={ProfilePic}
              alt="Profile Pic"
            />
            <div className="account-settings-profile__right-photo-container">
              <img className="account-settings-profile__upload-icon" src={UploadIcon} alt="Upload Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
