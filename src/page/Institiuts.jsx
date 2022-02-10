import { React } from "react";
import InstituteList from "../components/institiutes/List";
//import AddInstitute from "../components/institiutes/AddInstitute";
import PageInfo from "../components/common/PageInfo";
import AddTopPage from "../components/common/AddTopPage";

function Institiuts() {
  return (
    <div>
      <PageInfo />
      <AddTopPage
        title="Einrichtun"
        titleIcon="fas fa-building"
        formName="Neue Benutzer hinzufügen"
        formAPI="kammer"
      />
      <div className="row">
        <div className="col-12">
          <br />
          <InstituteList />
        </div>
      </div>
    </div>
  );
}

export default Institiuts;
