import React from "react";
import "./AgencyProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import ProfileSidePanel from "../../components/ProfileSidePanel/ProfileSidePanel";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import EditPencilIcon from "../../assets/icons/EditPencil.svg";
import YouTubeIcon from "../../assets/icons/YouTube50.svg";
import InstagramIcon from "../../assets/icons/Instagram50.svg";
import FacebookIcon from "../../assets/icons/Facebook50.svg";
import HumanReLogo from "../../assets/icons/HumanReLogo.svg";
import RatingStarLogo from "../../assets/icons/RatingStar.svg";
import AgencyVidPlaceholder from "../../assets/icons/AgencyVidPlaceholder.svg";
import ActionIcon from "../../assets/icons/3verticaldots.svg";
import FullScrollbarIcon from "../../assets/icons/scrollbarfull.svg";

export default function AgencyProfilePage() {
  return (
    <div className="agency-profile-page">
      <AccountSettingsHeader />
      <div className="agency-profile-page__main-container">
        <ProfileSidePanel />
        <div className="agency-profile-page__right-container">
          <div className="agency-profile-page__top-container">
            <img
              className="agency-profile-page__human-re-logo"
              src={HumanReLogo}
              alt="HumanRe Logo"
            />
            <div className="agency-profile-page__edit-profile-container">
              <img
                className="agency-profile-page__edit-pencil-icon"
                src={EditPencilIcon}
                alt="Edit Pencil"
              />
              <p className="agency-profile-page__edit-profile-text">
                Edit Profile
              </p>
            </div>
          </div>
          <div className="agency-profile-page__hero-container">
            <div className="agency-profile-page__social-media-logos-container">
              <img
                className="agency-profile-page__youtube-icon"
                src={YouTubeIcon}
                alt="YouTube Icon"
              />
              <img
                className="agency-profile-page__instagram-icon"
                src={InstagramIcon}
                alt="Instagram Icon"
              />
              <img
                className="agency-profile-page__facebook-icon"
                src={FacebookIcon}
                alt="Facebook Icon"
              />
            </div>
            <div className="agency-profile-page__company-container">
              <p className="agency-profile-page__company-text">HumanRe</p>
              <p className="agency-profile-page__company-website">
                http://www.humanre.com
              </p>
              <p className="agency-profile-page__company-phone-number">
                561-123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
