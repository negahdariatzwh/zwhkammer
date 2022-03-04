import { React } from "react";
function MiniEditBtn(props) {
  return (
    <button
      type="button"
      class="btn btn-sm btn-secondary"
      data-bs-toggle="tooltip"
      title="Edit"
      onClick={() => props.onClick()}
    >
      <i class="fa fa-pencil-alt"></i>
    </button>
  );
}
export default MiniEditBtn;
