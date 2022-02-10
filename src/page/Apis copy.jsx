import React, { useEffect, useState } from "react";
import PageInfo from "../components/common/PageInfo";
import RibonIconStarBtn from "../components/widgets/cards/RibonIconStarBtn";
import Button from "../components/common/Button";
import BlockThemed from "../components/common/BlockThemed";
import AddNewAPI from "../components/apis/AddNewAPI";
function Apis() {
  const [showAddNewAPI, setshowAddNewAPI] = useState();
  const handleShowHideAdd = () => {
    showAddNewAPI ? setshowAddNewAPI(false) : setshowAddNewAPI(true);
  };

  return (
    <div>
      <PageInfo />
      <h2 className="content-heading d-flex justify-content-between align-items-center">
        <span className="fw-semibold">
          <i className="fas fa-concierge-bell"></i> API
        </span>
        <Button
          color="success"
          text="Neue API"
          icon="fa fa-plus"
          action={handleShowHideAdd}
        />
      </h2>
      {showAddNewAPI ? (
        <div className="row animated bounceInLeft">
          <div className="col-sm-12 col-md-12 ">
            <BlockThemed
              title="Neue API hizufügen"
              color="bg-gd-emerald"
              icon="far fa-2x fa-window-close  closeBtn"
              action={handleShowHideAdd}
            >
              <AddNewAPI />
            </BlockThemed>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="row items-push">
        <div className="col-md-6 col-xl-3">
          <RibonIconStarBtn
            top="test"
            down="something"
            ribon=""
            icon="fas fa-address-book"
            iconColor="bg-danger"
            countStar=""
            btnIcon="fas fa-circle"
            btnText="DW.de"
          />
        </div>
      </div>
    </div>
  );
}

export default Apis;
