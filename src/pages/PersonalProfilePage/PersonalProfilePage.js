import React, { useState } from "react";
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
import AgencyVidPlaceholder from "../../assets/icons/AgencyVidPlaceholder.svg";
import ActionIcon from "../../assets/icons/3verticaldots.svg";
import FullScrollbarIcon from "../../assets/icons/scrollbarfull.svg";

export default function PersonalProfilePage() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="personal-profile-page">
      <AccountSettingsHeader />
      <div className="personal-profile-page__main-container">
        <ProfileSidePanel />
        <div className="personal-profile-page__right-container">
          <div className="personal-profile-page__mobile-top-container">
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
          </div>
          <div className="personal-profile-page__tablet-top-container">
            <div className="personal-profile-page__tablet-profile-pic-container">
              <img
                className="personal-profile-page__tablet-profile-pic-icon"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <p className="personal-profile-page__tablet-profile-name-text">
                John Smith
              </p>
              <p className="personal-profile-page__tablet-profile-name-email">
                jsmith@humanre.com
              </p>
              <p className="personal-profile-page__tablet-profile-phone-number">
                561-123-4567
              </p>
            </div>
            <div className="personal-profile-page__tablet-social-media-container">
              <img
                className="personal-profile-page__tablet-facebook-icon"
                src={FacebookIcon}
                alt="Facebook Icon"
              />
              <img
                className="personal-profile-page__tablet-instagram-icon"
                src={InstagramIcon}
                alt="Instagram Icon"
              />
              <img
                className="personal-profile-page__tablet-youtube-icon"
                src={YouTubeIcon}
                alt="YouTube Icon"
              />
            </div>
            <div className="personal-profile-page__tablet-edit-profile-container">
              <span className="personal-profile-page__tablet-edit-profile-text">
                Edit Profile
              </span>
              <img
                className="personal-profile-page__tablet-edit-pencil-icon"
                src={EditPencilIcon}
                alt="Edit Pencil"
              />
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
            <button className="personal-profile-page__my-documents-button">
              My Documents
            </button>
            <button className="personal-profile-page__ratings-button">
              Ratings
            </button>
            <button className="personal-profile-page__partnerships-button">
              Partnerships
            </button>
          </div>
          <div className="personal-profile-page__bottom-button-container">
            <button className="personal-profile-page__refer-an-agency-button">
              Refer an Agency
            </button>
            <button className="personal-profile-page__account-settings-button">
              Account Settings
            </button>
          </div>
          <div className="personal-profile-page__tablet-button-container">
            <button className="personal-profile-page__tablet-my-documents-button">
              My Documents
            </button>
            <button className="personal-profile-page__tablet-ratings-button">
              Ratings
            </button>
            <button className="personal-profile-page__tablet-partnerships-button">
              Partnerships
            </button>
            <button className="personal-profile-page__tablet-refer-an-agency-button">
              Refer an Agency
            </button>
            <button className="personal-profile-page__tablet-account-settings-button">
              Account Settings
            </button>
          </div>
          <div className="personal-profile-page__about-container">
            <div
              className={`personal-profile-page__about-inside-container-1 ${
                activeSection === "about1" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("about1")}
            >
              <p className="personal-profile-page__about-inside-container-1-header">
                About John Smith
              </p>
              <p className="personal-profile-page__about-inside-container-1-content">
                John Smith is a seasoned recruiter with over a decade of
                experience in connecting top talent with leading companies
                across various industries. With a keen eye for identifying
                potential and a passion for helping individuals achieve their
                career goals, John has successfully placed hundreds of
                candidates in roles that align with their skills and
                aspirations. His comprehensive understanding of the job market,
                combined with his exceptional interpersonal skills, allows him
                to build lasting relationships with both clients and candidates.
                John's dedication to excellence and his unwavering commitment to
                finding the perfect fit make him an invaluable asset to any
                recruitment team.
              </p>
            </div>
            <div
              className={`personal-profile-page__about-inside-container-2 ${
                activeSection === "about2" ? "active" : ""
              }`}
              onClick={() => handleSectionClick("about2")}
            >
              <p className="personal-profile-page__about-inside-container-2-header">
                About HumanRe
              </p>
              <p className="personal-profile-page__about-inside-container-2-content">
                HumanRe is a premier agency renowned for its exceptional
                expertise and dedication to excellence. With a team of highly
                skilled professionals, HumanRe delivers innovative solutions
                tailored to meet the unique needs of each client. Whether it's
                marketing, branding, digital strategy, or creative design,
                HumanRe consistently exceeds expectations, driving growth and
                success for businesses of all sizes. Their commitment to
                quality, creativity, and client satisfaction sets them apart as
                leaders in the industry, making HumanRe the go-to choice for
                companies seeking outstanding results.
              </p>
            </div>
            <div className="personal-profile-page__agency-video-container">
              <img
                className="personal-profile-page__agency-video-placeholder-icon"
                src={AgencyVidPlaceholder}
                alt="Agency Video Placeholder"
              />
              <p className="personal-profile-page__agency-video-intro">
                Agency Video Intro
              </p>
            </div>
            <div className="personal-profile-page__partnerships-container">
              <p className="personal-profile-page__partnerships-container-header">
                Partnerships
              </p>
              <div className="personal-profile-page__partnership-name-container">
                <p className="personal-profile-page__partnership">
                  ABC Staffing Inc.
                </p>
                <p className="personal-profile-page__partnership">
                  Acme Staffing Company
                </p>
                <p className="personal-profile-page__partnership">
                  Olympian Staffing
                </p>
                <p className="personal-profile-page__partnership">
                  Impact Agency Inc.
                </p>
              </div>
              <img
                className="personal-profile-page__full-scroll-bar-partnerships"
                src={FullScrollbarIcon}
                alt="Full Scroll Bar"
              />
            </div>
            <div className="personal-profile-page__team-container">
              <p className="personal-profile-page__team-container-header">
                Team
              </p>
              <div className="personal-profile-page__recruiter-container">
                <div className="personal-profile-page__recruiter-description-container">
                  <p className="personal-profile-page__recruiter">
                    Chris Frost
                  </p>
                  <p className="personal-profile-page__recruiter-status">
                    Recruiter - Active
                  </p>
                </div>
                <img
                  className="personal-profile-page__action-icon"
                  src={ActionIcon}
                  alt="Action"
                />
              </div>
              <div className="personal-profile-page__recruiter-container">
                <div className="personal-profile-page__recruiter-description-container">
                  <p className="personal-profile-page__recruiter">
                    Chris Frost
                  </p>
                  <p className="personal-profile-page__recruiter-status">
                    Recruiter - Active
                  </p>
                </div>
                <img
                  className="personal-profile-page__action-icon"
                  src={ActionIcon}
                  alt="Action"
                />
              </div>
              <div className="personal-profile-page__recruiter-container">
                <div className="personal-profile-page__recruiter-description-container">
                  <p className="personal-profile-page__recruiter">
                    Chris Frost
                  </p>
                  <p className="personal-profile-page__recruiter-status">
                    Recruiter - Active
                  </p>
                </div>
                <img
                  className="personal-profile-page__action-icon"
                  src={ActionIcon}
                  alt="Action"
                />
              </div>
              <img
                className="personal-profile-page__full-scroll-bar-team"
                src={FullScrollbarIcon}
                alt="Full Scroll Bar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
