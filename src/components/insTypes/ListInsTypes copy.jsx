import { Fragment, React, useEffect, useState } from "react";
import Card from "../common/Card";
import Pagination from "../common/Pagination";
import InsTypeActivate from "../../components/insTypes/InsTypeActivate";
import TdLink from "../common/TdLink";
import InsTypesService from "../../service/InsTypesService";
import { toast } from "react-toastify";

function ListInsTypes() {
  const [insTypes, setInsTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState();

  //eslint-disable-next-line react-hooks/exhaustive-deps

  // const handleGetInsTypes = async () => {
  //   let data = await InsTypesService.listInsTypes();
  //   setInsTypes(data.success.found);
  //   console.log("data.sucsess",data.success);
  // };

  // useEffect(handleGetInsTypes, [page]);
  // const onPageSelect = (page) => {
  //   setPage(page);
  // };
  //#####################################################
  useEffect(() => {
    setOpen(false);
    updateData();
  }, [page]);

  const onPageSelect = (page) => {
    setPage(page);
  };

  const updateData = () => {
    InsTypesService.listInsTypes()
      .then((response) => {
        setInsTypes(response.success.found);
        //console.log(response.success.found);
      })
      .catch((er) => {
        toast.error(er);
      });
  };
  //#####################################################

  const handleDelete = (insTypesId) => {
    let answer = window.confirm("Are you shure?");
    if (answer) {
      InsTypesService.delInsTypes(insTypesId)
        .then((response) => {
          toast.success("deleted");
          updateData();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //some code
    }
  };

  //#####################################################
  //const handleEdit = (item) => {
  //setOpen(true);
  console.log(open);
  //};
  //#####################################################
  //#####################################################

  return (
    <Fragment>
      <Card title="List Institute Types">
        <div className="row">
          <div className="col-12">
            <form action="">{}</form>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table id="example2" className="table  table-hover">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {insTypes.map((item) => (
                  <tr key={item._id}>
                    <th>
                      <InsTypeActivate status={item.isActive} id={item._id} />
                    </th>

                    <TdLink
                      inner={`${item.name}`}
                      goto={`/insTypes/${item._id}`}
                    />
                    <td>{item.description}</td>
                    <td>
                      <span onClick={() => handleDelete(item._id)}>del</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Status</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
            <div className="left">
              <Pagination total="50" PerPage="20" onPageSelect={onPageSelect} />
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}

export default ListInsTypes;
