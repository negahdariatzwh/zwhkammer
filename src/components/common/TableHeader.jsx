import React from "react";
import TableSortIcon from "./TableSortIcon";
import TableSearchIcon from "./TableSearchIcon";
import TableSearchDate from "./TableSearchDate";
function TableHeader({
  headers,
  sortHandle,
  searchHandle,
  searchItemSet,
  searchValueSet,
}) {
  return (
    <tr>
      {headers.map((item) =>
        item.sort || item.search || item.date ? (
          <th key={item._id}>
            {item.show}
            {item.sort ? (
              <TableSortIcon item={item} sortHandle={sortHandle} />
            ) : (
              ""
            )}
            {item.search ? (
              <TableSearchIcon
                item={item.name}
                searchHandle={searchHandle}
                sethItemToSearch={searchItemSet}
                setItemToSearchValue={searchValueSet}
              />
            ) : (
              ""
            )}
            {item.date ? <TableSearchDate /> : ""}
          </th>
        ) : (
          <th key={item._id}>{item.show}</th>
        )
      )}
    </tr>
  );
}

export default TableHeader;
