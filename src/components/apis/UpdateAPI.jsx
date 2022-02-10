import { React, useEffect, useState } from "react";
import Button from "../common/Button";
//import ReactDOM from "react-dom";
import BlockThemed from "../common/BlockThemed";
import Input from "muicss/lib/react/input";
import Form from "muicss/lib/react/form";
import Textarea from "muicss/lib/react/textarea";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
function UpdateAPI(props) {
  const [formState, setFormState] = useState([]);
  let id = props.editForm;
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    if (id) {
      DynamicService.getId("kammer", "api", id)
        .then((response) => {
          console.log("it is response for object to edit", response.success);
          setFormState(response.success);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  //console.log(formState);
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleDelete = () => {
    console.log("delete it");
    DynamicService.delete("kammer", "api", id)
      .then((response) => {
        toast.success("entfernt");
        props.setPageState(!props.pageState);
        props.closeForm();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleRestore = () => {
    DynamicService.restore("kammer", "api", id)
      .then((response) => {
        toast.success("wiederhergestellt");
        props.setPageState(!props.pageState);
        props.closeForm();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleActivate = () => {
    DynamicService.activate("kammer", "api", id)
      .then((response) => {
        toast.success("wiederhergestellt");
        props.setPageState(!props.pageState);
        props.closeForm();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleDeactivate = () => {
    DynamicService.deactivate("kammer", "api", id)
      .then((response) => {
        toast.success("wiederhergestellt");
        props.setPageState(!props.pageState);
        props.closeForm();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("update begin", formState);
    const formPayload = new FormData();
    formPayload.append("name", formState.name);
    formPayload.append("icon", formState.icon);
    formPayload.append("color", formState.color);
    formPayload.append("address", formState.address);
    formPayload.append("description", formState.description);
    //console.log(formState);
    DynamicService.update("kammer", "api", props.editForm, formPayload)
      .then((response) => {
        toast.success("updated");
        props.setPageState(!props.pageState);
        props.closeForm();
      })
      .catch((error) => {
        toast.error(error);
      });

    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };

  return (
    <BlockThemed
      color="bg-gd-default"
      icon="far fa-2x fa-window-close  closeBtn"
      title="Aktualisieren"
      onClick={() => props.closeForm()}
    >
      <Form onChange={handleFormChange} onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-md-6">
            <Input
              label="API Name: myExampleApi2"
              floatingLabel={false}
              type="text"
              name="name"
              //value={formState.name}
              //state={formState.name}
              defaultValue={formState.name}
            />
          </div>
          <div className="col-md-6">
            <Input
              label="icon : fas fa-address-book"
              floatingLabel={false}
              type="text"
              name="icon"
              defaultValue={formState.icon}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <Input
              label="farbe : bg-danger"
              floatingLabel={false}
              type="text"
              name="color"
              defaultValue={formState.color}
            />
          </div>
          <div className="col-md-6">
            <Input
              label="API address: muster-subdomain.muster-domain.de"
              floatingLabel={false}
              type="text"
              name="address"
              defaultValue={formState.address}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <Textarea
              label="API address: muster-subdomain.muster-domain.de"
              floatingLabel={false}
              name="description"
              defaultValue={formState.description}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-2">
            <Button
              icon="fas fa-edit"
              color="primary"
              name="submit"
              value="submit"
              type="submit"
              text="senden"
            />
          </div>

          <div className="col-md-2">
            {formState.isDel ? (
              <Button
                icon="fas fa-undo"
                color="success"
                name="restore"
                value="restore"
                type="button"
                text="restore"
                onClick={() => handleRestore()}
              />
            ) : (
              <Button
                icon="fas fa-trash"
                color="danger"
                name="delete"
                value="delete"
                type="button"
                text="löschen"
                onClick={() => handleDelete()}
              />
            )}
          </div>

          <div className="col-md-2">
            {formState.isActive ? (
              <Button
                icon="fas fa-exclamation"
                color="warning"
                name="deactivate"
                value="deactivate"
                type="button"
                text="deaktivieren"
                onClick={() => handleDeactivate()}
              />
            ) : (
              <Button
                icon="far fa-check-square"
                color="primary"
                name="activate"
                value="activate"
                type="button"
                text="aktivieren"
                onClick={() => handleActivate()}
              />
            )}
          </div>
        </div>
      </Form>
    </BlockThemed>
  );
}

export default UpdateAPI;
