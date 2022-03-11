import { React, Fragment } from "react";

function Card({
  title,
  color = "bg-gd-sea",
  topBtn = "si si-wrench",
  children,
}) {
  return (
    <Fragment>
      <div className="block block-themed block-rounded">
        <div className={`block-header ${color}`}>
          <h3 className="block-title">{title}</h3>
          <div className="block-options">
            {topBtn ? (
              <button type="button" className="btn-block-option">
                <i className={`${topBtn}`}></i>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="block-content">{children}</div>
      </div>
    </Fragment>
  );
}
export default Card;
