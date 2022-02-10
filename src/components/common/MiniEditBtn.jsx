import { React } from "react";
function MiniEditBtn(props) {
  return (
    <span
      className="badge center bg-primary pointer"
      onClick={() => props.onClick()}
    >
      <i className="fas fa-edit"></i>
    </span>
  );
}
export default MiniEditBtn;
