import React from "react";
import "./ReferAgencyPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import ProfileSidePanel from "../../components/ProfileSidePanel/ProfileSidePanel";
import SubmitReferralIcon from "../../assets/icons/SubmitReferralIcon.svg";
import EnjoyRewardIcon from "../../assets/icons/EnjoyRewardLogo.svg";
import RedAsteriskIcon from "../../assets/icons/mingcute_asterisk-line.svg";
import reCAPTCHAIcon from "../../assets/icons/reCAPTCHA.svg";

export default function ReferAgencyPage() {
  return (
    <div className="refer-agency-page">
      <AccountSettingsHeader />
      <div className="refer-agency-page__main-container">
        <ProfileSidePanel />
        <div className="refer-agency-page__right-container">
          <p className="refer-agency-page__header">Refer an Agency</p>
          <p className="refer-agency-page__agency-referral-program">
            Agency Referral Program
          </p>
          <p className="refer-agency-page__refer-staffing-agency">
            Refer a Staffing Agency & Get One Month on Us!
          </p>
          <p className="refer-agency-page__why-participate-in-referral-program">
            Why Participate in Our Referral Program?
          </p>
          <p className="refer-agency-page__why-participate-description">
            By referring a new agency, you are amplifying your agency's
            potential for collaboration, innovation, and success. Enjoy a month
            of complimentary membership for each successful referral, but more
            importantly, seize the opportunity to shape the future of our
            industry with every new connection made. It's simple:{" "}
            <span className="refer-agency-page__bold">
              more agencies, more opportunities, more growth.
            </span>{" "}
            Join us in building a stronger, more vibrant staffing recruiting
            company.
          </p>
          <div className="refer-agency-page__how-it-works-container">
            <p className="refer-agency-page__how-it-works-header">
              How it works
            </p>
            <p className="refer-agency-page__how-it-works-description">
              Refer staffing or recruiting agencies that you would believe would
              benefit from joining our platform. These could be agencies you've
              worked with before or know through your network.
            </p>
            <div className="refer-agency-page__how-it-works-options-container">
              <div className="refer-agency-page__submit-your-referral-container">
                <img
                  className="refer-agency-page__submit-referral-icon"
                  src={SubmitReferralIcon}
                  alt="Submit Referral"
                />
                <p className="refer-agency-page__submit-your-referral-header">
                  Submit Your Referral
                </p>
                <p className="refer-agency-page__submit-your-referral-description">
                  Fill out the referral form below with details about the agency
                  you are referring and a short note on why you think they are a
                  great fit for MLSA.
                </p>
              </div>
              <div className="refer-agency-page__enjoy-your-reward-container">
                <img
                  className="refer-agency-page__enjoy-reward-logo"
                  src={EnjoyRewardIcon}
                  alt="Enjoy Reward"
                />
                <p className="refer-agency-page__enjoy-your-reward-header">
                  Enjoy Your Reward
                </p>
                <p className="refer-agency-page__enjoy-your-reward-description">
                  Once the referred agency joins and is verified, we will credit
                  your account with one free month of membership. It's our way
                  of saying thank you for helping our community grow stronger
                  and more diverse.
                </p>
              </div>
            </div>
          </div>
          <div className="refer-agency-page__agency-referral-form-container">
            <p className="refer-agency-page__agency-referral-form-header">
              Agency Referral Form
            </p>
            <p className="refer-agency-page__fill-out-instructions">
              Fill out the referral form with details about the agency you're
              referring and a short note on why you think they're a great fit
              for our association.
            </p>
            <label className="refer-agency-page__name-label" htmlFor="name">
              What is the name of the Agency that you would like to refer?{" "}
              <img
                className="refer-agency-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Red Asterisk Icon"
              />
            </label>
            <input
              className="refer-agency-page__name-input"
              type="text"
              id="name"
              placeholder="Enter Agency Name You Would Like to Refer"
            />
            <label
              className="refer-agency-page__website-address-label"
              htmlFor="website-address"
            >
              What is the Agency's website address?
            </label>
            <input
              className="refer-agency-page__website-address-input"
              type="text"
              placeholder="Enter link to the referred Agency Website"
              id="website-address"
            />
            <label
              className="refer-agency-page__industry-label"
              htmlFor="industry"
            >
              What industry is the Agency in?
            </label>
            <input
              className="refer-agency-page__industry-input"
              type="text"
              id="industry"
              placeholder="Select Industry Field of the referred Agency"
            />
            <label
              className="refer-agency-page__email-contact-address-label"
              htmlFor="email-contact-address"
            >
              What is the email contact address for the Agency you would like to
              refer?{" "}
              <img
                className="refer-agency-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Red Asterisk Icon"
              />
            </label>
            <input
              className="refer-agency-page__email-contact-address-input"
              type="text"
              id="email-contact-address"
              placeholder="Enter email contact for referred Agency"
            />
            <label
              className="refer-agency-page__phone-number-label"
              htmlFor="phone-number"
            >
              What is the phone number for the Agency that you would like to
              refer?
            </label>
            <input
              className="refer-agency-page__phone-number-input"
              type="text"
              id="phone-number"
              placeholder="Enter phone number for referred Agency"
            />
            <p className="refer-agency-page__your-information-header">
              Your Information
            </p>
            <label
              className="refer-agency-page__your-name-label"
              htmlFor="your-name"
            >
              Your Name{" "}
              <img
                className="refer-agency-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Red Asterisk Icon"
              />
            </label>
            <input
              className="refer-agency-page__your-name-input"
              type="text"
              id="your-name"
              placeholder="Enter your first and last name"
            />
            <label
              className="refer-agency-page__your-email-label"
              htmlFor="your-email"
            >
              Your Email{" "}
              <img
                className="refer-agency-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Red Asterisk Icon"
              />
            </label>
            <input
              className="refer-agency-page__your-email-input"
              type="text"
              id="your-email"
              placeholder="Example: JohnSmith@Example.com"
            />
            <label
              className="refer-agency-page__your-agency-label"
              htmlFor="your-agency"
            >
              Your Agency{" "}
              <img
                className="refer-agency-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Red Asterisk Icon"
              />
            </label>
            <input
              className="refer-agency-page__your-agency-input"
              type="text"
              id="your-agency"
              placeholder="Enter Your Agency Name"
            />
            <label
              className="refer-agency-page__your-message-label"
              htmlFor="your-message"
            >
              Your Message{" "}
              <img
                className="refer-agency-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Red Asterisk Icon"
              />
            </label>
            <textarea
              className="refer-agency-page__your-message-text-area"
              name="your-message"
              id="your-message"
              placeholder="Write a short note here on why you think they're a great fit for our association."
            ></textarea>
          </div>
          <img className="refer-agency-page__reCAPTCHA-icon" src={reCAPTCHAIcon} alt="reCaptcha Icon" />
          <div className="refer-agency-page__bottom-button-container">
            <button className="refer-agency-page__submit-button">Submit</button>
            <button className="refer-agency-page__cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
