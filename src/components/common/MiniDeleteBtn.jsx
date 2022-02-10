import { React, useContext } from "react";
import { toast } from "react-toastify";
import DynamicService from "../../service/DynamicService";
import { PageApiContenxt } from "../../context/PageApiContext";
function MiniDeleteBtn({ apiName, apiController, id, setrefresh }) {
  const { setrefreshTrash } = useContext(PageApiContenxt);
  const handleDelete = () => {
    DynamicService.delete(apiName, apiController, id)
      .then((response) => {
        toast.info("erfolgreich entfernt");
        setrefreshTrash(Math.random());
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <span
      className="badge center bg-danger pointer"
      onClick={() => handleDelete()}
    >
      <i className="fa fa-trash"></i>
    </span>
  );
}

export default MiniDeleteBtn;
