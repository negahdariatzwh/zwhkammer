import { React } from "react";
import { toast } from "react-toastify";
import DynamicService from "../../service/DynamicService";
//import { PageApiContenxt } from "../../context/PageApiContext_old";
function MiniDeleteBtn({ apiName, apiController, id, refresh }) {
  //const { setrefreshTrash } = useContext(PageApiContenxt);
  const handleDelete = () => {
    DynamicService.delete(apiName, apiController, id)
      .then((response) => {
        toast.info("erfolgreich entfernt");
        //setrefreshTrash(Math.random());
        refresh();
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
