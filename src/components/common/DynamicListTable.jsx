import { Fragment, React, useEffect, useState } from "react";
import Service from "../../service/DynamicService";
import { toast } from "react-toastify";
import ListTable from "../common/ListTable";
import TdLink from "../common/TdLink";
import Activate from "../institiutes/Activate";
import Pagination from "../common/Pagination";

function DynamicListTable({ headers, apiUrl }) {
  const [page, setPage] = useState(1);
  const [objects, setObjects] = useState([]);
  const [order, setorder] = useState();
  const [sortDirection, setsortDirection] = useState(1);

  const sortHandle = (item) => {
    setorder(item.name);
    setsortDirection(sortDirection === 1 ? 0 : 1);
  };
  useEffect(() => {
    getData();
  }, [page, order, sortDirection]);
  const getData = () => {
    //console.log(apiUrl);
    Service.list(apiUrl, page, order, sortDirection)
      .then((response) => {
        //console.log("API response", response);
        setObjects(response.success);
      })
      .catch((er) => {
        toast.error(er);
      });
  };
  return (
    <Fragment>
      <Pagination
        setPage={setPage}
        currentPage={page}
        count={!objects.count ? 0 : objects.count}
      />
      <ListTable
        headers={headers}
        setPage={setPage}
        currentPage={page}
        sortHandle={sortHandle}
      >
        {objects.found
          ? objects.found.map((item) => (
              <tr key={item._id}>
                <td>
                  <Activate status={item.isActive} id={item._id} />
                </td>
                <TdLink inner={`${item.name}`} goto={`/user/${item._id}`} />
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
      </ListTable>
      <Pagination
        setPage={setPage}
        currentPage={page}
        count={!objects.count ? 0 : objects.count}
      />
    </Fragment>
  );
}

export default DynamicListTable;
