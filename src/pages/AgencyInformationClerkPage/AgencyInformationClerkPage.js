import React, { useState } from "react";
import "./AgencyInformationClerkPage.scss";
import MLSALogo from "../../assets/logos/MLSAFullLogoColorSmall.png";
import RedAsteriskIcon from "../../assets/icons/mingcute_asterisk-line.svg";
import CheckboxIcon from "../../assets/icons/CheckBoxEmpty.svg";
import DontShowIcon from "../../assets/icons/ph_eye-light (1).svg";
import RightArrowIcon from "../../assets/icons/right arrow.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CheckBoxWithLogic from "../../components/CheckBoxWithLogic/CheckBoxWithLogic";
import CheckBoxTermsAndConditions from "../../components/CheckBoxTermsAndConditions/CheckBoxTermsAndConditions";
import CheckBoxIcon from "../../assets/icons/CheckBoxEmpty.svg";

export default function AgencyInformationClerkPage() {
  //   const [staffingAgencyName, setStaffingAgencyName] = useState("");
  //   const [staffingAgencyEIN, setStaffingAgencyEIN] = useState("");
  //   const [staffingAgencyWebsite, setStaffingAgencyWebsite] = useState("");
  //   const [selectedIndustries, setSelectedIndustries] = useState([]);
  //   const [fullName, setFullName] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  //   const [errorMessage, setErrorMessage] = useState(""); // State for error message
  //   const [isChecked, setIsChecked] = useState(false);
  //   const navigate = useNavigate();

  //   const handleAgencyNameChange = (e) => {
  //     setStaffingAgencyName(e.target.value);
  //   };

  //   const handleStaffingAgencyEINChange = (e) => {
  //     setStaffingAgencyEIN(e.target.value);
  //   };

  //   const handleStaffingAgencyWebsiteChange = (e) => {
  //     setStaffingAgencyWebsite(e.target.value);
  //   };

  //   const handleFullNameChange = (e) => {
  //     setFullName(e.target.value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   const handleConfirmPasswordChange = (e) => {
  //     setConfirmPassword(e.target.value);
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     // Check if passwords match
  //     if (password !== confirmPassword) {
  //       alert("Passwords do not match");
  //       return; // Prevent form submission if passwords don't match
  //     }

  //     // Check if terms and conditions are agreed upon
  //     if (!isChecked) {
  //       alert("You must agree to the terms and conditions");
  //       return; // Prevent form submission if terms and conditions are not agreed
  //     }

  //     // Retrieve email and membership plan from local storage
  //     const email = localStorage.getItem("email");
  //     const membershipPlan = localStorage.getItem("membershipPlan");

  //     // Ensure both email and membership plan are retrieved correctly
  //     if (!email || !membershipPlan) {
  //       console.error("Email or membership plan is missing from local storage");
  //       return;
  //     }

  //     const requestData = {
  //       email: email, // Include email
  //       membershipPlan: membershipPlan, // Include membership plan
  //       staffingAgencyName,
  //       staffingAgencyEIN,
  //       staffingAgencyWebsite,
  //       industryField: selectedIndustries.join(", "),
  //       fullNameAdmin: fullName,
  //       password,
  //     };

  //     try {
  //       await axios.post(
  //         "http://localhost:5001/api/agency_information",
  //         requestData
  //       );
  //       navigate("/membership-subscription-page");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve email and membership plan from local storage
    const email = localStorage.getItem("email");
    const membershipPlan = localStorage.getItem("membershipPlan");

    // Ensure both email and membership plan are retrieved correctly
    if (!email || !membershipPlan) {
      alert("Email or membership plan is missing.");
      return;
    }

    try {
      // Send request to backend to create Stripe Checkout session
      const response = await axios.post(
        "http://localhost:5001/api/create-checkout-session",
        { email, membershipPlan }
      );

      if (response.status === 200 && response.data.url) {
        // Redirect to Stripe payment page
        window.location.href = response.data.url;
      } else {
        alert("Failed to create payment session.");
      }
    } catch (err) {
      console.error("Error creating Stripe session:", err);
      alert("Error processing payment. Please try again.");
    }
  };

  return (
    <div className="agency-information-clerk-page">
      <img
        className="agency-information-clerk-page__mlsa-logo"
        src={MLSALogo}
        alt="MLSA Logo"
      />
      <p className="agency-information-clerk-page__header">
        Agency Information
      </p>
      <p className="agency-information-clerk-page__instructions">
        Complete the form below to create your account.
      </p>
      <form>
        <div className="agency-information-clerk-page__main-container">
          <div className="agency-information-clerk-page__left-container">
            <div className="agency-information-clerk-page__input-container">
              <label
                className="agency-information-clerk-page__staffing-agency-name-label"
                htmlFor="staffing-agency-name"
              >
                Staffing Agency Name{" "}
                <img
                  className="agency-information-clerk-page__red-asterisk-icon"
                  src={RedAsteriskIcon}
                  alt="Required"
                />
              </label>
              <input
                className="agency-information-clerk-page__staffing-agency-name-input"
                id="staffing-agency-name"
                type="text"
                placeholder="Enter your staffing agency name"
                // value={staffingAgencyName}
                // onChange={handleAgencyNameChange}
              />
              <label
                className="agency-information-clerk-page__staffing-agency-ein-label"
                htmlFor="staffing-agency-ein"
              >
                Staffing Agency EIN{" "}
                <img
                  className="agency-information-clerk-page__red-asterisk-icon"
                  src={RedAsteriskIcon}
                  alt="Required"
                />
              </label>
              <input
                className="agency-information-clerk-page__staffing-agency-ein-input"
                id="staffing-agency-ein"
                type="text"
                placeholder="Enter link of your staffing agency website"
                // value={staffingAgencyEIN}
                // onChange={handleStaffingAgencyEINChange}
              />
              <label
                className="agency-information-clerk-page__staffing-agency-website-label"
                htmlFor="staffing-agency-website"
              >
                Staffing Agency Website{" "}
                <img
                  className="agency-information-clerk-page__red-asterisk-icon"
                  src={RedAsteriskIcon}
                  alt="Required"
                />
              </label>
              <input
                className="agency-information-clerk-page__staffing-agency-website-input"
                id="staffing-agency-website"
                type="text"
                placeholder="Enter link of your staffing agency website"
                // value={staffingAgencyWebsite}
                // onChange={handleStaffingAgencyWebsiteChange}
              />
            </div>
            <label
              className="agency-information-clerk-page__industry-field-label"
              htmlFor="industry-field"
            >
              Industry Field{" "}
              <img
                className="agency-information-clerk-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Required"
              />
            </label>
            <p className="agency-information-clerk-page__industry-field-description">
              Select all of your industries by checking boxes below. If your
              industry is not listed, or if you are not sure what industry to
              select, select "Other".
            </p>
            <div className="agency-information-clerk-page__checkbox-container-1">
              <CheckBoxWithLogic
                labelText="Aerospace and Defense"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__hospitality-and-leisure-container">
                <CheckBoxWithLogic
                  labelText="Hospitality & Leisure"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-2">
              <CheckBoxWithLogic
                labelText="Agricultural"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__insurance-container">
                <CheckBoxWithLogic
                  labelText="Insurance"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-3">
              <CheckBoxWithLogic
                labelText="Computers and Technology"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__landscaping-container">
                <CheckBoxWithLogic
                  labelText="Landscaping"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-4">
              <CheckBoxWithLogic
                labelText="Construction"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__manufacturing-container">
                <CheckBoxWithLogic
                  labelText="Manufacturing"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-5">
              <CheckBoxWithLogic
                labelText="Consumer Goods"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__oil-and-gas-container">
                <CheckBoxWithLogic
                  labelText="Oil & Gas"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-6">
              <CheckBoxWithLogic
                labelText="Education"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__pharmaceuticals-container">
                <CheckBoxWithLogic
                  labelText="Pharmaceuticals"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-7">
              <CheckBoxWithLogic
                labelText="Engineering"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__power-and-utilities-container">
                <CheckBoxWithLogic
                  labelText="Power and Utilities"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-8">
              <CheckBoxWithLogic
                labelText="Financial"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__professional-services-consulting-container">
                <CheckBoxWithLogic
                  labelText="Professional Services/Consulting"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-9">
              <CheckBoxWithLogic
                labelText="Government"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__telecommunications-container">
                <CheckBoxWithLogic
                  labelText="Telecommunications"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
            <div className="agency-information-clerk-page__checkbox-container-10">
              <CheckBoxWithLogic
                labelText="Healthcare"
                // selectedIndustries={selectedIndustries}
                // setSelectedIndustries={setSelectedIndustries}
              />
              <div className="agency-information-clerk-page__other-container">
                <CheckBoxWithLogic
                  labelText="Other"
                  //   selectedIndustries={selectedIndustries}
                  //   setSelectedIndustries={setSelectedIndustries}
                />
              </div>
            </div>
          </div>
          <div className="agency-information-clerk-page__right-container">
            <label
              className="agency-information-clerk-page__full-name-admin-label"
              htmlFor="full-name-admin"
            >
              Full Name (Admin){" "}
              <img
                className="agency-information-clerk-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Required"
              />
            </label>
            <input
              className="agency-information-clerk-page__full-name-admin-input"
              type="text"
              placeholder="Enter your first and last name"
              //   value={fullName}
              //   onChange={handleFullNameChange}
            />
            <p className="agency-information-clerk-page__rules-line-1">
              Please follow these rules for creating a password.
            </p>
            <p className="agency-information-clerk-page__rules-line-2">
              <span className="agency-information-clerk-page__bold">
                1. Length:{" "}
              </span>{" "}
              At least 8 characters. More is better.
            </p>
            <p className="agency-information-clerk-page__rules-line-3">
              <span className="agency-information-clerk-page__bold">
                2. Variety:{" "}
              </span>{" "}
              At least one of the following:
            </p>
            <p className="agency-information-clerk-page__rules-line-4">
              Uppercase letter
            </p>
            <p className="agency-information-clerk-page__rules-line-5">
              Lowercase letter
            </p>
            <p className="agency-information-clerk-page__rules-line-6">
              Number
            </p>
            <p className="agency-information-clerk-page__rules-line-7">
              Symbol
            </p>
            <p className="agency-information-clerk-page__rules-line-8">
              <span className="agency-information-clerk-page__bold">
                1. No personal info:{" "}
              </span>
              Avoid names, birthdays or common words.
            </p>
            <p className="agency-information-clerk-page__rules-line-9">
              <span className="agency-information-clerk-page__bold">
                2. Avoid obvious patterns:{" "}
              </span>
              No sequential or repeated characters (e.g. 1234)
            </p>
            <p className="agency-information-clerk-page__rules-line-10">
              <span className="agency-information-clerk-page__bold">
                3. Be Unique:
              </span>{" "}
              Don't reuse old passwords.
            </p>
            <p className="agency-information-clerk-page__rules-line-11">
              <span className="agency-information-clerk-page__bold">
                4. Regular Updates:{" "}
              </span>
              Change your password periodically.
            </p>
            <p className="agency-information-clerk-page__rules-line-12">
              *Tip: A combination of unrelated words can be both strong and
              memorable.
            </p>
            {/* <label
              className="agency-information-clerk-page__password-label"
              htmlFor="password"
            >
              Password{" "}
              <img
                className="agency-information-clerk-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Required"
              />
            </label>
            <img
              className="agency-information-clerk-page__dont-show-icon-password"
              src={DontShowIcon}
              alt="Hidden"
            />
            <input
              className="agency-information-clerk-page__password-input"
              type="password"
              id="password"
              placeholder="Enter your password"
            //   value={password}
            //   onChange={handlePasswordChange}
            />
            <label
              className="agency-information-clerk-page__confirm-password-label"
              htmlFor="confirm-password"
            >
              Confirm Password{" "}
              <img
                className="agency-information-clerk-page__red-asterisk-icon"
                src={RedAsteriskIcon}
                alt="Required"
              />
            </label>
            <img
              className="agency-information-clerk-page__dont-show-icon-confirm-password"
              src={DontShowIcon}
              alt="Hidden"
            />
            <input
              className="agency-information-clerk-page__confirm-password-input"
              type="password"
              placeholder="Enter your password again"
              id="confirm-password"
            //   value={confirmPassword}
            //   onChange={handleConfirmPasswordChange}
            /> */}
            {/* {errorMessage && (
              <p className="agency-information-clerk-page__error-message">
                {errorMessage}
              </p>
            )} */}
            <div className="agency-information-clerk-page__agree-terms-and-conditions-container">
              {/* <CheckBoxTermsAndConditions
                // isChecked={isChecked}
                // setIsChecked={setIsChecked}
              /> */}
              <img
                className="agency-information-clerk-page__checkbox-icon"
                src={CheckBoxIcon}
                alt="Checkbox"
              />
              <span className="agency-information-clerk-page__agree-to-terms-and-conditions">
                I agree to the terms and conditions
              </span>
            </div>
            <p className="agency-information-clerk-page__view-agreement">
              View Agreement
            </p>
          </div>
        </div>
        <button
          className="agency-information-clerk-page__next-button"
          onClick={handleSubmit}
        >
          Next{" "}
          <img
            className="agency-information-clerk-page__right-arrow-icon"
            src={RightArrowIcon}
            alt="Right Arrow"
          />
        </button>
      </form>
      <p className="agency-information-clerk-page__terms-of-use">
        By continuing, you agree to MLSA's{" "}
        <span className="agency-information-clerk-page__terms-of-use-text">
          Terms of Use
        </span>{" "}
        and confirm that you have read the{" "}
        <span className="agency-information-clerk-page__privacy-policy">
          Privacy Policy
        </span>
      </p>
    </div>
  );
}
