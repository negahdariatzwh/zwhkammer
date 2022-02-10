import { React, Fragment, useState } from "react";
import InstituteList from "../components/institiutes/List";
import AddInstitute from "../components/institiutes/AddInstitute";
import PageInfo from "../components/common/PageInfo";
function Institiuts() {
  const [showAdd, setShowAdd] = useState(false);
  const handleShowAdd = () => {
    showAdd ? setShowAdd(false) : setShowAdd(true);
  };
  return (
    <Fragment>
      <PageInfo handleShowAdd={handleShowAdd} />
      {showAdd ? <AddInstitute /> : ""}
      <div className="row">
        <div className="col-12">
          <br />
          <InstituteList />
        </div>
      </div>
    </Fragment>
  );
}

export default Institiuts;
