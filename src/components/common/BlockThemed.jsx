import { React } from "react";
function BlockThemed(props) {
  return (
    <div className="block block-themed block-rounded">
      <div className={`block-header ${props.color}`}>
        <h3 className="block-title">{props.title}</h3>
        <div className="block-options">
          <button
            type="button"
            className="btn-block-option"
            onClick={() => props.close()}
          >
            <i className={`${props.icon}`}></i>
          </button>
        </div>
      </div>
      <div className="block-content">{props.children}</div>
    </div>
  );
}
export default BlockThemed;
//{ color, title, icon, children, action }
