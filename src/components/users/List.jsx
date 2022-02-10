import { React, useState, useEffect } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
function List() {
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
      show: "Nachname",
      name: "name",
      sort: true,
      search: true,
    },
    {
      _id: 3,
      show: "Vorname",
      name: "birthdate",
      sort: true,
      search: true,
    },
    {
      _id: 4,
      show: "email Address",
      name: "email",
      sort: true,
      search: true,
    },
  ];

  const [objects, setObjects] = useState([]);
  //console.log(objects);
  return (
    <DataTable
      headers={headers}
      apiName="zzls"
      apiController="user"
      objects={objects}
      setObjects={setObjects}
    >
      {objects.found
        ? objects.found.map((item) => (
            <tr key={item._id}>
              <td>
                <Activate
                  api="zzls.hubgrade-dev.de/user"
                  id={item._id}
                  status={item.isActive}
                />
              </td>
              <td>{item.lastName}</td>
              <td>{item.firstName}</td>
              <td>{item.email}</td>
            </tr>
          ))
        : ""}
    </DataTable>
  );
}

export default List;
