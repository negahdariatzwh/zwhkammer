import { React, useEffect, useState, Fragment, useContext } from "react";
import Service from "../../service/DynamicService";
import { toast } from "react-toastify";
import TableHeader from "./TableHeader";
import Pagination from "../common/Pagination";
import { PageApiContenxt } from "../../context/PageApiContext";
function DataTable({
  apiName,
  apiController,
  apiMethod,
  apiId,
  headers,
  children,
  objects,
  setObjects,
  refresh,
}) {
  const [page, setPage] = useState(1);
  const [order, setorder] = useState();
  const [sortDirection, setsortDirection] = useState(1);
  const [searchHandle, setsearchHandle] = useState();
  const [error, seterror] = useState();
  const { refreshTrash } = useContext(PageApiContenxt);

  const sortHandle = (item) => {
    setorder(item.name);
    setsortDirection(sortDirection === 1 ? 0 : 1);
  };
  useEffect(() => {
    refreshMyData();
  }, [page, order, sortDirection, searchHandle, refreshTrash]);

  const refreshMyData = () => {
    if (apiId) {
      getDataCustom();
    } else {
      getData();
    }
  };
  const getData = () => {
    Service.list(
      apiName,
      apiController,
      page,
      order,
      sortDirection,
      searchHandle
    )
      .then((response) => {
        setObjects(response.success);
      })
      .catch((er) => {
        seterror(er);
        toast.error(er);
      });
  };

  const getDataCustom = () => {
    Service.listId(
      apiName,
      apiController,
      apiMethod,
      apiId,
      page,
      order,
      sortDirection,
      searchHandle
    )
      .then((response) => {
        setObjects(response.success);
      })
      .catch((er) => {
        seterror(er);
        toast.error(er);
      });
  };
  return (
    <Fragment>
      {!error ? (
        <div className="block block-rounded">
          <div className="block-header block-header-light">
            <Pagination
              setPage={setPage}
              currentPage={page}
              count={!objects.count ? 0 : objects.count}
            />
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-vcenter table-sm table-hover">
              <thead>
                <TableHeader
                  headers={headers}
                  sortHandle={sortHandle}
                  searchHandle={setsearchHandle}
                />
              </thead>
              <tbody>{children}</tbody>
              <tfoot></tfoot>
            </table>
            <Pagination
              setPage={setPage}
              currentPage={page}
              count={!objects.count ? 0 : objects.count}
            />
          </div>
          <div className="card"></div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default DataTable;
