import React from "react";

function AddNewItemRow({ children }) {
  return (
    <div className="row row_add_new_item_hidden">
      <div className="col-12">{children}</div>
    </div>
  );
}

export default AddNewItemRow;
