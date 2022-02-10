import { React, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import $ from "jquery";
import ImageSlider from "../common/ImageSlider";
import DynamicService from "../../service/DynamicService";
function Summery() {
  const params = useParams();
  let project_id = params.id;
  const history = useHistory();
  $(function ($) {
    //alert("hi");
  });
  const imagelist = [
    "/assets/media/various/cb-project-promo1.png",
    "/assets/media/various/cb-project-promo2.png",
    "/assets/media/various/cb-project-promo3.png",
  ];
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
        <span
          className="btn btn-primary"
          onClick={() => history.push("/projects")}
        >
          <i className="fa fa-arrow-left opacity-50 me-1 "></i> Alle Projekten
        </span>
      </div>

      <div className="block-content block-content-full">
        <div className="row py-3">
          <div className="col-sm-6 ">
            <ImageSlider imagesUrlArray={imagelist} />

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
            <p></p>
            <p>
              <span className="h4">
                Projektsname: <span className="h3">{project.show_name} </span>{" "}
              </span>
            </p>
            <p>
              <span className="h4">
                logo:{" "}
                <span className="h3">
                  <img src={logosrc} alt="" style={{ maxHeight: "50px" }} />{" "}
                </span>
              </span>
            </p>
            <p>
              {" "}
              <h4 className="mb-2">Beschreibung:</h4>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summery;
