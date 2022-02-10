import React from "react";
function AddBtn({ handleShowAdd }) {
  return (
    <i
      className="fas fa-plus-circle pointer"
      onClick={() => handleShowAdd()}
    ></i>
  );
}

export default AddBtn;
