import { React, useState } from "react";
import Service from "../../service/DynamicService";
import { toast } from "react-toastify";

function Activate({ id, status, apiName, apiController }) {
  const [ObjectStatus, setObjectStatus] = useState(status);
  console.log("objStatus", ObjectStatus);

  const activate = () => {
    Service.activate(apiName, apiController, id)
      .then((response) => {
        toast.success("aktiviert");
        setObjectStatus(true);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const deactivate = () => {
    Service.deactivate(apiName, apiController, id)
      .then((response) => {
        toast.warning("deaktiviert");
        setObjectStatus(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleUpdate = () => (async) => {
    ObjectStatus ? deactivate() : activate();
  };
  return (
    <div className="form-check form-switch" style={{ paddingLeft: "4em" }}>
      <input
        className="form-check-input"
        style={{ height: "1em", width: "2em" }}
        type="checkbox"
        key={id}
        checked={ObjectStatus}
        onChange={handleUpdate()}
      ></input>
    </div>
  );
}
export default Activate;
