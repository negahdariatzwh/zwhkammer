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
    <button
      type="button"
      class="btn btn-sm btn-secondary"
      data-bs-toggle="tooltip"
      title="Delete"
      onClick={() => handleDelete()}
    >
      <i class="fa fa-times"></i>
    </button>
  );
}

export default MiniDeleteBtn;
