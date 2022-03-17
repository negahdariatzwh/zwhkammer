import { React } from "react";
import { toast } from "react-toastify";
import DynamicService from "../../service/DynamicService";

function MiniRemoveBtn({
  apiName,
  apiController,
  id,
  setrefresh,
  setEditForm,
}) {
  const handleRemove = () => {
    DynamicService.remove(apiName, apiController, id)
      .then((response) => {
        if (response.success) {
          toast.success("erfolgreich entfernt");
          setrefresh(Math.random());
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

export default MiniRemoveBtn;
