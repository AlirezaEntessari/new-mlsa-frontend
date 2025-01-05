import React, { useState } from "react";
import "./AccountSettingsAgencyPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import HumanReLogo from "../../assets/icons/HumanReLogo.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";
import RadioButton from "../../assets/icons/RadioButtonGrayOff.svg";
import CheckboxIcon from "../../assets/icons/CheckBoxEmpty.svg";
import axios from "axios";

export default function AccountSettingsAgencyPage() {
  const [formData, setFormData] = useState({
    nameOfAgency: "",
    agencyPhone: "",
    agencyWebsite: "",
    facebookLink: "",
    instagramLink: "",
    youtubeLink: "",
    aboutYourAgency: "",
  });

  const [teamMember, setTeamMember] = useState({
    nameOfTeamMember: "",
    teamMemberEmail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles input changes for team member form
  const handleTeamMemberInputChange = (e) => {
    const { name, value } = e.target;
    setTeamMember((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveDraft = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/save-agency-draft",
        formData
      );
      alert(response.data.message || "Draft saved successfully!");
      // Clear the form after successful submission
      setFormData({
        nameOfAgency: "",
        agencyPhone: "",
        agencyWebsite: "",
        facebookLink: "",
        instagramLink: "",
        youtubeLink: "",
        aboutYourAgency: "",
      });
    } catch (error) {
      console.error("Error saving draft:", error);
      alert("Failed to save draft. Please try again.");
    }
  };

  const handleAddTeamMember = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/team-members",
        teamMember
      );
      alert(response.data.message || "Team member added successfully!");
      // Reset the teamMember state
      setTeamMember({ nameOfTeamMember: "", teamMemberEmail: "" });
    } catch (error) {
      console.error("Error adding team member:", error);
      alert("Failed to add team member. Please try again.");
    }
  };

  const handleDeleteTeamMember = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/team-members",
        { data: teamMember }
      );
      alert(response.data.message || "Team member deleted successfully!");
      // Reset the teamMember state
      setTeamMember({ nameOfTeamMember: "", teamMemberEmail: "" });
    } catch (error) {
      console.error("Error deleting team member:", error);
      alert("Failed to delete team member. Please try again.");
    }
  };

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
            name="nameOfAgency"
            value={formData.nameOfAgency}
            onChange={handleInputChange}
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
            name="agencyPhone"
            value={formData.agencyPhone}
            onChange={handleInputChange}
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
            id="agency-website"
            name="agencyWebsite"
            value={formData.agencyWebsite}
            onChange={handleInputChange}
          />
          <div className="account-settings-agency__general-container">
            <div className="account-settings-agency__agency-logo-container">
              <p className="account-settings-agency__agency-logo">
                Agency Logo
              </p>
              <p className="account-settings-agency__agency-logo-description">
                This logo will be displayed on your profile.
              </p>
            </div>
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
          </div>
          <label className="account-settings-agency__social-media-links-label">
            Social Media Links
          </label>
          <input
            className="account-settings-agency__facebook-input"
            type="text"
            placeholder="Facebook Link"
            name="facebookLink"
            value={formData.facebookLink}
            onChange={handleInputChange}
          />
          <input
            className="account-settings-agency__instagram-input"
            type="text"
            placeholder="Instagram Link"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleInputChange}
          />
          <input
            className="account-settings-agency__youtube-input"
            type="text"
            placeholder="YouTube Link"
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleInputChange}
          />
          <div className="account-settings-agency__about-your-agency-general-container">
            <div className="account-settings-agency__about-your-agency-header-container">
              <p className="account-settings-agency__about-your-agency-header">
                About Your Agency
              </p>
              <p className="account-settings-agency__about-your-agency-description">
                Type a paragraph up to 250 words which will be displayed on your
                Agency profile page
              </p>
            </div>
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
          </div>
          <textarea
            className="account-settings-agency__text-area"
            name="aboutYourAgency"
            value={formData.aboutYourAgency}
            onChange={handleInputChange}
          ></textarea>
          <button
            className="account-settings-agency__save-draft-button"
            onClick={handleSaveDraft}
          >
            Save Bio Draft
          </button>
          <div className="account-settings-agency__bottom-container">
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
              name="nameOfTeamMember"
              value={teamMember.nameOfTeamMember}
              onChange={handleTeamMemberInputChange}
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
              id="team-member-email"
              name="teamMemberEmail"
              value={teamMember.teamMemberEmail}
              onChange={handleTeamMemberInputChange}
            />
            <button
              className="account-settings-agency__add-team-member-button"
              onClick={handleAddTeamMember}
            >
              Add Team Member
            </button>
            <p className="account-settings-agency__current-team-members">
              Current Users
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
            <p className="account-settings-agency__pending-invitation">
              Pending Invitation
            </p>
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
            <button
              className="account-settings-agency__delete-team-member-button"
              onClick={handleDeleteTeamMember}
            >
              Delete Team Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
