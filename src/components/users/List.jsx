import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import TdLink from "../common/TdLink";
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
      name: "lastName",
      sort: true,
      search: true,
    },
    {
      _id: 3,
      show: "Vorname",
      name: "firstName",
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
    {
      _id: 5,
      name: "",
      sort: false,
      search: false,
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
      title="List All users"
      titleColor="white"
    >
      {objects.found ? (
        objects.found.map((item) => (
          <tr key={item._id}>
            <td>
              <Activate
                apiName="zzls"
                apiController="user"
                id={item._id}
                status={item.isActive}
              />
            </td>
            <td>{item.lastName}</td>
            <td>{item.firstName}</td>
            <td>{item.email}</td>
            <TdLink goto={`/user/${item._id}`} inner="goto" targetPageId="5" />
          </tr>
        ))
      ) : (
        <tr></tr>
      )}
    </DataTable>
  );
}

export default List;
