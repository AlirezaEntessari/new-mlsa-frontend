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
          <div className="agency-profile-page__mobile-top-container">
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
          <div className="agency-profile-page__tablet-top-container">
            <img className="agency-profile-page__tablet-human-re-logo" src={HumanReLogo} alt="HumanRe Logo" />
            <p className="agency-profile-page__tablet-human-re-title">HumanRe</p>
            <p className="agency-profile-page__tablet-website">www.humane.com</p>
            <p className="agency-profile-page__tablet-phone-number">561-123-4567</p>
            <div className="agency-profile-page__tablet-social-media-container">
              <img className="agency-profile-page__tablet-facebook-icon" src={FacebookIcon} alt="Facebook Icon" />
              <img className="agency-profile-page__tablet-instagram-icon" src={InstagramIcon} alt="Instagram Icon" />
              <img className="agency-profile-page__tablet-youtube-icon" src={YouTubeIcon} alt="YouTube Icon" />
            </div>
            <div className="agency-profile-page__tablet-edit-profile-container">
              <span className="agency-profile-page__tablet-edit-profile-text">Edit Profile</span>
              <img className="agency-profile-page__tablet-edit-pencil-icon" src={EditPencilIcon} alt="Edit Pencil Icon" />
            </div>
          </div>
          <img
            className="agency-profile-page__agency-video-placeholder"
            src={AgencyVidPlaceholder}
            alt="Agency Video Placeholder"
          />
          <div className="agency-profile-page__top-button-container">
            <button className="agency-profile-page__my-documents-button">
              My Documents
            </button>
            <button className="agency-profile-page__ratings-button">
              Ratings
            </button>
            <button className="agency-profile-page__partnerships-button">
              Partnerships
            </button>
          </div>
          <div className="agency-profile-page__bottom-button-container">
            <button className="agency-profile-page__refer-an-agency-button">
              Refer an Agency
            </button>
            <button className="agency-profile-page__account-settings-button">
              Account Settings
            </button>
          </div>
          <div className="agency-profile-page__about-container">
            <div className="agency-profile-page__about-inside-container">
              <p className="agency-profile-page__about-company-header">
                About HumanRe
              </p>
              <p className="agency-profile-page__about-company-content">
                HumanRe is a premier agency renowned for its exceptional
                expertise and dedication for excellence. With a team of highly
                skilled professionals, HumanRe delivers innovative solutions
                tailored to meet the unique needs of each client. Whether it's
                marketing, branding, digital strategy, or creative design,
                HumanRe consistently exceeds expectations, driving growth and
                success for businesses of all sizes. Their commitment to
                quality, creativity, and client satisfaction sets them apart as
                leaders in the industry, making HumanRe the go-to choice for
                companies seeking outstanding results.
              </p>
              <div className="agency-profile-page__rating-container">
                <p className="agency-profile-page__rating-header">Rating</p>
                <div className="agency-profile-page__rating-star-container">
                  <img
                    className="agency-profile-page__star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="agency-profile-page__star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="agency-profile-page__star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="agency-profile-page__star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                  <img
                    className="agency-profile-page__star-logo"
                    src={RatingStarLogo}
                    alt="Star Logo"
                  />
                </div>
                <p className="agency-profile-page__rating-number">5</p>
                <p className="agency-profile-page__rating-description-first-line">
                  Unwavering integrity, honesty...
                </p>
                <p className="agency-profile-page__rating-description-second-line">
                  I highly recommend HumanRe for their exceptional recruiting
                  services, deeply rooted in strong morals and values.
                  Throughout my job search, HumanRe...
                </p>
              </div>
              <div className="agency-profile-page__industry-container">
                <p className="agency-profile-page__industry-header">Industry</p>
                <p className="agency-profile-page__healthcare-text">
                  Healthcare
                </p>
              </div>
              <div className="agency-profile-page__partnerships-container">
                <p className="agency-profile-page__partnerships-container-header">
                  Partnerships
                </p>
                <div className="agency-profile-page__partnership-name-container">
                  <p className="agency-profile-page__partnership">
                    ABC Staffing Inc.
                  </p>
                  <p className="agency-profile-page__partnership">
                    Acme Staffing Company
                  </p>
                  <p className="agency-profile-page__partnership">
                    Olympian Staffing
                  </p>
                  <p className="agency-profile-page__partnership">
                    Impact Agency Inc.
                  </p>
                </div>
                <img
                  className="agency-profile-page__full-scroll-bar-partnerships"
                  src={FullScrollbarIcon}
                  alt="Full Scroll Bar"
                />
              </div>
              <div className="agency-profile-page__team-container">
                <p className="agency-profile-page__team-container-header">
                  Team
                </p>
                <div className="agency-profile-page__recruiter-container">
                  <div className="agency-profile-page__recruiter-description-container">
                    <p className="agency-profile-page__recruiter">
                      Chris Frost
                    </p>
                    <p className="agency-profile-page__recruiter-status">
                      Recruiter - Active
                    </p>
                  </div>
                  <img
                    className="agency-profile-page__action-icon"
                    src={ActionIcon}
                    alt="Action"
                  />
                </div>
                <div className="agency-profile-page__recruiter-container">
                  <div className="agency-profile-page__recruiter-description-container">
                    <p className="agency-profile-page__recruiter">
                      Chris Frost
                    </p>
                    <p className="agency-profile-page__recruiter-status">
                      Recruiter - Active
                    </p>
                  </div>
                  <img
                    className="agency-profile-page__action-icon"
                    src={ActionIcon}
                    alt="Action"
                  />
                </div>
                <div className="agency-profile-page__recruiter-container">
                  <div className="agency-profile-page__recruiter-description-container">
                    <p className="agency-profile-page__recruiter">
                      Chris Frost
                    </p>
                    <p className="agency-profile-page__recruiter-status">
                      Recruiter - Active
                    </p>
                  </div>
                  <img
                    className="agency-profile-page__action-icon"
                    src={ActionIcon}
                    alt="Action"
                  />
                </div>
                <img
                  className="agency-profile-page__full-scroll-bar-team"
                  src={FullScrollbarIcon}
                  alt="Full Scroll Bar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
