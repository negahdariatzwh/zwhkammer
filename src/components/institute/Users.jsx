import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import MiniRemoveBtn from "../common/MiniRemoveBtn";

function Users({ establishment_id }) {
  const headers = [
    {
      _id: 1,
      show: "status",
      name: "status",
      sort: true,
      search: false,
      component: "",
    },

    {
      _id: 2,
      show: "estab_user_id",
      name: "_id",
      sort: false,
      search: false,
      component: "",
    },

    {
      _id: 3,
      show: "position",
      name: "position",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 4,
      show: "name",
      name: "name",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 5,
      show: "",
      name: "",
      sort: false,
      search: false,
      component: "",
    },
  ];
  const [objects, setObjects] = useState([]);
  console.log("list inst", objects);
  return (
    <DataTable
      headers={headers}
      apiName="kammer"
      apiController="establishment"
      apiMethod="personnels"
      apiId={establishment_id}
      objects={objects}
      setObjects={setObjects}
      title="Mitarbieter/inn"
    >
      {objects.found ? (
        objects.found.map((item) => (
          <tr key={item._id}>
            <td>
              <Activate
                id={item._id}
                apiName="kammer"
                apiController="establishment_user"
                status={item.isActive}
              />
            </td>
            <td>{item._id}</td>
            <td>{item.position}</td>

            <td>
              <MiniRemoveBtn
                apiName="kammer"
                apiController="establishment_project_permission"
                apiId={item.estab_proj_per_id}
              />
            </td>
          </tr>
        ))
      ) : (
        <tr></tr>
      )}
    </DataTable>
  );
}

export default Users;
