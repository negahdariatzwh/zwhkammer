import { React, useContext, useEffect } from "react";
import MainContext from "../../context/MainContext";
import DynamicService from "../../service/DynamicService";

function Institute(props) {
  const { token } = useContext(MainContext);
  useEffect(() => {
    if (token) {
      DynamicService.dynamicPostAuth(
        "kammer",
        "myestablishment",
        "index",
        token,
        null
      ).then((response) => {
        console.log(response.success);
      });
    }
  }, [token]);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">{token}</div>
      </div>
      <div className="row">
        <div className="col-md-6">Name:</div>
      </div>
    </div>
  );
}

export default Institute;
