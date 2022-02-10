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
      component: "Activate",
    },

    {
      _id: 3,
      show: "Name",
      name: "name",
      sort: true,
      search: true,
      component: "TdLink",
    },
    {
      _id: 2,
      show: "type",
      name: "type_id",
      sort: true,
      search: true,
    },
    {
      _id: 4,
      show: "land",
      name: "land",
      sort: true,
      search: false,
    },
    {
      _id: 5,
      show: "address",
      name: "address",
      sort: false,
      search: false,
    },
    {
      _id: 6,
      show: "Kontakt",
      name: "Kontakt",
      sort: false,
      search: false,
      date: true,
    },
  ];
  const [objects, setObjects] = useState([]);

  return (
    <DataTable
      headers={headers}
      apiName="kammer"
      apiController="establishment"
      objects={objects}
      setObjects={setObjects}
    >
      {objects.found
        ? objects.found.map((item) => (
            <tr key={item._id}>
              <td>
                <Activate
                  api="kammer.hubgrade-dev.de/establishment"
                  id={item._id}
                  status={item.isActive}
                />
              </td>
              <TdLink
                inner={`${item.name}`}
                goto={`/institute/${item._id}`}
                targetPageId="9"
              />
              <td>{item.type.name}</td>
              <td>{item.land}</td>
              <td>
                {item.address} <br />
                {item.plz} {item.city}
              </td>
              <td>
                {item.email} <br />
                tel: {item.tel} <br />
                fax: {item.fax}
              </td>
            </tr>
          ))
        : ""}
    </DataTable>
  );
}

export default List;
