import React from "react";
import "./styles.css";

export default function ExpenseSummary(props) {
  const cost = props.cost / 100;
  const annualCost = cost * 12;
  const name = `${props.userInfo.first_name} ${props.userInfo.last_name}`;
  return (
    <div className="exp-container">
      <div className="exp-row">
        <div className="left-cell padding opaque-text">Requested by</div>
        <div className="right-cell padding regular-text">
          <div className="padding">
            <img
              src={props.userInfo.profile_picture}
              width={24}
              height={24}
              alt={"user"}
            />
          </div>
          <div className="padding">{name}</div>
        </div>
      </div>
      <div className="exp-row">
        <div className="left-cell padding opaque-text">Cost</div>
        <div className="right-cell padding regular-text">{`$${cost}`}</div>
      </div>
      <div className="renewal">
        <div className="renewal-item">
          <div className="renewal-left padding opaque-text">
            Renewal Frequency
          </div>
          <div className="renewal-right padding regular-text">{`${props.frequency} month`}</div>
        </div>
        <div className="renewal-item">
          <div className="renewal-left padding opaque-text">Annual Cost</div>
          <div className="renewal-right padding regular-text">{`$${annualCost}`}</div>
        </div>
      </div>
      <div className="exp-row">
        <div className="left-cell padding opaque-text">Expense Account</div>
        <div className="right-cell padding regular-text">{props.account}</div>
      </div>
      <div className="exp-row">
        <div className="left-cell padding opaque-text">File</div>
        <div className="right-cell padding regular-text">{props.file}</div>
      </div>
      <div className="exp-row description">
        <div className="left-cell padding opaque-text">Description</div>
        <div className="right-cell padding regular-text">
          {props.description}
        </div>
      </div>
    </div>
  );
}
