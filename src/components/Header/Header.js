import React from 'react'
import './Header.scss';
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";

export default function Header() {
  return (
    <div className='header'>
        <img className='header__mlsa-logo' src={MLSALogo} alt="MLSA Logo" /> 
    </div>
  )
}
