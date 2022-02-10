import { React, useContext } from "react";
import { toast } from "react-toastify";
import DynamicService from "../../service/DynamicService";
import MainContext from "../../context/MainContext";
function MiniRestoreBtn({
  apiName,
  apiController,
  id,
  setrefresh,
  setEditForm,
}) {
  const { setRefresh } = useContext(MainContext);
  const handleRemove = () => {
    DynamicService.remove(apiName, apiController, id)
      .then((response) => {
        if (response.success) {
          toast.success("erfolgreich entfernt");
          setRefresh(Math.random());
          setEditForm(null);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <span
      className="badge center bg-danger pointer"
      onClick={() => handleRemove()}
    >
      <i className="fas fa-dumpster-fire"></i>
    </span>
  );
}

export default MiniRestoreBtn;
