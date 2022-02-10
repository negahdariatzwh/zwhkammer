import { React, useState } from "react";
import Button from "./Button";
import BlockThemed from "./BlockThemed";
function AddTopPage({
  titleIcon,
  title,
  buttonName = "hinzufügen",
  formName,
  children,
}) {
  const [showAddNewForm, setshowAddNewForm] = useState();
  const handleShowHideAdd = () => {
    showAddNewForm ? setshowAddNewForm(false) : setshowAddNewForm(true);
  };

  return (
    <div>
      <h2 className="content-heading d-flex justify-content-between align-items-center">
        <span className="fw-semibold">
          <i className={`${titleIcon}`}></i> {title}
        </span>
        <Button
          color="success"
          text={buttonName}
          icon="fa fa-plus"
          onClick={() => handleShowHideAdd()}
        />
      </h2>
      <div className="row">
        <div
          className={`col-sm-12 col-md-12 ${
            showAddNewForm ? "fadeIn" : "fadeOut"
          }`}
        >
          <BlockThemed
            title={formName}
            color="bg-gd-emerald"
            icon="far fa-2x fa-window-close  closeBtn"
            onClick={handleShowHideAdd}
          >
            <div>{children}</div>

            <div className="row mb-4"></div>
          </BlockThemed>
        </div>
      </div>
    </div>
  );
}

export default AddTopPage;
