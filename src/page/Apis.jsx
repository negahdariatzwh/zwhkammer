import { React, useState } from "react";
import PageInfo from "../components/common/PageInfo";
import AddNewAPI from "../components/apis/AddNewAPI";
import ListApis from "../components/apis/ListApis";
import UpdateAPI from "../components/apis/UpdateAPI";
import ListApisTrash from "../components/apis/ListApisTrash";
function Apis() {
  const [pageState, setPageState] = useState();
  const [editForm, setEditForm] = useState();
  const [addForm, setAddForm] = useState();
  const [showTrash, setshowTrash] = useState();
  const [showList, setshowList] = useState(true);

  return (
    <div>
      <PageInfo
        title="Api List"
        addForm={addForm}
        showTrash={showTrash}
        setAddForm={setAddForm}
        btnText="neue Api"
        setshowTrash={() => {
          setshowTrash(!showTrash);
          setshowList(showTrash);
        }}
      />
      <div className="row">
        {addForm ? (
          <div className="col-md-12 fadeIn">
            <AddNewAPI
              setAddForm={setAddForm}
              setPageState={setPageState}
              closeForm={() => setAddForm(false)}
              pageState={pageState}
            />
          </div>
        ) : (
          ""
        )}

        {editForm ? (
          <div className="col-md-12 fadeIn">
            <UpdateAPI
              editForm={editForm}
              closeForm={() => setEditForm(false)}
              setPageState={setPageState}
              pageState={pageState}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {showTrash ? (
        <div className="row items-push">
          <ListApisTrash setEditForm={setEditForm} pageState={pageState} />
        </div>
      ) : (
        ""
      )}

      {showList ? (
        <div className="row items-push">
          <ListApis setEditForm={setEditForm} pageState={pageState} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Apis;
