import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import MiniAddBtn from "../common/MiniAddBtn";
function Companies({ user_id }) {
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
      name: "establishment",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 3,
      show: "Position",
      name: "position",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 4,
      show: "Add new Institute",
      name: "",
      sort: false,
      search: false,
      component: "",
    },
  ];
  const [objects1, setObjects1] = useState([]);
  console.log("sadfsdsdf", objects1);
  return (
    <DataTable
      headers={headers}
      apiName="kammer"
      apiController="user"
      apiMethod="establishments"
      apiId={user_id}
      objects={objects1}
      setObjects={setObjects1}
      headerColor="bg-gd-emerald"
      title="List Establishments"
    >
      {objects1.found
        ? objects1.found.map((establishment) => (
            <tr key={Math.random()}>
              <td>
                <Activate
                  api="zzls.hubgrade-dev.de/establishment_user"
                  id={establishment._id}
                  status={establishment.isActive}
                />
              </td>
              <td>{establishment.establishment.name}</td>
              <td>{establishment.position}</td>
              <td>
                <MiniAddBtn />
              </td>
            </tr>
          ))
        : null}
    </DataTable>
  );
}

export default Companies;
