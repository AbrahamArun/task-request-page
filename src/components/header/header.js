import React from "react";
import airbaseLogo from "../../assets/icons/airbase-logo.png";
import securityLogo from "../../assets/icons/security-logo.png";
import "./styles.css";

export default function Header() {
  const securityMessage =
    "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.";
  return (
    <div className="header spacing">
      <img src={airbaseLogo} alt="airbase" height="24" width="96" />
      <hr className="security-logo-separator" />

      <div className="logo-container">
        <div className="logo-header">
          <img src={securityLogo} alt="lock" height="12" width="9" />
          <span className="security-header">Security Message</span>
        </div>
        <div className="security-message">
          <span className="opaque-text">{securityMessage}</span>
        </div>
      </div>
    </div>
  );
}
