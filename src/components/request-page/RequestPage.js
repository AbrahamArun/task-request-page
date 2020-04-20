import React from "react";
import ExpenseSummary from "../expense-view/ExpenseSummary";
import ApprovalList from "../approvers/ApproversList";
import amazonLogo from "../../assets/icons/amazon-logo.png";
import "./styles.css";

export default function RequestPage(props) {
  const data = props.data;
  const approvers = data.approvers;
  const requesterDetails = data.requested_by;

  return (
    <div className="request-page">
      <div className="page-title spacing">
        <div className="request-header">
          <div className="spacing">
            <img src={amazonLogo} alt={"amazon"} />
          </div>
          <div className="spacing header-text">
            Request for Amazon Web Services
          </div>
        </div>
      </div>
      <div className="request-view-container">
        <div className="expense-summary">
          <ExpenseSummary
            userInfo={requesterDetails}
            cost={data.cost_cents}
            frequency={data.renewal_frequency_in_months}
            account={data.expense_account}
            description={data.description}
            file={"Receipt-Github-Nov.xls"}
          />
          <div className="approval-buttons in-req-cont">
            <div className="button green button-text">Approve</div>
            <div className="button orange button-text">Deny</div>
          </div>
        </div>
        <div className="approver spacing">
          <ApprovalList approvers={approvers} />
        </div>
      </div>
      <div className="approval-buttons outside-req-cont hide-buttons">
        <div className="button green button-text">Approve</div>
        <div className="button orange button-text">Deny</div>
      </div>
    </div>
  );
}
