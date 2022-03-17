import { React } from "react";
import Button from "./Button";

function AddTopPage({
  titleIcon,
  title,
  buttonName = "hinzufügen",
  handleShowHideBtn,
}) {
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
          onClick={() => handleShowHideBtn()}
        />
      </h2>
    </div>
  );
}

export default AddTopPage;
