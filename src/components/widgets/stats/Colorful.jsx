import React from "react";

function Colorful({ action, top, down, color }) {
  //color = bg-primary
  return (
    <div className="col-md-6 col-xl-3">
      <span
        className="block block-rounded block-transparent"
        onClick={() => action}
      >
        <div className={`block-content block-content-full ${color}`}>
          <div className="py-5 text-center bg-black-10">
            <div className="fs-2 fw-bold mb-0 text-white">{top}</div>
            <div className="fs-sm fw-semibold text-uppercase text-white-75">
              {down}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Colorful;
