import React from 'react'
import './AccountSettingsHeader.scss';
import MLSALogo from '../../assets/logos/MLSAFullLogoColorSmall.png';

export default function AccountSettingsHeader() {
  return (
    <div className='account-settings-header'>
        <img className='account-settings-header__logo' src={MLSALogo} alt="Account Settings Header" />
      
    </div>
  )
}
