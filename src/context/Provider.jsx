import { React, useState } from "react";
import MainContext from "./MainContext";
import PAGES_INFO from "../app/PAGES_INFO";

function Provider({ children }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pages, setpages] = useState(PAGES_INFO);
  const [currentPage_id, setcurrentPage_id] = useState(1);
  const [currentPage, setcurrentPage] = useState([]);
  const [refresh, setRefresh] = useState();
  const [authError, setAuthError] = useState();
  const [editForm, seteditForm] = useState();
  const [addForm, setaddForm] = useState();
  const [showTrash, setshowTrash] = useState();
  const [showList, setshowList] = useState(true);
  const [parent, setparent] = useState([]);
  const [refreshList, setRefreshList] = useState();
  const [refreshTrash, setrefreshTrash] = useState();
  const [paramId, setparamId] = useState();
  const [token, setToken] = useState();

  return (
    <MainContext.Provider
      value={{
        paramId,
        setparamId,
        editForm,
        seteditForm,
        addForm,
        setaddForm,
        showTrash,
        setshowTrash,
        showList,
        setshowList,
        parent,
        setparent,
        refreshList,
        setRefreshList,
        refreshTrash,
        setrefreshTrash,
        name,
        setName,
        email,
        setEmail,
        currentPage_id,
        setcurrentPage_id,
        pages,
        setpages,
        currentPage,
        setcurrentPage,
        refresh,
        setRefresh,
        authError,
        setAuthError,
        token,
        setToken,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export default Provider;
