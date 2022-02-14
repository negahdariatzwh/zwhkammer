import { React, useContext } from "react";
import { useParams } from "react-router";
import PageInfo from "../components/common/PageInfo";
import AddNewMethod from "../components/controller/AddNewMethod";
import EditMethods from "../components/controller/EditMethods";
import ListMethods from "../components/controller/ListMethods";
import TrashMethods from "../components/controller/TrashMethods";
import MainContext from "../context/MainContext";

function Controller() {
  const params = useParams();
  const { addForm, editForm, showList, showTrash } = useContext(MainContext);
  return (
    <div>
      <PageInfo addBtnText="neue Method zum Controller hinzufügen" />
      {addForm ? <AddNewMethod id={params.id} /> : ""}
      {editForm ? <EditMethods id={editForm} /> : ""}
      {showList ? <ListMethods id={params.id} /> : ""}
      {showTrash ? <TrashMethods id={params.id} /> : ""}
    </div>
  );
}

export default Controller;
