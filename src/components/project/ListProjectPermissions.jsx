import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import TdLink from "../common/TdLink";
function ListProjectPermissions(props) {
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
      component: "TdLink",
    },
    {
      _id: 3,
      show: "Description",
      name: "description",
      sort: true,
      search: true,
    },
  ];
  const [objects, setObjects] = useState([]);

  return (
    <DataTable
      headers={headers}
      apiName="kammer"
      apiController="project_permission"
      apiMethod="listpermissions"
      apiId={props.id}
      objects={objects}
      setObjects={setObjects}
      //refresh={refreshList}
      title="Projekte Berechtigungen"
      headerColor="bg-gd-emerald"
    >
      {objects.found
        ? objects.found.map((item) => (
            <tr key={item._id}>
              <td>
                <Activate
                  api="kammer.hubgrade-dev.de/project_permission"
                  id={item._id}
                  status={item.isActive}
                />
              </td>
              <TdLink
                inner={`${item.name}`}
                goto={`/permission/${item._id}`}
                targetPageId="10"
              />
              <td>{item.description}</td>
            </tr>
          ))
        : ""}
    </DataTable>
  );
}

export default ListProjectPermissions;
