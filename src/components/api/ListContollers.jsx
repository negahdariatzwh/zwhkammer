import { React, useState, useContext, Fragment } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import TdLink from "../common/TdLink";
import MiniDeleteBtn from "../common/MiniDeleteBtn";
import MainContext from "../../context/MainContext";
import MiniEditBtn from "../common/MiniEditBtn";
import IsActive from "../common/IsActive";

function ListContollers({ api_id }) {
  const { authError, seteditForm, setRefreshList, refreshList } =
    useContext(MainContext);
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
      show: "Generic",
      name: "generic",
      sort: true,
      search: true,
      component: "Tdlink",
    },

    {
      _id: 3,
      show: "Name",
      name: "name",
      sort: true,
      search: true,
      component: "Tdlink",
    },
    {
      _id: 4,
      show: "beschreibung",
      name: "description",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 5,
      show: "",
      name: "",
      sort: false,
      search: false,
      component: "",
    },
  ];
  const [objects, setObjects] = useState([]);

  return (
    <Fragment>
      {api_id ? (
        <DataTable
          headers={headers}
          apiName="kammer"
          apiController="api"
          apiMethod="listcontollers"
          apiId={api_id}
          objects={objects}
          setObjects={setObjects}
          refresh={refreshList}
          headerColor="bg-gd-emerald"
          title="List controllers"
        >
          {!authError && objects.found ? (
            objects.found.map((item) => (
              <tr key={item._id}>
                <td>
                  <Activate
                    apiName="kammer"
                    apiController="ctrl"
                    id={item._id}
                    status={item.isActive}
                  />
                </td>
                <td>
                  <IsActive active={item.generic} />
                </td>
                <TdLink
                  inner={`${item.name}`}
                  goto={`/controller/${item._id}`}
                  targetPageId="12"
                />
                <td>{item.description}</td>
                <td>
                  <span className="">
                    <MiniDeleteBtn
                      apiName="kammer"
                      apiController="ctrl"
                      id={item._id}
                      refresh={() => setRefreshList(Math.random())}
                    />
                  </span>
                  <span className="">
                    <MiniEditBtn onClick={() => seteditForm(item._id)} />
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </DataTable>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default ListContollers;
