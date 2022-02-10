import { React } from "react";
import PageInfo from "../components/common/PageInfo";
import ListInsTypes from "../components/insTypes/ListInsTypes";
import AddTopPage from "../components/common/AddTopPage";

function InsTypes() {
  return (
    <div>
      <PageInfo />
      <AddTopPage
        title="Institute Typpen"
        titleIcon="fas fa-city"
        formName="Neue Institute Typ hinzufügen"
        formAPI="kammer"
      ></AddTopPage>
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
