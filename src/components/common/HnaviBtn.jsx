import React from "react";
function HnaviBtn({ text, onClick, icon, active }) {
  return (
    <li className="nav-item">
      <span
        className={`nav-link ${active ? "active" : ""}`}
        onClick={() => onClick()}
      >
        <i className={`${icon} opacity-50 me-1`}></i> {text}
      </span>
    </li>
  );
}

export default HnaviBtn;
