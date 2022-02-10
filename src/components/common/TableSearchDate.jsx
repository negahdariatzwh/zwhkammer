import { Fragment } from "react";
import { React, useState } from "react";
import { Form } from "react-bootstrap";
import Imodal from "./Imodal";
//import DatePicker from "react-bootstrap-date-picker";
function TableSearchDate() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
    console.log("showModal", showModal);
  };

  return (
    <Fragment>
      <i
        className="fas fa-calendar-day pointer blue leftspace"
        onClick={() => handleOpenModal()}
      ></i>
      <Imodal
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        body="sadasdsa"
        title="my Title"
      >
        <Form>
          <input type="date"></input>
        </Form>
      </Imodal>
    </Fragment>
  );
}
export default TableSearchDate;
