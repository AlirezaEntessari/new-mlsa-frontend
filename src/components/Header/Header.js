import React from "react";
import "./Header.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="header__link">
        <img className="header__mlsa-logo" src={MLSALogo} alt="MLSA Logo" />
      </Link>
    </div>
  );
}
