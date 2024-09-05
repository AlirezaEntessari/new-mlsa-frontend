import React from "react";
import "./HeaderWithProfilePic.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import MessagesOffIcon from "../../assets/icons/MessageOff.svg";
import NotificationsOffIcon from "../../assets/icons/NotifOff.svg";
import ProfilePic from '../../assets/icons/profilepicnav.svg';

export default function HeaderWithProfilePic() {
  return (
    <div className="header-with-profile-pic">
      <img
        className="header-with-profile-pic__logo"
        src={MLSALogo}
        alt="Header With Profile Pic"
      />
      <div className="header-with-profile-pic__logo-container">
        <img
          className="header-with-profile-pic__messages-off-icon"
          src={MessagesOffIcon}
          alt="Messages Off"
        />
        <img
          className="header-with-profile-pic__notifications-off-icon"
          src={NotificationsOffIcon}
          alt="Notifications Off"
        />
      </div>
      <img className="header-with-profile-pic__profile-pic" src={ProfilePic} alt="Profile Picture" />
    </div>
  );
}
