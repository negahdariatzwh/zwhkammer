import React from "react";
function Switch({ id, name, status, onChange }) {
  return (
    <div className="form-check form-switch" style={{ paddingLeft: "4em" }}>
      <input
        name={name}
        className="form-check-input"
        style={{ height: "1em", width: "2em" }}
        type="checkbox"
        key={id}
        checked={status}
        onChange={onChange}
      ></input>
    </div>
  );
}
export default Switch;
