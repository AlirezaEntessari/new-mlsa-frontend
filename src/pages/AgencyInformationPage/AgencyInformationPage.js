import React from "react";
import "./AgencyInformationPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import RedAsteriskIcon from "../../assets/icons/mingcute_asterisk-line.svg";
import CheckboxIcon from "../../assets/icons/CheckBoxEmpty.svg";
import DontShowIcon from "../../assets/icons/ph_eye-light (1).svg";
import RightArrowIcon from "../../assets/icons/right arrow.svg";

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
      <div className="agency-information-page__main-container">
        <div className="agency-information-page__left-container">
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
            Select all of your industries by checking boxes below. If your
            industry is not listed, or if you are not sure what industry to
            select, select "Other".
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
            <p className="agency-information-page__hospitality-and-leisure">
              <img
                className="agency-information-page__hospitality-and-leisure-check-box-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Hospitality & Leisure
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
            <p className="agency-information-page__insurance">
              <img
                className="agency-information-page__insurance-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Insurance
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
            <p className="agency-information-page__landscaping">
              <img
                className="agency-information-page__landscaping-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Landscaping
              </span>
            </p>
          </div>
          <div className="agency-information-page__checkbox-container-4">
            <p className="agency-information-page__construction">
              <img
                className="agency-information-page__construction-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Construction
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
          <div className="agency-information-page__checkbox-container-5">
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
            <p className="agency-information-page__oil-and-gas">
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
          <div className="agency-information-page__checkbox-container-6">
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
          <div className="agency-information-page__checkbox-container-7">
            <p className="agency-information-page__engineering">
              <img
                className="agency-information-page__engineering-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Engineering
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
          <div className="agency-information-page__checkbox-container-8">
            <p className="agency-information-page__financial">
              <img
                className="agency-information-page__financial-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Financial
              </span>
            </p>
            <p className="agency-information-page__professional-services-consulting">
              <img
                className="agency-information-page__professional-services-consulting-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Professional Services/Consulting
              </span>
            </p>
          </div>
          <div className="agency-information-page__checkbox-container-9">
            <p className="agency-information-page__government">
              <img
                className="agency-information-page__government-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Government
              </span>
            </p>
            <p className="agency-information-page__telecommunications">
              <img
                className="agency-information-page__telecommunications-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Telecommunications
              </span>
            </p>
          </div>
          <div className="agency-information-page__checkbox-container-10">
            <p className="agency-information-page__healthcare">
              <img
                className="agency-information-page__healthcare-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Healthcare
              </span>
            </p>
            <p className="agency-information-page__other">
              <img
                className="agency-information-page__other-checkbox-icon"
                src={CheckboxIcon}
                alt="Check Box"
              />
              <span className="agency-information-page__industry-field-text">
                Other
              </span>
            </p>
          </div>
        </div>
        <div className="agency-information-page__right-container">
          <label
            className="agency-information-page__full-name-admin-label"
            htmlFor="full-name-admin"
          >
            Full Name (Admin){" "}
            <img
              className="agency-information-page__red-asterisk-icon"
              src={RedAsteriskIcon}
              alt="Required"
            />
          </label>
          <input
            className="agency-information-page__full-name-admin-input"
            type="text"
            placeholder="Enter your first and last name"
          />
          <p className="agency-information-page__rules-line-1">
            Please follow these rules for creating a password.
          </p>
          <p className="agency-information-page__rules-line-2">
            <span className="agency-information-page__bold">1. Length: </span>{" "}
            At least 8 characters. More is better.
          </p>
          <p className="agency-information-page__rules-line-3">
            <span className="agency-information-page__bold">2. Variety: </span>{" "}
            At least one of the following:
          </p>
          <p className="agency-information-page__rules-line-4">
            Uppercase letter
          </p>
          <p className="agency-information-page__rules-line-5">
            Lowercase letter
          </p>
          <p className="agency-information-page__rules-line-6">Number</p>
          <p className="agency-information-page__rules-line-7">Symbol</p>
          <p className="agency-information-page__rules-line-8">
            <span className="agency-information-page__bold">
              1. No personal info:{" "}
            </span>
            Avoid names, birthdays or common words.
          </p>
          <p className="agency-information-page__rules-line-9">
            <span className="agency-information-page__bold">
              2. Avoid obvious patterns:{" "}
            </span>
            No sequential or repeated characters (e.g. 1234)
          </p>
          <p className="agency-information-page__rules-line-10">
            <span className="agency-information-page__bold">3. Be Unique:</span>{" "}
            Don't reuse old passwords.
          </p>
          <p className="agency-information-page__rules-line-11">
            <span className="agency-information-page__bold">
              4. Regular Updates:{" "}
            </span>
            Change your password periodically.
          </p>
          <p className="agency-information-page__rules-line-12">
            *Tip: A combination of unrelated words can be both strong and
            memorable.
          </p>
          <label
            className="agency-information-page__password-label"
            htmlFor="password"
          >
            Password{" "}
            <img
              className="agency-information-page__red-asterisk-icon"
              src={RedAsteriskIcon}
              alt="Required"
            />
          </label>
          <img
            className="agency-information-page__dont-show-icon-password"
            src={DontShowIcon}
            alt="Hidden"
          />
          <input
            className="agency-information-page__password-input"
            type="text"
            id="password"
            placeholder="Enter your password"
          />
          <label
            className="agency-information-page__confirm-password-label"
            htmlFor="confirm-password"
          >
            Confirm Password{" "}
            <img
              className="agency-information-page__red-asterisk-icon"
              src={RedAsteriskIcon}
              alt="Required"
            />
          </label>
          <img
            className="agency-information-page__dont-show-icon-confirm-password"
            src={DontShowIcon}
            alt="Hidden"
          />
          <input
            className="agency-information-page__confirm-password-input"
            type="text"
            placeholder="Enter your password again"
          />
          <p className="agency-information-page__terms-and-conditions">
            <img
              className="agency-information-page__terms-and-conditions-checkbox"
              src={CheckboxIcon}
              alt="Required"
            />{" "}
            <span className="agency-information-page__terms-and-conditions-text">
              I agree to the terms and conditions
            </span>
          </p>
          <p className="agency-information-page__view-agreement">
            View Agreement
          </p>
        </div>
      </div>
      <button className="agency-information-page__next-button">
        Next{" "}
        <img
          className="agency-information-page__right-arrow-icon"
          src={RightArrowIcon}
          alt="Right Arrow"
        />
      </button>
      <p className="agency-information-page__terms-of-use">
        By continuing, you agree to MLSA's{" "}
        <span className="agency-information-page__terms-of-use-text">
          Terms of Use
        </span>{" "}
        and confirm that you have read the{" "}
        <span className="agency-information-page__privacy-policy">
          Privacy Policy
        </span>
      </p>
    </div>
  );
}
