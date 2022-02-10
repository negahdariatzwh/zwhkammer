import { Fragment, React, useContext, useState } from "react";
import Button from "../common/Button";
//import ReactDOM from "react-dom";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
import BlockThemed from "../common/BlockThemed";
import { PageApiContenxt } from "../../context/PageApiContext";
function AddNewController(props) {
  const { addForm, setaddForm } = useContext(PageApiContenxt);
  const [formState, setFormState] = useState({
    api_name: "",
    icon: "",
    color: "",
    address: "",
    description: "",
  });

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };
  const handleResetForm = () => {
    document.getElementById("create-api-form").reset();
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formPayload.append("name", formState.api_name);
    formPayload.append("icon", formState.icon);
    formPayload.append("color", formState.color);
    formPayload.append("address", formState.address);
    formPayload.append("description", formState.description);
    console.log(formState);
    DynamicService.add("kammer", "api", formPayload)
      .then((response) => {
        toast.success("added");
        props.setRefreshList(Math.random());
      })
      .catch((error) => {
        toast.error(error);
      });

    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };

  return (
    <Fragment>
      {addForm ? (
        <div className="row">
          <div className="col-md-12 fadeIn">
            <BlockThemed
              title={props.formName}
              color="bg-gd-emerald"
              icon="far fa-2x fa-window-close  closeBtn"
              onClick={setaddForm(false)}
            >
              <form
                id="create-api-form"
                onChange={handleFormChange}
                onSubmit={handleAdd}
              >
                <div className="row mb-4">
                  <div className="col-md-6">
                    <Input
                      label="API Name: myExampleApi"
                      floatingLabel={true}
                      required={true}
                      type="text"
                      name="api_name"
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      label="icon : fas fa-address-book"
                      floatingLabel={true}
                      type="text"
                      name="icon"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <Input
                      label="farbe : bg-danger"
                      floatingLabel={true}
                      type="text"
                      name="color"
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      label="API address: muster-subdomain.muster-domain.de"
                      floatingLabel={true}
                      type="text"
                      name="address"
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-12">
                    <Textarea
                      label="API address: muster-subdomain.muster-domain.de"
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
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default AddNewController;
