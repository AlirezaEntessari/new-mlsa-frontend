import React from "react";
import "./AccountSettingsHeader.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import MessagesOffIcon from "../../assets/icons/MessageOff.svg";
import NotificationsOffIcon from "../../assets/icons/NotifOff.svg";
import ProfilePic from "../../assets/icons/profilepicnav.svg";
import { Link } from "react-router-dom";

export default function AccountSettingsHeader() {
  return (
    <div className="account-settings-header">
      <Link className="account-settings-header__link" to="/">
        <img
          className="account-settings-header__logo"
          src={MLSALogo}
          alt="Account Settings Header"
        />
      </Link>
      <div className="account-settings-header__logo-container">
        <img
          className="account-settings-header__messages-off-icon"
          src={MessagesOffIcon}
          alt="Messages Off"
        />
        <img
          className="account-settings-header__notifications-off-icon"
          src={NotificationsOffIcon}
          alt="Notifications Off"
        />
      </div>
      {/* <img className="account-settings-header__profile-pic" src={ProfilePic} alt="Profile Picture" /> */}
    </div>
  );
}
