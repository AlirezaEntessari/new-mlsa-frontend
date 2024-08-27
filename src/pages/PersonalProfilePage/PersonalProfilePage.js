import React from "react";
import "./PersonalProfilePage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import ProfileSidePanel from "../../components/ProfileSidePanel/ProfileSidePanel";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import EditPencilIcon from "../../assets/icons/EditPencil.svg";
import YouTubeIcon from "../../assets/icons/YouTube50.svg";
import InstagramIcon from "../../assets/icons/Instagram50.svg";
import FacebookIcon from "../../assets/icons/Facebook50.svg";
import HumanReLogo from "../../assets/icons/HumanReLogo.svg";
import RatingStarLogo from "../../assets/icons/RatingStar.svg";

export default function PersonalProfilePage() {
  return (
    <div className="personal-profile-page">
      <AccountSettingsHeader />
      <div className="personal-profile-page__main-container">
        <ProfileSidePanel />
        <div className="personal-profile-page__right-container">
          <div className="personal-profile-page__profile-pic-container">
            <img
              className="personal-profile-page__profile-pic"
              src={ProfilePic}
              alt="Profile Pic"
            />
            <div className="personal-profile-page__edit-profile-container">
              <img
                className="personal-profile-page__edit-pencil-icon"
                src={EditPencilIcon}
                alt="Edit Pencil"
              />
              <p className="personal-profile-page__edit-profile-text">
                Edit Profile
              </p>
            </div>
          </div>
          <div className="personal-profile-page__hero-container">
            <div className="personal-profile-page__social-media-logos-container">
              <img
                className="personal-profile-page__youtube-icon"
                src={YouTubeIcon}
                alt="YouTube Icon"
              />
              <img
                className="personal-profile-page__instagram-icon"
                src={InstagramIcon}
                alt="Instagram Icon"
              />
              <img
                className="personal-profile-page__facebook-icon"
                src={FacebookIcon}
                alt="Facebook Icon"
              />
            </div>
            <div className="personal-profile-page__name-container">
              <p className="personal-profile-page__name-text">John Smith</p>
              <p className="personal-profile-page__name-email">
                jsmith@humanre.com
              </p>
              <p className="personal-profile-page__name-phone-number">
                561-123-4567
              </p>
            </div>
          </div>
          <div className="personal-profile-page__central-container">
            <img
              className="personal-profile-page__human-re-logo"
              src={HumanReLogo}
              alt="HumanRe Logo"
            />
            <div className="personal-profile-page__rating-industry-container">
              <label className="personal-profile-page__rating-label">
                Rating
              </label>
              <label className="personal-profile-page__industry-label">
                Industry:
              </label>
            </div>
            <div className="personal-profile-page__rating-star-container">
              <img
                className="personal-profile-page__rating-star-logo-one"
                src={RatingStarLogo}
                alt="Rating Star"
              />
              <img
                className="personal-profile-page__rating-star-logo-two"
                src={RatingStarLogo}
                alt="Rating Star"
              />
              <img
                className="personal-profile-page__rating-star-logo-three"
                src={RatingStarLogo}
                alt="Rating Star"
              />
              <img
                className="personal-profile-page__rating-star-logo-four"
                src={RatingStarLogo}
                alt="Rating Star"
              />
              <img
                className="personal-profile-page__rating-star-logo-five"
                src={RatingStarLogo}
                alt="Rating Star"
              />
            </div>
            <div className="personal-profile-page__agency-industry-container">
              <div className="personal-profile-page__agency-container">
                <label className="personal-profile-page__agency-label">
                  Agency
                </label>
                <p className="personal-profile-page__agency-text">HumanRe</p>
              </div>
              <div className="personal-profile-page__industry-category-container">
                <p className="personal-profile-page__aerospace">Aerospace</p>
                <p className="personal-profile-page__engineering">
                  Engineering
                </p>
                <p className="personal-profile-page__government">Government</p>
              </div>
            </div>
          </div>
          <div className="personal-profile-page__top-button-container">
            <button className="personal-profile-page__my-documents-button">My Documents</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
