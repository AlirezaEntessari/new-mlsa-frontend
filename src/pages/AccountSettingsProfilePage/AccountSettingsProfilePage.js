import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import "./AccountSettingsProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import UploadIcon from "../../assets/icons/UPload (2).svg";
import RadioButton from "../../assets/icons/RadioButtonGrayOff.svg";
import AccountSettingsNavbar from "../../components/AccountSettingsNavbar/AccountSettingsNavbar";
import AccountSettingsSidePanel from "../../components/AccountSettingsSidePanel/AccountSettingsSidePanel";
import axios from "axios";

export default function AccountSettingsProfilePage() {
  const { user, isSignedIn } = useUser();
  // useEffect(() => {
  //   if (isSignedIn && user) {
  //     console.log("User name:", user.firstName);
  //   } else {
  //     console.log("No user found");
  //   }
  // }, [isSignedIn, user]);

  useEffect(() => {
    if (isSignedIn && user) {
      console.log("User found:", user.firstName);
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        phone: user.phoneNumbers[0]?.phoneNumber || "",
        //todo: biography should be handled as {} (idk if its because of clerk or because of how its set) making it a string is just
        //! a current work-around for now
        biography: typeof user.publicMetadata?.biography === "string" ? user.publicMetadata.biography : "",          }); 
    } else {
      console.log("No user found");
    }
  }, [isSignedIn, user]);

  const handleUpdateFirstName = async () => {
    if (!user) {
      alert("No user found!");
      return;
    }
  
    console.log("🔍 Attempting to update user with:", { firstName: formData.firstName });
  // todo: theres something going wrong here. Form data gets sent as firstName but the endpoint is getting first_name which it allegedly is not a valid paramater for the request but idk why.
  //probably missing something simple as to why this doesnt work. 
    try {
      await user.update({
        
        firstName: formData.firstName,
      });
      console.log("Updating Clerk user:", { firstName: formData.firstName });
  
      alert("✅ First name updated successfully in Clerk!");
    } catch (error) {
      console.error("❌ Error updating first name:", error);
      alert(`Failed to update first name: ${error.message}`);
    }
  };


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    biography: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveDraft = async () => {
    console.log(formData); // Debugging: log the formData
    try {
      const response = await axios.post(
        "http://localhost:5001/api/save-draft",
        formData
      );
      alert(response.data.message || "Draft saved successfully!");

      // Clear all input fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        biography: "",
      });
    } catch (error) {
      console.error("Error saving draft:", error);
      alert("Failed to save draft. Please try again.");
    }
  };

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
            <button onClick={handleUpdateFirstName} className="account-settings-profile__personal-details-save-changes-button">
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
              name="firstName"
              id="name"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="account-settings-profile__last-name-input"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
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
            name="email"
            type="text"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
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
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
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
            name="biography"
            id="account"
            value={formData.biography}
            onChange={handleInputChange}
          ></textarea>
          <button
            className="account-settings-profile__save-draft-button"
            onClick={handleSaveDraft}
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}
