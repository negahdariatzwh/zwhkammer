import { React, useEffect, useState, Fragment } from "react";
import Service from "../../service/DynamicService";
import { toast } from "react-toastify";
import TableHeader from "./TableHeader";
import Pagination from "../common/Pagination";
import Card from "./Card";
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
  headerBtn,
  headerBtnClick,
}) {
  const [page, setPage] = useState(1);
  const [order, setorder] = useState();
  const [sortDirection, setsortDirection] = useState(1);
  const [searchHandle, setsearchHandle] = useState();
  const [error, seterror] = useState();
  const [searchItem, setsearchItem] = useState();
  const [searchValue, setsearchValue] = useState();

  const sortHandle = (item) => {
    setorder(item.name);
    setsortDirection(sortDirection === 1 ? 0 : 1);
  };
  useEffect(() => {
    refreshMyData();
  }, [
    page,
    order,
    sortDirection,
    searchHandle,
    refresh,
    filter,
    searchItem,
    searchValue,
  ]);

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
      filter,
      searchItem,
      searchValue
    )
      .then((response) => {
        setObjects(response.success);
        console.log("datatable response", response.success);
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
      filter,
      searchItem,
      searchValue
    )
      .then((response) => {
        setObjects(response.success);
        console.log("datatable response", response.success);
      })
      .catch((er) => {
        seterror(er);
        toast.error(er);
      });
  };
  return (
    <Card
      title={title}
      color={headerColor}
      topBtn={headerBtn}
      topBtnClick={headerBtnClick}
    >
      {!error ? (
        <div className="content">
          <div className="table-responsive">
            <table className="table table-vcenter table-hover">
              <thead>
                <TableHeader
                  headers={headers}
                  sortHandle={sortHandle}
                  searchHandle={setsearchHandle}
                  searchItemSet={setsearchItem}
                  searchValueSet={setsearchValue}
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
      ) : null}
    </Card>
  );
}

export default DataTable;
