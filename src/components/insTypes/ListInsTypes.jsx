import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
function ListInsTypes() {
  const headers = [
    {
      _id: 1,
      show: "status",
      name: "status",
      sort: true,
      search: false,
    },
    {
      _id: 2,
      show: "Name",
      name: "name",
      sort: true,
      search: true,
    },
    {
      _id: 3,
      show: "beschreibung",
      name: "description",
      sort: false,
      search: true,
    },
  ];

  const [objects, setObjects] = useState([]);
  //console.log(objects);
  return (
    <DataTable
      headers={headers}
      apiName="kammer"
      apiController="estabtype"
      objects={objects}
      setObjects={setObjects}
    >
      {objects.found
        ? objects.found.map((item) => (
            <tr key={item._id}>
              <td>
                <Activate
                  id={item._id}
                  status={item.isActive}
                  apiName="kammer"
                  apiController="estabtype"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))
        : ""}
    </DataTable>
  );
}

export default ListInsTypes;
