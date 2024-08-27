import React from 'react'
import './PersonalProfilePage.scss';
import AccountSettingsHeader from '../../components/AccountSettingsHeader/AccountSettingsHeader';
import ProfileSidePanel from '../../components/ProfileSidePanel/ProfileSidePanel';
import ProfilePic from "../../assets/icons/profilepicnav.svg";

export default function PersonalProfilePage() {
  return (
    <div className='personal-profile-page'>
      <AccountSettingsHeader />
      <div className="personal-profile-page__main-container">
        <ProfileSidePanel />
        <div className="personal-profile-page__right-container">
          <img className='personal-profile-page__profile-pic' src={ProfilePic} alt="Profile Pic" />

        </div>
      </div>
    </div>
  )
}
