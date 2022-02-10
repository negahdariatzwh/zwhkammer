import { useState, React } from "react";
import PageInfo from "../components/common/PageInfo";
import AddInsTypes from "../components/insTypes/AddInsTypes";
import ListInsTypes from "../components/insTypes/ListInsTypes";

function InsTypes() {
  const [showAdd, setShowAdd] = useState(false);
  const HanleShow = () => {
    showAdd ? setShowAdd(false) : setShowAdd(true);
  };
  return (
    <div>
      <PageInfo handleShowAdd={setShowAdd} />
      {showAdd ? <AddInsTypes /> : ""}

      <div className="row">
        <div className="col-12">
          <br />
          <ListInsTypes />
        </div>
      </div>
    </div>
  );
}

export default InsTypes;
