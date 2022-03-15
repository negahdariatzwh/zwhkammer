import { React, useState } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import MiniDeleteBtn from "../common/MiniDeleteBtn";
function Companies({ user_id, handleBtnAddNewCompany }) {
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
      show: "löschen",
      name: "",
      sort: false,
      search: false,
      component: "",
    },
  ];
  const [objects1, setObjects1] = useState([]);
  const [refreshlish, setRefreshList] = useState();
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
      title="List Institiutes"
      headerBtn="far fa-2x fa-plus-square"
      headerBtnClick={handleBtnAddNewCompany}
      refresh={refreshlish}
    >
      {objects1.found
        ? objects1.found.map((establishment) => (
            <tr key={Math.random()}>
              <td>
                <Activate
                  apiName="kammer"
                  apiController="establishment_user"
                  id={establishment._id}
                  status={establishment.isActive}
                />
              </td>
              <td>{establishment.establishment.name}</td>
              <td>{establishment.position}</td>
              <td>
                <MiniDeleteBtn
                  apiName="kammer"
                  apiController="establishment_user"
                  id={establishment._id}
                  refresh={setRefreshList}
                />
              </td>
            </tr>
          ))
        : null}
    </DataTable>
  );
}

export default Companies;
