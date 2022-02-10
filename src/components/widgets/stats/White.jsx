import React from "react";

function White({ top, down, action, size, color, align }) {
  //size py-5 is big
  //color text-primary , text-success , ...
  //align tect-center text-end
  return (
    <div className="col-md-6 col-xl-3">
      <span
        className="block block-rounded block-link-shadow"
        onChange={() => action}
      >
        <div className="block-content block-content-full">
          <div className={`${size} ${align}`}>
            <div className={`fs-2 fw-bold ${color}`}>{top}</div>
            <div className="fs-sm fw-semibold text-uppercase text-muted">
              {down}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default White;
