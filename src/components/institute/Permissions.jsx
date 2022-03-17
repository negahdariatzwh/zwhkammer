import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import MiniRemoveBtn from "../common/MiniRemoveBtn";
function Permissions({ establishment_id }) {
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
      show: "Project",
      name: "project_name",
      sort: true,
      search: false,
      component: "",
    },
    {
      _id: 3,
      show: "Permission",
      name: "proj_per_name",
      sort: true,
      search: false,
      component: "Activate",
    },
    {
      _id: 4,
      show: "action",
      name: "proj_per_name",
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
      apiMethod="permissions"
      apiId={establishment_id}
      objects={objects}
      setObjects={setObjects}
      title="permission list"
    >
      {objects.found ? (
        objects.found.map((item) => (
          <tr key={item.estab_proj_per_id}>
            <td>
              <Activate
                id={item.estab_proj_per_id}
                apiName="kammer"
                apiController="establishment_project_permission"
                status={item.isActive}
              />
            </td>
            <td>{item.project_name}</td>
            <td>{item.estab_proj_per_name}</td>
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

export default Permissions;
