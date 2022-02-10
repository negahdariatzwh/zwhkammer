import React from "react";
import SmallBox from "../common/SmallBox";
import InstituteInformationBox from "../institute/InstituteInformationBox";

function Summery() {
  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <InstituteInformationBox id=""/>
      </div>

      <div className="col-lg-2 col-6">
        <SmallBox
          type="success"
          header="150"
          description="something"
          footer="ja"
          icon="fas fa-chart-bar"
        />
      </div>

      <div className="col-lg-2 col-6">
        <SmallBox
          type="warning"
          header="150"
          description="something"
          footer="ja"
          icon="fas fa-user-plus"
        />
      </div>
      <div className="col-lg-2 col-6">
        <SmallBox
          type="danger"
          header="150"
          description="something"
          footer="ja"
          icon="fas fa-chart-pie"
        />
      </div>
    </div>
  );
}

export default Summery;
