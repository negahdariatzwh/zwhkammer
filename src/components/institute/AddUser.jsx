import { Fragment, React, useContext, useState } from "react";
import Button from "../common/Button";
//import ReactDOM from "react-dom";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
import BlockThemed from "../common/BlockThemed";
import MainContext from "../../context/MainContext";
import { Checkbox } from "muicss/react";

function AddUser(props) {
  const { setRefreshList, setaddForm } = useContext(MainContext);
  const [formState, setFormState] = useState({
    api_id: "",
    ctrl_name: "",
    description: "",
  });

  const [generic, setGeneric] = useState();

  const handleCheckbox = (e) => {
    if (e) {
      setGeneric(1);
    }
  };

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };
  const handleResetForm = () => {
    document.getElementById("create-ctrl-form").reset();
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(generic);
    const formPayload = new FormData();
    formPayload.append("name", formState.ctrl_name);
    formPayload.append("generic", generic);
    formPayload.append("description", formState.description);
    console.log(formState);
    DynamicService.addId("kammer", "ctrl", props.api_id, formPayload)
      .then((response) => {
        toast.success("added");
        setRefreshList(Math.random());
      })
      .catch((error) => {
        toast.error(error);
      });

    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12 fadeIn">
          <BlockThemed
            title="Neue Personal hinzufügen"
            color="bg-gd-emerald"
            icon="far fa-2x fa-window-close  closeBtn"
            close={() => setaddForm(false)}
          >
            <form
              id="create-ctrl-form"
              onChange={handleFormChange}
              onSubmit={handleAdd}
            >
              <div className="row mb-4">
                <div className="col-md-10">
                  <Input
                    label="Controller Name"
                    floatingLabel={true}
                    required={true}
                    type="text"
                    name="ctrl_name"
                  />
                </div>
                <div className="col-md-2">
                  <Checkbox
                    type="checkbox"
                    label="is Generic Controller"
                    onChange={(e) => handleCheckbox(e.target.checked)}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-12">
                  <Textarea
                    label="Beschreibung"
                    floatingLabel={true}
                    name="description"
                  />
                </div>
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
        </div>
      </div>
    </Fragment>
  );
}

export default AddUser;
