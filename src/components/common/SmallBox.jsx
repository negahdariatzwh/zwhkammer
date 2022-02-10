import React from "react";

function SmallBox({ type, header, description, icon, footer, onClickHandler }) {
  let typeo = "bg-" + type;
  return (
    <div className={`small-box ${typeo}`}>
      <div className="inner">
        <h4>{header}</h4>
        <p>{description}</p>
        {icon ? (
          <div className="icon">
            <i className={icon}></i>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="small-box-footer pointer" onClick={() => onClickHandler}>
        {footer ? (
          <span>
            {footer}
            <i className="fas fa-arrow-circle-right"></i>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SmallBox;
