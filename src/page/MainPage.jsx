import { React, useEffect, useContext } from "react";
import PageInfo from "../components/common/PageInfo";
import DynamicService from "../service/DynamicService";
import { toast } from "react-toastify";
import Institute from "../components/mainPage/Institute";
import MainContext from "../context/MainContext";
function Home() {
  //const [searchParams, setSearchParams] = useSearchParams();
  //let longTermToken = searchParams.get("token");
  //console.log(longTermToken);
  const { setToken, token } = useContext(MainContext);
  useEffect(() => {
    let longToken = localStorage.getItem("longTermToken");
    let upid = localStorage.getItem("upid");
    const formPayload = new FormData();
    formPayload.append("token", longToken);
    formPayload.append("upid", upid);
    DynamicService.dynamicPost("kammer", "myproject", "permission", formPayload)
      .then((response) => {
        localStorage.setItem("token", response.success);
        setToken(response.success);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  return (
    <div>
      <PageInfo />
      <h1>Welcome Dashboard Home index</h1>
      <Institute />
    </div>
  );
}

export default Home;
