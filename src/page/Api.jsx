import { React } from "react";
import PageInfo from "../components/common/PageInfo";
import AddNewController from "../components/api/AddNewController";
import UpdateController from "../components/api/UpdateController";
import ListContollers from "../components/api/ListContollers";
import ListTrashControllers from "../components/api/ListTrashContollers";
//import { PageApiContenxt } from "../context/PageApiContext";
//import { useParams } from "react-router";
function Api() {
  return (
    <div>
      <PageInfo title="Api List" btnText="neue Controller" />
      <AddNewController />
      <UpdateController />
      <ListContollers />
      <ListTrashControllers />
    </div>
  );
}

export default Api;
