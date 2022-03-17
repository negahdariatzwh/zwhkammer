import { Fragment, React, useState } from "react";
import Button from "../common/Button";
import Input from "muicss/lib/react/input";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
import BlockThemed from "../common/BlockThemed";
import SelectProjectPermission from "../institiutes/SelectProjectPermission";

function AddProject(props) {
  const [formState, setFormState] = useState([]);
  const [selectedPermissionId, setSelectedPermission] = useState();

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
    const formPayload = new FormData();
    formPayload.append("description", formState.description);
    formPayload.append("project_permission_id", selectedPermissionId);
    formPayload.append("establishment_id", props.establishment_id);
    formPayload.append("name", formState.proj_per_name);

    console.log("Selected permission ID: ", selectedPermissionId);
    DynamicService.add(
      "kammer",
      "establishment_project_permission",
      formPayload
    )
      .then((response) => {
        toast.success("added");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12 fadeIn">
          <BlockThemed
            title="Neue Permission hinzufügen"
            color="bg-gd-emerald"
            icon="far fa-2x fa-window-close  closeBtn"
            close={() => props.handleShowAddProject()}
          >
            <form
              id="create-epp-form"
              onChange={handleFormChange}
              onSubmit={handleAdd}
            >
              <div className="row mb-4">
                <div className="col-md-6">
                  <SelectProjectPermission
                    setSelectedPermissionId={setSelectedPermission}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    label="Bezeichnung"
                    floatingLabel={true}
                    required={false}
                    type="text"
                    name="proj_per_name"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <Input
                  label="Beschreibung"
                  floatingLabel={true}
                  required={false}
                  type="text"
                  name="description"
                />
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

export default AddProject;
