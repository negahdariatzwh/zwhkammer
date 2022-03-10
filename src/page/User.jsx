import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import BaseInfo from "../components/user/BaseInfo";
import UserService from "../service/UserService";
import Companies from "../components/users/Companies";
import { toast } from "react-toastify";
import Projects from "../components/user/Projects";
import PageInfo from "../components/common/PageInfo";

function User() {
  const { id } = useParams();
  const [userInfo, setuserInfo] = useState({});
  useEffect(() => {
    UserService.getUser(id)
      .then((response) => {
        setuserInfo(response.success);
      })
      .catch((er) => {
        toast.error(er);
      });
  }, [id]);
  //console.log(userInfo);
  return (
    <div>
      <PageInfo />
      <div className="row">
        <div className="col-md-6">
          <BaseInfo userInfo={userInfo} />
        </div>
        <div className="col-md-6">
          <Companies user_id={userInfo._id} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default User;
