import { React, useState, useContext, Fragment } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import TdLink from "../common/TdLink";
import MiniDeleteBtn from "../common/MiniDeleteBtn";
import MainContext from "../../context/MainContext";
import MiniEditBtn from "../common/MiniEditBtn";
import ReactHtmlParser from "react-html-parser";
function ListMethods(props) {
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
      show: "Name",
      name: "name",
      sort: true,
      search: true,
      component: "Tdlink",
    },
    {
      _id: 3,
      show: "beschreibung",
      name: "description",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 4,
      show: "Beispiel",
      name: "example",
      sort: false,
      search: false,
      component: "",
    },
    {
      _id: 5,
      show: "Result",
      name: "result",
      sort: false,
      search: false,
      component: "",
    },

    {
      _id: 6,
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
      {props.id ? (
        <DataTable
          headers={headers}
          apiName="kammer"
          apiController="ctrl"
          apiMethod="listmethods"
          apiId={props.id}
          objects={objects}
          setObjects={setObjects}
          refresh={refreshList}
          title="Method List"
          headerColor="bg-gd-emerald"
        >
          {!authError && objects.found
            ? objects.found.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Activate
                      apiName="kammer"
                      apiController="method"
                      id={item._id}
                      status={item.isActive}
                    />
                  </td>
                  <TdLink
                    inner={`${item.name}`}
                    goto={`/method/${item._id}`}
                    targetPageId="12"
                  />
                  <td>{item.description}</td>
                  <td>{ReactHtmlParser(item.example)}</td>
                  <td>{ReactHtmlParser(item.result)}</td>
                  <td>
                    <span className="">
                      <MiniDeleteBtn
                        apiName="kammer"
                        apiController="method"
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
            : ""}
        </DataTable>
      ) : (
        <tr></tr>
      )}
    </Fragment>
  );
}

export default ListMethods;
