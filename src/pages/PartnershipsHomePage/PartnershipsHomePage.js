import React from 'react'
import './PartnershipsHomePage.scss';
import HeaderWithProfilePic from '../../components/HeaderWithProfilePic/HeaderWithProfilePic';
import PartnershipsSidePanel from "../../components/PartnershipsSidePanel/PartnershipsSidePanel";

export default function PartnershipsHomePage() {
  return (
    <div className='partnerships-home-page'>
        <HeaderWithProfilePic />
        <div className="partnerships-home-page__main-container">
            <PartnershipsSidePanel />
            <div className="partnerships-home-page__right-container">
                <div className="partnerships-home-page__mobile-container">
                    <p className='partnerships-home-page__mobile-header'>Partnerships</p>
                </div>
            </div>
        </div>
    </div>
  )
}
