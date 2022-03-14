import React from "react";

function MiniAddBtn({ handleAdd, btnText }) {
  return (
    <button
      type="button"
      class="btn btn-sm btn-success"
      data-bs-toggle="tooltip"
      title="add"
      onClick={() => handleAdd()}
    >
      <i class="fa fa-plus">{btnText}</i>
    </button>
  );
}

export default MiniAddBtn;
