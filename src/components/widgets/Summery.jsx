import { React } from "react";
import { useHistory } from "react-router";
function Summery(params) {
  const history = useHistory();
  return (
    <div>
      <div className="block-content block-content-full border-bottom d-flex justify-content-between align-items-center">
        <span
          className="btn btn-primary"
          onClick={() => history.push(params.goTo)}
        >
          <i className="fa fa-arrow-left opacity-50 me-1 "></i>
          {params.goToName}
        </span>

        <span
          className="btn btn-success"
          onClick={() => params.handleShowEdit()}
        >
          <i className="fas fa-pencil-alt opacity-50 me-1 "></i>
          bearbeiten
        </span>
      </div>

      <div className="block-content block-content-full">
        <div className="row py-3">{params.children}</div>
      </div>
    </div>
  );
}

export default Summery;
