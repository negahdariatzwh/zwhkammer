import React from "react";

function SmallBoxDanger({ header, description, icon, footer }) {
  return (
    <div className="small-box bg-danger">
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
      <div className="small-box-footer pointer">
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

export default SmallBoxDanger;
