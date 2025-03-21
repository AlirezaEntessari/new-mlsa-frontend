import React, { useState } from "react";
import "./TeamMemberAccountSettingsProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import TeamMemberAccountSettingsNavbar from "../../components/TeamMemberAccountSettingsNavbar/TeamMemberAccountSettingsNavbar";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";
import RadioButtonOff from "../../assets/icons/RadioButtonGrayOff.svg";
import axios from "axios";

export default function TeamMemberAccountSettingsProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    biography: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveDraft = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/account-settings/user-profile",
        formData
      );
      alert("Profile saved successfully!");

      // Clear all input fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        biography: "",
      });
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile. Please try again.");
    }
  };

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
          <div className="team-member-account-settings-profile__name-container">
            <input
              className="team-member-account-settings-profile__name-input"
              id="name"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="team-member-account-settings-profile__last-name-input"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
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
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div className="team-member-account-settings-profile__photo-upload-container">
            <div className="team-member-account-settings-profile__your-photo-container">
              <p className="team-member-account-settings-profile__your-photo-header">
                Your Photo
              </p>
              <p className="team-member-account-settings-profile__photo-displayed">
                This photo will be displayed on your profile
              </p>
            </div>
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
          </div>
          <div className="team-member-account-settings-profile__biography-hidden-container">
            <div className="team-member-account-settings-profile__inner-biography-container">
              <p className="team-member-account-settings-profile__biography-header">
                Biography
              </p>
              <p className="team-member-account-settings-profile__biography-description">
                Type a biography up to 250 words which will be displayed on your
                profile
              </p>
            </div>
            <div className="team-member-account-settings-profile__hidden-container">
              <img
                className="team-member-account-settings-profile__radio-button-off"
                src={RadioButtonOff}
                alt="Radio Button Off"
              />
              <span className="team-member-account-settings-profile__personal-bio-hidden-from-profile">
                Personal Bio is hidden from Profile
              </span>
            </div>
          </div>
          <textarea
            className="team-member-account-settings-profile__text-area"
            name="biography"
            value={formData.biography}
            onChange={handleInputChange}
          ></textarea>
          <button
            className="team-member-account-settings-profile__save-draft-button"
            onClick={handleSaveDraft}
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}
