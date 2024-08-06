import React from 'react'
import './AccountSettingsProfilePage.scss';
import AccountSettingsHeader from '../../components/AccountSettingsHeader/AccountSettingsHeader';

export default function AccountSettingsProfilePage() {
  return (
    <div className='account-settings-profile'>
      <AccountSettingsHeader />
      <div className="account-settings-profile__main-container">
        <div className="account-settings-profile__side-panel">
          <p className='account-settings-profile__account-option'>Account</p>
          <p className='account-settings-profile__dashboard-home'>Dashboard Home</p>
          <p className='account-settings-profile__search-jobs'>Search Jobs</p>
          <p className='account-settings-profile__search-candidates'>Search Candidates</p>
          <p className='account-settings-profile__search-agents'>Search Agents</p>
        </div>

      </div>
    </div>
  )
}
