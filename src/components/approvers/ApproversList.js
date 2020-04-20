import React from "react";
import tick from "../../assets/icons/tick.png";
import "./styles.css";

export default function ApproversList(props) {
  const approvers = props.approvers;
  const approvedList = approvers.filter(
    (approver) => approver.status === "accepted"
  );
  const pendingList = approvers.filter(
    (approver) => approver.status === "created"
  );

  const renderApprover = (data, i) => {
    const approver = data.approver;
    const name = `${approver.first_name} ${approver.last_name}`;
    const email = approver.email;
    const lastUpdatedDate = data.last_updated_date;
    const lastNotifiedDate = data.last_notified_time;
    const profilePic = approver.profile_picture;
    const status = data.status;
    const text = status === "accepted" ? "Approved" : "Last notified";
    const date = status === "accepted" ? lastUpdatedDate : lastNotifiedDate;
    const iconStyles =
      status === "accepted" ? "tick-icon approved" : "tick-icon gray-border";
    return (
      <div key={i}>
        <div className="approvers-list">
          <div className="cell-index">
            <div className={"tick-icon gray-bg index-text"}>{`${i}`}</div>
          </div>
          <div className="cell-details">
            <div className="approver-image-container">
              <img
                className="approver-rounded-image"
                src={profilePic}
                width={24}
                height={24}
                alt={"-"}
              />
            </div>
            <div className="approver-details">
              <div className="field">
                <span className="name">{`${name}`}</span>
                <span className="email">{`(${email})`}</span>
              </div>
              <div className="field date">{`${text} ${date}`}</div>
            </div>
          </div>
          <div className="cell-tick">
            <div className={iconStyles}>
              <img src={tick} alt="." />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderApprovedList = (approvers) => {
    const list = approvers.map((approver, i) =>
      renderApprover(approver, i + 1)
    );
    if (list.length === 0) {
      return null;
    }
    return (
      <div>
        <div className="approval-sub-heading">Approved</div>
        {list}
      </div>
    );
  };

  const renderPendingList = (approvers, accIndex = 0) => {
    const list = approvers.map((approver, i) =>
      renderApprover(approver, accIndex + i)
    );
    if (list.length === 0) {
      return null;
    }
    return (
      <div>
        <div className="approval-sub-heading">Pending</div>
        {list}
      </div>
    );
  };

  return (
    <div className="approval-container">
      {renderApprovedList(approvedList)}
      {pendingList.length > 0 && <hr className="pending-list-separator" />}
      {renderPendingList(pendingList, approvedList.length + 1)}
    </div>
  );
}
