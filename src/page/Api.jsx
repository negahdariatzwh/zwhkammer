import { React, useContext } from "react";
import PageInfo from "../components/common/PageInfo";
import AddNewController from "../components/api/AddNewController";
import UpdateController from "../components/api/UpdateController";
import ListContollers from "../components/api/ListContollers";
import ListTrashControllers from "../components/api/ListTrashContollers";
import { useParams } from "react-router";
import MainContext from "../context/MainContext";

function Api() {
  const params = useParams();
  const { addForm, editForm, showList, showTrash } = useContext(MainContext);

  return (
    <div>
      <PageInfo addBtnText="neue Controller zum API hinzufügen" />
      {addForm ? <AddNewController /> : ""}
      {editForm ? <UpdateController /> : ""}
      {showList ? <ListContollers id={params.id} /> : ""}
      {showTrash ? <ListTrashControllers id={params.id} /> : ""}
    </div>
  );
}

export default Api;
