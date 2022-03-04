import { React, useState } from "react";
import Service from "../../service/DynamicService";
import { toast } from "react-toastify";
import { useEffect } from "react";

function ColStateChanger({
  id,
  status,
  apiName,
  apiController,
  column,
  setRefreshParent,
}) {
  const [ObjectStatus, setObjectStatus] = useState(status);
  //console.log("objStatus  ID", id);
  //statusChanger: async (apiName, apiController, id, columnName, newStatus)
  useEffect(() => {
    setRefreshParent();
  }, [ObjectStatus]);

  const activate = () => {
    Service.statusChanger(apiName, apiController, id, column, 1)
      .then((response) => {
        toast.success("Status verändert");
        setObjectStatus(1);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const deactivate = () => {
    Service.statusChanger(apiName, apiController, id, column, 0)
      .then((response) => {
        toast.warning("Status verändert");
        setObjectStatus(0);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="form-check form-switch" style={{ paddingLeft: "4em" }}>
      {ObjectStatus == 1 ? (
        <input
          className="form-check-input"
          style={{ height: "1em", width: "2em" }}
          type="checkbox"
          key={id}
          checked
          onChange={() => deactivate()}
        ></input>
      ) : (
        <input
          className="form-check-input"
          style={{ height: "1em", width: "2em" }}
          type="checkbox"
          key={id}
          onChange={() => activate()}
        ></input>
      )}
    </div>
  );
}
export default ColStateChanger;
