import { React, useState, Fragment, useEffect } from "react";
import DynamicService from "../../service/DynamicService";
import { toast } from "react-toastify";
function SelectProjectPermission({ setSelectedPermissionId }) {
  const [listProjecs, setlistProjects] = useState([]);
  const [listPermissions, setlistPermissions] = useState([]);
  const [projectId, setprojectId] = useState();
  const [Permission_id, setPermissionId] = useState();

  const loadProjects = () => {
    DynamicService.list("kammer", "project")
      .then((response) => {
        setlistProjects(response.success);
      })
      .catch((er) => {
        toast.error(er);
      });
  };

  const handleChangeProjects = (e) => {
    setprojectId(e.target.value);
  };

  const handleChangeKammer = (e) => {
    setPermissionId(e.target.value);
    console.log("selected Permission_id", Permission_id);
    setSelectedPermissionId(e.target.value);
  };

  const getPermissions = (projectId, searchOption, searchValue) => {
    DynamicService.listIdAll(
      "kammer",
      "project",
      "permissions",
      projectId,
      "",
      "",
      searchOption,
      searchValue
    )
      .then((response) => {
        //console.log("list found kammer", response.success.found);
        let foundData = response.success.found;
        console.log("found Permissions ", foundData);
        setlistPermissions(foundData);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    loadProjects();
    getPermissions(projectId);
  }, [projectId]);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <select
            label="Project"
            name="project"
            className="form-select"
            onChange={(e) => handleChangeProjects(e)}
          >
            <option key={"not selected"} value={false}>
              bitte whälen{" "}
            </option>
            {listProjecs.found
              ? listProjecs.found.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.name}
                  </option>
                ))
              : ""}
          </select>
        </div>
        <div className="col-md-6">
          <div>
            <select
              label="Kammer"
              name="Kammer"
              className="form-select"
              required
              onChange={(e) => handleChangeKammer(e)}
            >
              <option key={"not selected"} value={false}>
                bitte whälen{" "}
              </option>
              {listPermissions
                ? listPermissions.map((permission) => (
                    <option key={permission._id} value={permission._id}>
                      {permission.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SelectProjectPermission;
