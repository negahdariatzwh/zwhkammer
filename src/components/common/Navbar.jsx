import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function AdminNavbar() {
  return (
    <header id="page-header">
      <div className="content-header">
        <div className="space-x-1">
          <button
            className="btn btn-sm btn-alt-secondary"
            data-toggle="layout"
            data-action="sidebar-toggle"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
