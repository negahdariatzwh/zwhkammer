import React from "react";
import Brand from "./Brand";
function SidebarHead({ name }) {
  return (
    <div className="content-header justify-content-lg-center">
      <Brand />
      <span className="user-panel mt-3 pb-3 mb-3 d-flex">{name}</span>
    </div>
  );
}

export default SidebarHead;
