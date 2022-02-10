import React from "react";

function WithImage({ action, top, down, imageUrl }) {
  return (
    <div className="col-md-6 col-xl-3">
      <span
        className="block block-rounded block-transparent"
        onClick={() => action}
      >
        <div
          className="block-content block-content-full text-end bg-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="py-5 text-center bg-black-25">
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

export default WithImage;
