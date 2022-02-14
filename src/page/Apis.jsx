import { React, useState, useContext } from "react";
import PageInfo from "../components/common/PageInfo";
import AddNewAPI from "../components/apis/AddNewAPI";
import ListApis from "../components/apis/ListApis";
import UpdateAPI from "../components/apis/UpdateAPI";
import ListApisTrash from "../components/apis/ListApisTrash";
import MainContext from "../context/MainContext";

function Apis() {
  const {
    addForm,
    showTrash,
    setaddForm,
    setshowTrash,
    setshowList,
    editForm,
    seteditForm,
    showList,
  } = useContext(MainContext);
  const [pageState, setPageState] = useState();
  /*const [editForm, setEditForm] = useState();
  const [addForm, setAddForm] = useState();
  const [showTrash, setshowTrash] = useState();
  const [showList, setshowList] = useState(true);*/
  const switchListTrashFunction = () => {
    if (showList) {
      setshowList(false);
      setshowTrash(true);
    } else {
      setshowList(true);
      setshowTrash(false);
    }
  };
  return (
    <div>
      <PageInfo
        addBtnText="neue API hinzufügen"
        addBtnFunction={() => setaddForm(true)}
        switchListTrashFunction={() => switchListTrashFunction()}
      />
      <div className="row">
        {addForm ? (
          <div className="col-md-12 fadeIn">
            <AddNewAPI
              setAddForm={setaddForm}
              setPageState={setPageState}
              closeForm={() => setaddForm(false)}
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
              closeForm={seteditForm}
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
          <ListApisTrash setEditForm={seteditForm} pageState={pageState} />
        </div>
      ) : (
        ""
      )}

      {showList ? (
        <div className="row items-push">
          <ListApis setEditForm={seteditForm} pageState={pageState} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Apis;
