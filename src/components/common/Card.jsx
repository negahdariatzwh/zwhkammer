import { React, Fragment } from "react";

function Card({
  title,
  color = "bg-gd-sea",
  topBtn = "si si-wrench",
  children,
}) {
  return (
    <Fragment>
      <div class="block block-themed block-rounded">
        <div class={`block-header ${color}`}>
          <h3 class="block-title">{title}</h3>
          <div class="block-options">
            {topBtn ? (
              <button type="button" class="btn-block-option">
                <i class={`${topBtn}`}></i>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div class="block-content">{children}</div>
      </div>
    </Fragment>
  );
}
export default Card;
