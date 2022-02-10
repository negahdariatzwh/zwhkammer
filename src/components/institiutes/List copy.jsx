import { React, useState } from "react";
import Service from "../../service/DynamicService";
import DynamicListTable from "../common/DynamicListTable";
import { toast } from "react-toastify";
function List() {
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
      _id: 3,
      show: "Name",
      name: "name",
      sort: true,
      search: true,
      component: "TdLink",
    },
    {
      _id: 2,
      show: "type",
      name: "type_id",
      sort: true,
      search: true,
    },
    {
      _id: 4,
      show: "land",
      name: "land",
      sort: true,
      search: false,
    },
    {
      _id: 5,
      show: "address",
      name: "address",
      sort: false,
      search: false,
    },
    {
      _id: 6,
      show: "Kontakt",
      name: "Kontakt",
      sort: false,
      search: false,
      date: true,
    },
  ];
  const [objects, setObjects] = useState([]);

  return (
    <DynamicListTable
      headers={headers}
      apiUrl={"kammer.hubgrade-dev.de/establishment"}
    />
  );
}

export default List;
