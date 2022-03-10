import { React, useState, useContext, Fragment } from "react";
import DataTable from "../common/DataTable";
import Activate from "../common/Activate";
import TdLink from "../common/TdLink";
import ReactHtmlParser from "react-html-parser";
import MainContext from "../../context/MainContext";
import MiniRestoreBtn from "../common/MiniRestoreBtn";
import MiniremoveBtn from "../common/MiniRemoveBtn";
function TrashMethods({ id }) {
  const { authError, refreshTrash } = useContext(MainContext);
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
      {id ? (
        <DataTable
          headers={headers}
          apiName="kammer"
          apiController="ctrl"
          apiMethod="trashmethods"
          apiId={id}
          objects={objects}
          setObjects={setObjects}
          refresh={refreshTrash}
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
                      <MiniRestoreBtn
                        apiName="kammer"
                        apiController="method"
                        id={item._id}
                      />
                    </span>
                    <span className="">
                      <MiniremoveBtn
                        apiName="kammer"
                        apiController="method"
                        id={item._id}
                      />
                    </span>
                  </td>
                </tr>
              ))
            : ""}
        </DataTable>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default TrashMethods;
