import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import MiniRemoveBtn from "../common/MiniRemoveBtn";
function Projects({ establishment_id }) {
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
      show: "action",
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
      apiMethod="projects"
      apiId={establishment_id}
      objects={objects}
      setObjects={setObjects}
      title="projects list"
    >
      {objects.found ? (
        objects.found.map((item) => (
          <tr key={item._id}>
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
              <MiniRemoveBtn />
            </td>
          </tr>
        ))
      ) : (
        <tr></tr>
      )}
    </DataTable>
  );
}

export default Projects;
