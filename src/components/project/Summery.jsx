import { React, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
//import $ from "jquery";
import ImageSlider from "../common/ImageSlider";
import DynamicService from "../../service/DynamicService";
import ListProjectPermissions from "./ListProjectPermissions";
function Summery() {
  const params = useParams();
  let project_id = params.id;
  const history = useHistory();
  const [project, setproject] = useState([]);

  useEffect(() => {
    DynamicService.getId("kammer", "project", project_id).then((response) =>
      setproject(response.success)
    );
  }, [project_id]);
  let logosrc = "/assets/logo/" + project.logo;

  console.log(project);
  return (
    <div>
      <div className="block-content block-content-full border-bottom d-flex justify-content-between align-items-center">
        <img src={logosrc} alt="" style={{ maxHeight: "50px" }} />
        <span
          className="btn btn-primary"
          onClick={() => history.push("/projects")}
        >
          <i className="fa fa-arrow-left opacity-50 me-1 "></i> zum Projekten
        </span>
      </div>

      <div className="block-content block-content-full">
        <div className="row py-3">
          <div className="col-sm-6 ">
            <p>
              <span className="h5">
                <span className="h5">{project.show_name} </span>
              </span>
            </p>
            <p> {project.description}</p>
            <table className="table table-striped table-borderless mt-3">
              <tbody>
                <tr>
                  <td className="fw-semibold">Client</td>
                  <td>{project.customer}</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Budget</td>
                  <td>$10.000</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Category</td>
                  <td>Web Development</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Website</td>
                  <td>
                    <a href={project.website} target="_blank" rel="noreferrer">
                      {project.website}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <ListProjectPermissions id={project_id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summery;
