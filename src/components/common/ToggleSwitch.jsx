import { React } from "react";
function ToggleSwitch({ id, status, onChangeHandler }) {
  return (
    <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={status ? "checked" : ""}
        onChange={(e) => onChangeHandler()}
        //onClick={(e) => onChangeHandler(e.target.checked)}
      />
      <label className="custom-control-label" htmlFor="customSwitch1"></label>
    </div>
  );
}

export default ToggleSwitch;
