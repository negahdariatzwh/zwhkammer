import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import BaseInfo from "../components/user/BaseInfo";
import UserService from "../service/UserService";
import DynamicService from "../service/DynamicService";
import Companies from "../components/user/Companies";
import { toast } from "react-toastify";
import Projects from "../components/user/Projects";
import PageInfo from "../components/common/PageInfo";
import AddnewCompany from "../components/user/AddnewCompany";
import EditUser from "../components/user/EditUser";

function User() {
  const { id } = useParams();
  const [userInfo, setuserInfo] = useState({});
  const [showAddNewCompany, setshowAddNewCompany] = useState();
  const [showEditUser, setshowEditUser] = useState();

  const getUserInfo = () => {
    DynamicService.getId("zzls", "user", id)
      .then((response) => {
        setuserInfo(response.success);
        console.log(response.success);
      })
      .catch((err) => toast(err));
  };
  useEffect(() => {
    getUserInfo();
  }, [id]);
  console.log(userInfo);
  const handleBtnAddNewCompany = () => {
    setshowAddNewCompany(!showAddNewCompany);
    console.log("show form company", showAddNewCompany);
  };
  const handleBtnEditUser = () => {
    setshowEditUser(!showEditUser);
  };
  return (
    <div>
      <PageInfo />
      {showAddNewCompany ? (
        <AddnewCompany
          user_id={id}
          handleCloseForm={() => setshowAddNewCompany(false)}
        />
      ) : null}
      {showEditUser ? (
        <EditUser user_id={id} hanleCloseBtn={handleBtnEditUser} />
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <BaseInfo userInfo={userInfo} handleBtnEditUser={handleBtnEditUser} />
          <Companies
            user_id={id}
            handleBtnAddNewCompany={() => handleBtnAddNewCompany()}
          />
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

export default User;
