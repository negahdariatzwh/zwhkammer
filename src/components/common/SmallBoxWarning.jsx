import React from "react";

function SmallBoxWarning({ header, description, icon, footer }) {
  return (
    <div className="small-box bg-warning">
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

export default SmallBoxWarning;
