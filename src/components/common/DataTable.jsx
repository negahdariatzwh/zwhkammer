import { React, useEffect, useState, Fragment } from "react";
import Service from "../../service/DynamicService";
import { toast } from "react-toastify";
import TableHeader from "./TableHeader";
import Pagination from "../common/Pagination";
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
  filter,
  headerColor,
  title,
  titleColor,
}) {
  const [page, setPage] = useState(1);
  const [order, setorder] = useState();
  const [sortDirection, setsortDirection] = useState(1);
  const [searchHandle, setsearchHandle] = useState();
  const [error, seterror] = useState();

  const sortHandle = (item) => {
    setorder(item.name);
    setsortDirection(sortDirection === 1 ? 0 : 1);
  };
  useEffect(() => {
    refreshMyData();
  }, [page, order, sortDirection, searchHandle, refresh, filter]);

  const refreshMyData = () => {
    if (apiId) {
      getDataCustom();
    } else {
      getData();
    }
  };
  const getData = () => {
    Service.list(apiName, apiController, page, order, sortDirection, filter)
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
      filter
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
          <div
            className={`block-header ${
              headerColor ? headerColor : "bg-gd-primary"
            }`}
          >
            <span className={`h5 fw-light ${titleColor ? titleColor : ""}`}>
              {title}
            </span>
          </div>

          <div className="content">
            <div className="table-responsive">
              <table className="table table-vcenter table-hover">
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
