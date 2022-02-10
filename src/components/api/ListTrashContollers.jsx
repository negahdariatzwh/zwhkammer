import { React, useState, useContext, Fragment } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import TdLink from "../common/TdLink";
import MiniremoveBtn from "../common/MiniRemoveBtn";
import MainContext from "../../context/MainContext";
import MiniRestoreBtn from "../common/MiniRestoreBtn";
import { PageApiContenxt } from "../../context/PageApiContext";
function ListTrashContollers({ id, refresh }) {
  const { authError } = useContext(MainContext);
  const { refreshTrash, showTrash } = useContext(PageApiContenxt);

  const headers = [
    {
      _id: 1,
      show: "status",
      name: "status",
      sort: true,
      search: false,
      component: "Activate",
    },

    {
      _id: 2,
      show: "Name",
      name: "name",
      sort: true,
      search: true,
      component: "Tdlink",
    },
    {
      _id: 3,
      show: "beschreibung",
      name: "description",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 4,
      show: "",
      name: "",
      sort: false,
      search: false,
      component: "",
    },
  ];
  const [objects, setObjects] = useState([]);
  return (
    <Fragment>
      {!authError && showTrash ? (
        <DataTable
          headers={headers}
          apiName="kammer"
          apiController="api"
          apiMethod="trashcontollers"
          apiId={id}
          objects={objects}
          setObjects={setObjects}
        >
          {objects.found ? (
            objects.found.map((item) => (
              <tr key={item._id}>
                <td>
                  <Activate
                    apiName="kammer"
                    apiController="api_controller"
                    id={item._id}
                    status={item.isActive}
                  />
                </td>
                <TdLink
                  inner={`${item.name}`}
                  goto={`/controller/id/${item._id}`}
                  targetPageId=""
                />
                <td>{item.description}</td>
                <td className="">
                  <MiniRestoreBtn
                    apiName="kammer"
                    apiController="api_controller"
                    id={item._id}
                  />
                  <MiniremoveBtn
                    apiName="kammer"
                    apiController="api_controller"
                    id={item._id}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </DataTable>
      ) : null}
    </Fragment>
  );
}

export default ListTrashContollers;
