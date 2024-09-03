import React from "react";
import "./ReferAgencyPage.scss";
import AccountSettingsHeader from "../../components/AccountSettingsHeader/AccountSettingsHeader";
import ProfileSidePanel from "../../components/ProfileSidePanel/ProfileSidePanel";
import SubmitReferralIcon from "../../assets/icons/SubmitReferralIcon.svg";
import EnjoyRewardIcon from "../../assets/icons/EnjoyRewardLogo.svg";

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
                <img className="refer-agency-page__enjoy-reward-logo" src={EnjoyRewardIcon} alt="Enjoy Reward" />
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
        </div>
      </div>
    </div>
  );
}
