import React from "react";

function IconBigColorful({
  top,
  down,
  icon = "si-bag",
  action,
  color = "bg-primary",
}) {
  return (
    <div class="col-md-6 col-xl-3">
      <span
        class="block block-rounded block-transparent"
        onClick={() => action()}
      >
        <div class={`block-content block-content-full ${color}`}>
          <div class="py-3 text-center">
            <div class="mb-3">
              <i class={`si ${icon} fa-4x text-primary-lighter`}></i>
            </div>
            <div class="fs-3 fw-semibold text-white">{top}</div>
            <div class="fs-sm fw-semibold text-uppercase text-primary-lighter">
              {down}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default IconBigColorful;
