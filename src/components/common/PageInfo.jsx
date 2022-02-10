import { React } from "react";
import PathNavi from "./PathNavi";
import { useLocation } from "react-router";
import { getPagebyPathName } from "../../app/Utils";

function PageInfo(props) {
  let location = useLocation();
  let page = getPagebyPathName(location.pathname);
  return (
    <div className="row content-heading px-4 py-3 bg-body-extra-light rounded push">
      <div className="col-md-6 hcenter">
        <span className="">
          <PathNavi page={page} />
        </span>
      </div>

      <div className="col-md-6 hcenter">
        <span
          className={`endright badge  pointer ${
            props.showTrash
              ? "animated swing bg-gray-dark"
              : "animated rubberBand  bg-primary"
          } `}
          onClick={() => props.setshowTrash()}
        >
          {props.showTrash ? (
            <i className="fas fa-recycle"></i>
          ) : (
            <i className="fas fas fa-list"></i>
          )}
        </span>
        <span
          className={`badge bg-success pointer endright maginright5px ${
            props.addForm ? "fadeOut" : "fadeIn"
          }`}
          onClick={() => props.setAddForm(true)}
        >
          <i className="fa fa-plus "></i>
          {props.btnText ? (
            <span className="left5px">{props.btnText}</span>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
}

export default PageInfo;
