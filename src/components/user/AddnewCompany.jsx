import { React, useState } from "react";
import Button from "../common/Button";
import { Form } from "react-bootstrap";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
import BlockThemed from "../common/BlockThemed";
import SelectInstitute from "../institute/SelectInstitute";

function AddnewCompany({ user_id, handleCloseForm }) {
  const [formState, setFormState] = useState([]);
  const [selectedKammerId, setSelectedKammerId] = useState();
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  const handleResetForm = () => {
    document.getElementById("create-method-form").reset();
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formPayload.append("establishment_id", selectedKammerId);
    formPayload.append("user_id", user_id);
    formPayload.append("position", formState.position);
    formPayload.append("isActive", 1);
    console.log(formState);
    DynamicService.dynamicPost(
      "kammer",
      "establishment_user",
      "add",
      formPayload
    )
      .then((response) => {
        toast.success("added");
      })
      .catch((error) => {
        toast.error(error);
      });

    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };

  return (
    <BlockThemed
      color="bg-gd-emerald"
      icon="far fa-2x fa-window-close  closeBtn"
      title="Neue Firma für den Benutzer Hinzufügen"
      close={handleCloseForm}
    >
      <form
        id="create-method-form"
        onChange={handleFormChange}
        onSubmit={handleAdd}
      >
        <div className="row mb-4">
          <SelectInstitute setSelectedKammerId={setSelectedKammerId} />
        </div>

        <div className="row mb-4">
          <Form.Group className="mb-3 col-md-6" controlId="">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Position in company, simply define something"
              name="position"
              value={formState.firstName}
            />
          </Form.Group>
        </div>

        <div className="row mb-4">
          <div className="col-md-2">
            <Button
              text="hinzufügen"
              icon="fa fa-plus"
              color="success"
              type="submit"
            />
          </div>

          <div className="col-md-2">
            <Button
              text="reset"
              icon="fas fa-undo"
              color="warning"
              onClick={() => handleResetForm()}
            />
          </div>
        </div>
      </form>
    </BlockThemed>
  );
}

export default AddnewCompany;
