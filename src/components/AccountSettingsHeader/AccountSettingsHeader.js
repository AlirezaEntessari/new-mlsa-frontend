import React from "react";
import "./AccountSettingsHeader.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import MessagesOffIcon from "../../assets/icons/MessageOff.svg";
import NotificationsOffIcon from "../../assets/icons/NotifOff.svg";
import ProfilePic from '../../assets/icons/profilepicnav.svg';

export default function AccountSettingsHeader() {
  return (
    <div className="account-settings-header">
      <img
        className="account-settings-header__logo"
        src={MLSALogo}
        alt="Account Settings Header"
      />
      <div className="account-settings-header__logo-container">
        <img
          className="account-settings-header__messages-off-icon"
          src={MessagesOffIcon}
          alt="Messages On"
        />
        <img
          className="account-settings-header__notifications-off-icon"
          src={NotificationsOffIcon}
          alt="Notifications On"
        />
      </div>
      <img src={ProfilePic} alt="Profile Picture" />
    </div>
  );
}
