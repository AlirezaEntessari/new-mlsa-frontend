import React from "react";
import "./TeamMemberAccountSettingsProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import TeamMemberAccountSettingsNavbar from "../../components/TeamMemberAccountSettingsNavbar/TeamMemberAccountSettingsNavbar";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";
import RadioButtonOff from "../../assets/icons/RadioButtonGrayOff.svg";

export default function TeamMemberAccountSettingsProfilePage() {
  return (
    <div className="team-member-account-settings-profile">
      <AccountSettingsHeader />
      <div className="team-member-account-settings-profile__main-container">
        <AccountSettingsSidePanel />
        <div className="team-member-account-settings-profile__right-container">
          <p className="team-member-account-settings-profile__header">
            Account Settings
          </p>
          <p className="team-member-account-settings-profile__user-text">
            User
          </p>
          <TeamMemberAccountSettingsNavbar />
          <p className="team-member-account-settings-profile__profile-information">
            Profile Information
          </p>
          <div className="team-member-account-settings-profile__personal-details-container">
            <p className="team-member-account-settings-profile__update-photo-personal-details">
              Update your photo and personal details here
            </p>
            <button className="team-member-account-settings-profile__cancel-button">
              Cancel
            </button>
            <button className="team-member-account-settings-profile__save-changes-button">
              Save Changes
            </button>
          </div>
          <label
            className="team-member-account-settings-profile__name-label"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="team-member-account-settings-profile__name-input"
            id="name"
            type="text"
            placeholder="First Name"
          />
          <input
            className="team-member-account-settings-profile__last-name-input"
            type="text"
            placeholder="Last Name"
          />
          <label
            className="team-member-account-settings-profile__email-label"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="team-member-account-settings-profile__email-input"
            id="email"
            type="text"
          />
          <label
            className="team-member-account-settings-profile__phone-label"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="team-member-account-settings-profile__phone-input"
            id="phone"
            type="text"
          />
          <p className="team-member-account-settings-profile__your-photo-header">
            Your Photo
          </p>
          <p className="team-member-account-settings-profile__photo-displayed">
            This photo will be displayed on your profile
          </p>
          <div className="team-member-account-settings-profile__photo-container">
            <img
              className="team-member-account-settings-profile__profile-picture"
              src={ProfilePic}
              alt="Profile Picture"
            />
            <div className="team-member-account-settings-profile__upload-container">
              <img
                className="team-member-account-settings-profile__upload-icon"
                src={UploadIcon}
                alt="Upload Icon"
              />
              <p className="team-member-account-settings-profile__click-to-upload-text">
                Click to upload or drag and drop
              </p>
              <p className="team-member-account-settings-profile__upload-format">
                SVG, PNG or JPG (max 800 x 400px)
              </p>
            </div>
          </div>
          <p className="team-member-account-settings-profile__biography-header">
            Biography
          </p>
          <p className="team-member-account-settings-profile__biography-description">
            Type a biography up to 250 words which will be displayed on your
            profile
          </p>
          <div className="team-member-account-settings-profile__hidden-container">
            <img
              className="team-member-account-settings-profile__radio-button-off"
              src={RadioButtonOff}
              alt="Radio Button Off"
            />
            <span className="team-member-account-settings-profile__personal-bio-hidden-from-profile">Personal Bio is hidden from Profile</span>
          </div>
          <textarea className="team-member-account-settings-profile__text-area" name="text-area"></textarea>
          <button className="team-member-account-settings-profile__save-draft-button">Save Draft</button>
        </div>
      </div>
    </div>
  );
}
