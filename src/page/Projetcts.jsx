import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import PageInfo from "../components/common/PageInfo";
import ProjectBlock from "../components/project/ProjectBlock";
import DynamicService from "../service/DynamicService";
import AddTopPage from "../components/common/AddTopPage";
function Projetcts() {
  const [objects, setstate] = useState([]);
  const getData = () => {
    DynamicService.list("kammer", "project")
      .then((response) => {
        setstate(response.success);
      })
      .catch((er) => {
        toast.error(er);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PageInfo />
      <AddTopPage
        title="Projeken"
        titleIcon="fas fa-dna"
        formName="Neue API hinzufügen"
        formAPI="kammer"
      />

      <div className="row items-push img-fluid-100">
        {objects && objects.found
          ? objects.found.map((item) => <ProjectBlock project={item} />)
          : ""}
      </div>
      <div className="bg-body-extra-light rounded push">
        <div className="row text-center">
          <div className="col-sm-4 py-4">
            <div className="fs-1 fw-bold">3</div>
            <div className="fw-semibold text-muted text-uppercase">active</div>
          </div>
          <div className="col-sm-4 py-4">
            <div className="fs-1 fw-bold">3</div>
            <div className="fw-semibold text-muted text-uppercase">active</div>
          </div>
          <div className="col-sm-4 py-4">
            <div className="fs-1 fw-bold">3</div>
            <div className="fw-semibold text-muted text-uppercase">active</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetcts;
