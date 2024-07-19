import React from "react";
import "./AgencyInformationPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import RedAsteriskIcon from "../../assets/icons/mingcute_asterisk-line.svg";
import CheckboxIcon from "../../assets/icons/CheckBoxEmpty.svg";

export default function AgencyInformationPage() {
  return (
    <div className="agency-information-page">
      <img
        className="agency-information-page__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <p className="agency-information-page__header">Agency Information</p>
      <p className="agency-information-page__instructions">
        Complete the form below to create your account.
      </p>
      <div className="agency-information-page__input-container">
        <label
          className="agency-information-page__staffing-agency-name-label"
          htmlFor="staffing-agency-name"
        >
          Staffing Agency Name{" "}
          <img
            className="agency-information-page__red-asterisk-icon"
            src={RedAsteriskIcon}
            alt="Required"
          />
        </label>
        <input
          className="agency-information-page__staffing-agency-name-input"
          id="staffing-agency-name"
          type="text"
          placeholder="Enter your staffing agency name"
        />
        <label
          className="agency-information-page__staffing-agency-ein-label"
          htmlFor="staffing-agency-ein"
        >
          Staffing Agency EIN{" "}
          <img
            className="agency-information-page__red-asterisk-icon"
            src={RedAsteriskIcon}
            alt="Required"
          />
        </label>
        <input
          className="agency-information-page__staffing-agency-ein-input"
          id="staffing-agency-ein"
          type="text"
          placeholder="Enter link of your staffing agency website"
        />
        <label
          className="agency-information-page__staffing-agency-website-label"
          htmlFor="staffing-agency-website"
        >
          Staffing Agency Website{" "}
          <img
            className="agency-information-page__red-asterisk-icon"
            src={RedAsteriskIcon}
            alt="Required"
          />
        </label>
        <input
          className="agency-information-page__staffing-agency-website-input"
          id="staffing-agency-website"
          type="text"
          placeholder="Enter link of your staffing agency website"
        />
      </div>
      <label
        className="agency-information-page__industry-field-label"
        htmlFor="industry-field"
      >
        Industry Field{" "}
        <img
          className="agency-information-page__red-asterisk-icon"
          src={RedAsteriskIcon}
          alt="Required"
        />
      </label>
      <p className="agency-information-page__industry-field-description">
        Select all of your industries by checking boxes below. If your industry
        is not listed, or if you are not sure what industry to select, select
        "Other".
      </p>
      <div className="agency-information-page__checkbox-container-1">
        <p className="agency-information-page__aerospace-and-defense">
          <img
            className="agency-information-page__aerospace-and-defense-check-box-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Aerospace & Defense
          </span>
        </p>
        <p className="agency-information-page__insurance">
          <img
            className="agency-information-page__insurance-check-box-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Insurance
          </span>
        </p>
      </div>
      <div className="agency-information-page__checkbox-container-2">
        <p className="agency-information-page__agricultural">
          <img
            className="agency-information-page__agricultural-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Agricultural
          </span>
        </p>
        <p className="agency-information-page__manufacturing">
          <img
            className="agency-information-page__manufacturing-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Manufacturing
          </span>
        </p>
      </div>
      <div className="agency-information-page__checkbox-container-3">
        <p className="agency-information-page__computers-and-technology">
          <img
            className="agency-information-page__computers-and-technology-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Computers & Technology
          </span>
        </p>
        <p className="agency-information-page__consumer-goods">
          <img
            className="agency-information-page__oil-and-gas-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Oil & Gas
          </span>
        </p>
      </div>
      <div className="agency-information-page__checkbox-container-4">
        <p className="agency-information-page__consumer-goods">
          <img
            className="agency-information-page__consumer-goods-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Consumer Goods
          </span>
        </p>
        <p className="agency-information-page__pharmaceuticals">
          <img
            className="agency-information-page__pharmaceuticals-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Pharmaceuticals
          </span>
        </p>
      </div>
      <div className="agency-information-page__checkbox-container-5">
        <p className="agency-information-page__education">
          <img
            className="agency-information-page__education-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Education
          </span>
        </p>
        <p className="agency-information-page__power-and-utilities">
          <img
            className="agency-information-page__power-and-utilities-checkbox-icon"
            src={CheckboxIcon}
            alt="Check Box"
          />
          <span className="agency-information-page__industry-field-text">
            Power & Utilities
          </span>
        </p>
      </div>
    </div>
  );
}
