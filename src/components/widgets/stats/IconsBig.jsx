import React from "react";
function IconsBig({
  top,
  down,
  icon = "si-wallet",
  color = "text-success",
  action,
}) {
  return (
    <div className="col-md-6 col-xl-3">
      <span
        className="block block-rounded block-link-shadow"
        onClick={() => action()}
      >
        <div className="block-content block-content-full">
          <div className="py-3 text-center">
            <div className="mb-3">
              <i className={`si ${icon} fa-4x ${color}`}></i>
            </div>
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
export default IconsBig;
