import { React, useContext } from "react";
import { useHistory } from "react-router";
import { getPage } from "../../app/Utils.js";
import MainContext from "../../context/MainContext";
function TdLink({ inner, goto, targetPageId }) {
  const history = useHistory();
  const { currentPage, setcurrentPage_id, setcurrentPage } =
    useContext(MainContext);
  const handleGo = () => {
    setcurrentPage(getPage(targetPageId));
    setcurrentPage_id(targetPageId);
    //console.log("not oe ", currentPage);
    history.push(goto);
  };
  return (
    <td style={{}} onClick={() => handleGo()}>
      <span className="link"> {inner}</span>
    </td>
  );
}

export default TdLink;
