import { React } from "react";
import AddUser from "../components/users/AddUser";
import List from "../components/users/List";
import PageInfo from "../components/common/PageInfo";
import AddTopPage from "../components/common/AddTopPage";
function Users() {
  //, setPageName] = useContext(MainContext);
  //const history = useHistory();

  return (
    <div>
      <PageInfo />
      <AddTopPage
        title="Benutzern"
        titleIcon="fas fa-users"
        formName="Neue Benutzer hinzufügen"
      >
        <AddUser />
      </AddTopPage>
      <div className="row">
        <div className="col-12">
          <br />
          <List />
        </div>
      </div>
    </div>
  );
}

export default Users;
