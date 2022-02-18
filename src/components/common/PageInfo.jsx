import { React, useContext } from "react";
import PathNavi from "./PathNavi";
import { useLocation } from "react-router";
import { getPagebyPathName } from "../../app/Utils";
import MainContext from "../../context/MainContext";

function PageInfo({ addBtnText }) {
  let location = useLocation();
  let page = getPagebyPathName(location.pathname);
  const { addForm, showTrash, setaddForm, setshowTrash, setshowList } =
    useContext(MainContext);
  const switchListTrashFunction = () => {
    if (showTrash) {
      setshowTrash(false);
      setshowList(true);
    } else {
      setshowTrash(true);
      setshowList(false);
    }
  };
  const showAddForm = () => {
    setaddForm(true);
    setshowTrash(false);
    setshowList(true);
  };
  return (
    <div className="container-fluid m-0 ">
      <div className="row content-heading px-4 py-3 bg-body-extra-light rounded push">
        <div className="col-md-6 hcenter">
          <span className="">
            <PathNavi page={page} />
          </span>
        </div>

        <div className="col-md-6 hcenter">
          <span
            className={`endright badge  pointer ${
              showTrash
                ? "animated swing bg-gray-dark"
                : "animated rubberBand  bg-primary"
            } `}
            onClick={() => switchListTrashFunction()}
          >
            {showTrash ? (
              <i className="fas fa-recycle"></i>
            ) : (
              <i className="fas fas fa-list"></i>
            )}
          </span>
          <span>
            {!addForm ? (
              <span
                className="badge bg-success pointer endright maginright5px "
                onClick={() => showAddForm()}
              >
                <i className="fa fa-plus "></i>
                <span className="left5px"></span> {addBtnText}
              </span>
            ) : (
              <span
                className="badge bg-danger pointer endright maginright5px animated flipInY"
                onClick={() => setaddForm(false)}
              >
                <i className="fa fa-window-close"></i>
                <span className="left5px"></span> {addBtnText}
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageInfo;
