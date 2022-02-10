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
  return (
    <MainContext.Provider
      value={{
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
export default Provider;
