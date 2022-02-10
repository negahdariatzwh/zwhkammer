import React from "react";
function Icons({
  top,
  down,
  icon = "si-wallet",
  color = "text-success",
  action,
}) {
  return (
    <div className="col-md-6 col-xl-3">
      <span
        className="block block-link-shadow text-start"
        onClick={() => action()}
      >
        <div className="block-content block-content-full d-flex justify-content-between align-items-center">
          <div>
            <i className={`si ${icon} fa-2x ${color}`}></i>
          </div>
          <div className="text-end">
            <div className="fs-3 fw-semibold">{top}</div>
            <div className="fs-sm fw-semibold text-uppercase text-muted">
              {down}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}
export default Icons;
