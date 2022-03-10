import { React, useContext, useEffect } from "react";
import PageInfo from "../components/common/PageInfo";
import AddNewController from "../components/api/AddNewController";
import UpdateController from "../components/api/UpdateController";
import ListContollers from "../components/api/ListContollers";
import ListTrashControllers from "../components/api/ListTrashContollers";
import { useParams } from "react-router";
import MainContext from "../context/MainContext";
import { useState } from "react";
import DynamicService from "../service/DynamicService";
import { toast } from "react-toastify";

function Api() {
  const params = useParams();
  const { addForm, editForm, showList, showTrash } = useContext(MainContext);
  const [api, setApi] = useState([]);
  useEffect(() => {
    DynamicService.getId("kammer", "api", params.id)
      .then((response) => {
        setApi(response.success);
      })
      .catch((er) => {
        toast.error(er);
      });
  }, [params.id]);

  return (
    <div>
      <PageInfo addBtnText="neue Controller zum API hinzufügen" />
      <h5>
        Current API: <small>"{api.name}"</small>
      </h5>
      <hr />
      {addForm ? <AddNewController api_id={api._id} /> : ""}
      {editForm ? <UpdateController /> : ""}
      {showList ? <ListContollers api_id={params.id} /> : ""}
      {showTrash ? <ListTrashControllers id={params.id} /> : ""}
    </div>
  );
}

export default Api;
