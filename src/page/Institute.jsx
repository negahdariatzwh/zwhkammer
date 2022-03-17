import { React, useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import PageInfo from "../components/common/PageInfo";
import MainContext from "../context/MainContext";
import AddUser from "../components/institute/AddUser";
import DynamicService from "../service/DynamicService";
import { toast } from "react-toastify";
import AddTopPage from "../components/common/AddTopPage";
import AddProject from "../components/institute/AddProject";
import Permissions from "../components/institute/Permissions";
import Users from "../components/institute/Users";
function Institute() {
  let params = useParams();
  let institute_id = params.id;
  const { addForm, editForm, showList, showTrash } = useContext(MainContext);
  const [establishment, setEstablishment] = useState([]);
  const [showAddProject, setShowAddProject] = useState();
  const [permissions, setPermissions] = useState([]);
  const [personnels, setPersonnels] = useState([]);

  const getKammer = () => {
    DynamicService.getId("kammer", "establishment", params.id)
      .then((response) => {
        setEstablishment(response.success);
        console.log(
          "Saved establishment in state stablishment",
          response.success
        );
      })
      .catch((er) => {
        toast.error(er);
      });
  };
  const getPermissions = () => {
    if (establishment._id) {
      DynamicService.listId(
        "kammer",
        "establishment",
        "permissions",
        institute_id
      )
        .then((response) => {
          setPermissions(response.success);
        })
        .catch((err) => {
          toast(err);
        });
    }
  };

  const getPersonnels = () => {
    if (establishment._id) {
      DynamicService.listId(
        "kammer",
        "establishment",
        "personnels",
        institute_id
      )
        .then((response) => {
          setPersonnels(response.success);
        })
        .catch((err) => {
          toast(err);
        });
    }
  };

  useEffect(() => {
    getKammer();
    getPermissions();
    getPersonnels();
  }, [params.id]);
  const handleShowAddProject = () => {
    showAddProject ? setShowAddProject() : setShowAddProject(1);
  };
  return (
    <div>
      <PageInfo addBtnText="add user" />
      <AddTopPage
        title={establishment.name}
        buttonName="add Project"
        handleShowHideBtn={handleShowAddProject}
      />
      {addForm ? <AddUser institute_id={institute_id} /> : ""}
      {showAddProject ? (
        <AddProject
          handleShowAddProject={handleShowAddProject}
          establishment_id={institute_id}
        />
      ) : (
        ""
      )}
      <div className="row">
        <div className="col-md-6">
          <Permissions establishment_id={institute_id} />
          <Users establishment_id={institute_id} />
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

export default Institute;
