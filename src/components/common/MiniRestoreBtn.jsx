import { React, useContext } from "react";
import { toast } from "react-toastify";
import DynamicService from "../../service/DynamicService";
import MainContext from "../../context/MainContext";
function MiniRestoreBtn({ apiName, apiController, id, setrefresh }) {
  const { setRefresh } = useContext(MainContext);
  const handleRestore = () => {
    DynamicService.restore(apiName, apiController, id)
      .then((response) => {
        toast.success("erfolgreich wiederhergestellt");
        setRefresh(Math.random());
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <span
      className="badge center bg-success pointer"
      onClick={() => handleRestore()}
    >
      <i className="fas fa-trash-restore"></i>
    </span>
  );
}

export default MiniRestoreBtn;
