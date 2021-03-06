import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import TdLink from "../common/TdLink";
function Establishments(props) {
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
      show: "Institute",
      name: "estab_name",
      sort: true,
      search: true,
      component: "TdLink",
    },
    {
      _id: 3,
      show: "Permission",
      name: "proj_per_name",
      sort: true,
      search: true,
    },
  ];
  const [objects, setObjects] = useState([]);

  return (
    <DataTable
      headers={headers}
      apiName="kammer"
      apiController="project"
      apiMethod="establishments"
      apiId={props.id}
      objects={objects}
      setObjects={setObjects}
      //refresh={refreshList}
      title="Projekte Institiuten"
      headerColor="bg-gd-emerald"
    >
      {objects.found
        ? objects.found.map((item) => (
            <tr key={item._id}>
              <td>
                <Activate
                  api="kammer.hubgrade-dev.de/Establishment_Project_Permission"
                  id={item.estab_proj_per_poj_per_id}
                  status={item.isActive}
                />
              </td>
              <TdLink
                inner={`${item.estab_name}`}
                goto={`/institiute/${item.estab_id}`}
                targetPageId="10"
              />
              <td>{item.proj_per_name}</td>
            </tr>
          ))
        : null}
    </DataTable>
  );
}

export default Establishments;
