import React from "react";

function RibonIconStarBtn({
  ribon,
  icon,
  iconColor,
  countStar,
  top,
  down,
  btnIcon = "fa fa-briefcase",
  btnText = "action",
  action,
  secondBtnIcon,
  secondBtnText,
  secondBtnAction,
}) {
  const stars = [];
  if (countStar > 0) {
    for (let i = 0; i < countStar; i++) {
      stars.push(<i className="fa fa-fw fa-star"></i>);
    }
  }

  return (
    <div className="block block-rounded ribbon ribbon-modern ribbon-primary text-center">
      {ribon ? <div className="ribbon-box">{ribon}</div> : ""}
      <div className="block-content block-content-full">
        <div
          className={`item item-circle   ${iconColor} text-success-light  mx-auto my-3  `}
          style={{ backgroundColor: `${iconColor}` }}
        >
          <i className={`${icon}`}></i>
        </div>

        <div className={`${countStar ? "text-warning" : ""}`}>{stars}</div>
      </div>
      <div className="block-content block-content-full block-content-sm bg-body-light">
        <div className="fw-semibold mb-1">{top}</div>
        <div className="fs-sm fw-medium text-muted">{down}</div>
      </div>
      <div className="block-content block-content-full">
        <span className="btn btn-sm btn-alt-secondary" onClick={() => action()}>
          <i className={`${btnIcon} opacity-50 me-1`}></i> {btnText}
        </span>
        {secondBtnText ? (
          <span
            className="btn btn-sm btn-alt-secondary"
            onClick={() => secondBtnAction()}
          >
            <i className={`${secondBtnIcon} opacity-50 me-1`}></i>
            {secondBtnText}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default RibonIconStarBtn;
