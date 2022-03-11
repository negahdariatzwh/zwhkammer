import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import PageInfo from "../components/common/PageInfo";
import MainContext from "../context/MainContext";
import AddUser from "../components/institute/AddUser";
import DynamicService from "../service/DynamicService";
import { toast } from "react-toastify";
import AddTopPage from "../components/common/AddTopPage";
function Institute() {
  let params = useParams();
  let institute_id = params.id;
  const { addForm, editForm, showList, showTrash } = useContext(MainContext);
  const [establishment, setEstablishment] = useState([]);
  useEffect(() => {
    DynamicService.getId("kammer", "establishment", params.id)
      .then((response) => {
        setEstablishment(response.success);
      })
      .catch((er) => {
        toast.error(er);
      });
  }, [params.id]);
  return (
    <div>
      <PageInfo addBtnText="add user" />
      <AddTopPage
        title={establishment.name}
        buttonName={"add Project"}
      > 
        </AddTopPage>
      {addForm ? <AddUser institute_id={institute_id} /> : ""}
    </div>
  );
}

export default Institute;
